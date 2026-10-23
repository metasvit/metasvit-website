# MetaSvit Hallmark redesign, 23 October 2026

Full redesign of the existing five-page Next.js site. Theme: Hallmark Console, graphite material adapted to existing MetaSvit violet brand. Genre modern-minimal, job hire: visitors inspect shipped work/services and send a technical brief.

Preserve the existing brand SVG, existing facts and metrics, every route/link/hash, contact form field names and handler/API. No invented clients, metrics or testimonials. Files remain in place. No tests or API changes.

System: dark canvas #0d0e1a, raised surface #16182a, readable ink #f5f4f8 and muted #a0a0b8, brand violet #6667ab / #a5a3e0, existing green reserved for meaningful status. Host Grotesk heads at weight 500; Inter reading text; JetBrains Mono only code/measurements. All declarations via tokens. No accented word inside headings, no eyebrows, no tracked uppercase metadata, no decorative status dots, no gradient or spotlight. No reveal-dependent hidden content. Visible instant focus ring; 44px controls; reduced motion. 1320px capped centered shell; one 32px grid gap. Body minimum16px, regular labels14px.

Shared classes available from parent stylesheet: shell; page-intro; page-title; page-lead; page-overview (intro split); content-section; section-title; section-lead; service-nav; service-detail; service-heading; service-deliverables; case-list; work-entry; work-entry-heading; work-entry-body; tag-list; fact-strip; fact-item; principle-list; principle-entry; timeline-list; timeline-entry; contact-layout; contact-facts; contact-form-panel; text-link. Use normal semantic HTML and existing components. Parent owns globals.css, tokens.css, base.css and every shared component.

Pages keep their own anatomy. Services: in-page service navigation and seven full-width detail rows. Work: five spacious project entries, existing facts as a footnote strip. About: studio introduction, principles as rows, chronological history. Contact: real form beside contact facts, no extra marketing. Never copy the home hero to these routes.
