"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's 3D core: a shaded icosphere inside an orbiting node cloud,
 * projected in perspective on a 2D canvas.
 *
 * Deliberately dependency-free — a three.js scene would add ~150 KB gzipped
 * to a marketing page for one decorative object. The maths here is the same
 * (rotate, perspective-divide, backface-cull, depth-sort, Lambert shade) in
 * about 4 KB.
 */

type Vec3 = [number, number, number];

const DEEP: Vec3 = [0x17, 0x18, 0x2c]; // unlit face, a step above canvas
const BRIGHT: Vec3 = [0xa5, 0xa3, 0xe0]; // violet-bright, fully lit
const SIGNAL = "198, 242, 78";
const VIOLET_BRIGHT = "165, 163, 224";

function normalize(v: Vec3): Vec3 {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}

/** Unit icosahedron, subdivided once → 80 faces. Smooth enough to read as a sphere. */
function buildIcosphere() {
  const t = (1 + Math.sqrt(5)) / 2;
  const verts: Vec3[] = [
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
    [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
    [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
  ].map((v) => normalize(v as Vec3));

  let faces: [number, number, number][] = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
  ];

  const cache = new Map<string, number>();
  const midpoint = (a: number, b: number) => {
    const key = a < b ? `${a}_${b}` : `${b}_${a}`;
    const hit = cache.get(key);
    if (hit !== undefined) return hit;
    const va = verts[a];
    const vb = verts[b];
    verts.push(normalize([va[0] + vb[0], va[1] + vb[1], va[2] + vb[2]]));
    const idx = verts.length - 1;
    cache.set(key, idx);
    return idx;
  };

  const next: [number, number, number][] = [];
  for (const [a, b, c] of faces) {
    const ab = midpoint(a, b);
    const bc = midpoint(b, c);
    const ca = midpoint(c, a);
    next.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]);
  }
  faces = next;

  return { verts, faces };
}

/** Points scattered on shells around the core, each on its own orbit. */
function buildNodes(count: number) {
  const nodes = [];
  for (let i = 0; i < count; i++) {
    // Fibonacci sphere keeps the cloud evenly spread rather than clumped.
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = i * 2.399963;
    nodes.push({
      base: [Math.cos(theta) * r, y, Math.sin(theta) * r] as Vec3,
      shell: 1.45 + ((i * 37) % 100) / 100 * 0.75,
      speed: 0.4 + ((i * 53) % 100) / 100 * 0.7,
      signal: i % 13 === 0,
    });
  }
  return nodes;
}

export default function Core3D({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { verts, faces } = buildIcosphere();
    const nodes = buildNodes(78);
    const light = normalize([-0.62, -0.58, 0.42]);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;
    let start = performance.now();

    // Pointer parallax, eased toward the target each frame.
    const tilt = { x: 0, y: 0, tx: 0, ty: 0 };

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onPointer(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      tilt.tx = ((e.clientY - rect.top) / rect.height - 0.5) * 0.5;
      tilt.ty = ((e.clientX - rect.left) / rect.width - 0.5) * 0.7;
    }

    function rotate(v: Vec3, ax: number, ay: number): Vec3 {
      // X then Y.
      const cx = Math.cos(ax);
      const sx = Math.sin(ax);
      const y1 = v[1] * cx - v[2] * sx;
      const z1 = v[1] * sx + v[2] * cx;
      const cy = Math.cos(ay);
      const sy = Math.sin(ay);
      const x2 = v[0] * cy + z1 * sy;
      const z2 = -v[0] * sy + z1 * cy;
      return [x2, y1, z2];
    }

    function draw(now: number) {
      const time = reduced ? 0 : (now - start) / 1000;

      tilt.x += (tilt.tx - tilt.x) * 0.06;
      tilt.y += (tilt.ty - tilt.y) * 0.06;

      const ax = -0.32 + tilt.x + Math.sin(time * 0.18) * 0.12;
      const ay = time * 0.17 + tilt.y;

      const cx = width / 2;
      const cy = height / 2;
      const r = Math.min(width, height) * 0.27;
      const focal = 3;

      ctx!.clearRect(0, 0, width, height);

      const project = (p: Vec3, shell: number) => {
        const k = focal / (focal - p[2] * shell);
        return {
          x: cx + p[0] * shell * r * k,
          y: cy + p[1] * shell * r * k,
          k,
          z: p[2],
        };
      };

      // --- Nodes behind the core ---
      const projectedNodes = nodes.map((n) => {
        const spun = rotate(n.base, ax, ay + time * 0.12 * n.speed);
        return { ...n, p: project(spun, n.shell), z: spun[2] };
      });
      projectedNodes.sort((a, b) => a.z - b.z);

      const drawNode = (n: (typeof projectedNodes)[number]) => {
        const depth = (n.z + 1) / 2; // 0 back → 1 front
        const alpha = 0.16 + depth * 0.7;
        const size = (0.9 + depth * 1.9) * n.p.k;
        ctx!.beginPath();
        ctx!.arc(n.p.x, n.p.y, size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${n.signal ? SIGNAL : VIOLET_BRIGHT}, ${alpha.toFixed(3)})`;
        ctx!.fill();
      };

      for (const n of projectedNodes) if (n.z < 0) drawNode(n);

      // --- The core: cull, sort, shade ---
      const spun = verts.map((v) => rotate(v, ax, ay));
      const visibleFaces: { poly: number[][]; z: number; shade: number }[] = [];

      for (const [a, b, c] of faces) {
        const va = spun[a];
        const vb = spun[b];
        const vc = spun[c];
        const nz = (va[2] + vb[2] + vc[2]) / 3;
        // Convex body on the unit sphere: the centroid is the face normal.
        const normal = normalize([
          (va[0] + vb[0] + vc[0]) / 3,
          (va[1] + vb[1] + vc[1]) / 3,
          nz,
        ]);
        if (normal[2] <= 0.02) continue; // backface
        const lambert = Math.max(
          0,
          normal[0] * light[0] + normal[1] * light[1] + normal[2] * light[2]
        );
        visibleFaces.push({
          poly: [va, vb, vc].map((v) => {
            const p = project(v, 1);
            return [p.x, p.y];
          }),
          z: nz,
          shade: 0.04 + 0.96 * Math.pow(lambert, 1.55),
        });
      }

      visibleFaces.sort((p, q) => p.z - q.z);

      for (const f of visibleFaces) {
        const mix = (i: number) => Math.round(DEEP[i] + (BRIGHT[i] - DEEP[i]) * f.shade);
        ctx!.beginPath();
        ctx!.moveTo(f.poly[0][0], f.poly[0][1]);
        ctx!.lineTo(f.poly[1][0], f.poly[1][1]);
        ctx!.lineTo(f.poly[2][0], f.poly[2][1]);
        ctx!.closePath();
        ctx!.fillStyle = `rgb(${mix(0)}, ${mix(1)}, ${mix(2)})`;
        ctx!.fill();
        ctx!.strokeStyle = `rgba(${VIOLET_BRIGHT}, 0.14)`;
        ctx!.lineWidth = 0.6;
        ctx!.stroke();
      }

      // --- Nodes in front ---
      for (const n of projectedNodes) if (n.z >= 0) drawNode(n);

      if (!reduced && visible) raf = requestAnimationFrame(draw);
    }

    resize();
    draw(performance.now());

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !reduced && !raf) {
          start = performance.now() - 1;
          raf = requestAnimationFrame(draw);
        }
        if (!visible && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    if (!reduced) window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`h-full w-full ${className}`}
    />
  );
}
