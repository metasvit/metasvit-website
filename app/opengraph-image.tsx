import { ImageResponse } from "next/og";

export const alt = "Metasvit — blockchain and AI agent engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 80, background: "#0d0e1a", color: "#f5f4f8", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 36, color: "#a5a3e0" }}>Metasvit</div>
      <div style={{ display: "flex", fontSize: 76, lineHeight: 1.08, maxWidth: 960 }}>Blockchain and AI agent engineering.</div>
      <div style={{ display: "flex", fontSize: 28 }}>metasvit.io</div>
    </div>, size,
  );
}
