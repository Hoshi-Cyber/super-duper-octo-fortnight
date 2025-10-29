// src/data/pages/process.ts

export type ProcessStep = { title: string; description: string };
export type DeliverableItem = { label: string };
export type TimelineItem = { phase: string; window: string };
export type CTA = {
  title: string;
  sub: string;
  primaryHref: string;
  primaryLabel: string;
};

const processPage = {
  title: "Our Process",
  description:
    "From brief submission to final delivery, our four-step process ensures quality and satisfaction.",
  seo: { canonical: "/process/" },

  // Short intro body copy for the page header section
  intro:
    "We make it easy to get a professional CV and personal branding package. Here’s what to expect:",

  // Stepper data
  steps: [
    {
      title: "Submit Your Brief",
      description:
        "Tell us about your career history, goals and any specific roles you’re targeting.",
    },
    {
      title: "Consult & Quote",
      description:
        "We’ll review your information, ask clarifying questions and confirm the appropriate package.",
    },
    {
      title: "Draft & Revisions",
      description:
        "Our writers craft your documents and refine them based on your feedback.",
    },
    {
      title: "Final Delivery",
      description:
        "Receive polished files in PDF and DOCX formats ready for your applications.",
    },
  ] as ProcessStep[],

  // What clients receive
  deliverables: [
    { label: "Polished CV (PDF + DOCX)" },
    { label: "Editable Google Doc on request" },
    { label: "Cover letter template" },
    { label: "LinkedIn profile optimization notes" },
    { label: "ATS keyword alignment" },
    { label: "7-day revisions window" },
    { label: "Rush delivery option available" },
  ] as DeliverableItem[],

  // Typical timeline expectations
  timeline: [
    { phase: "Brief", window: "Day 0–1" },
    { phase: "Draft", window: "Day 2–3" },
    { phase: "Review", window: "Day 4–5" },
    { phase: "Final", window: "Day 5–7" },
  ] as TimelineItem[],

  // CTA banner
  cta: {
    title: "Ready to get more interviews?",
    sub: "ATS-optimized CVs, cover letters and LinkedIn profiles.",
    primaryHref: "/contact/",
    primaryLabel: "Start Now",
  } as CTA,
};

export default processPage;
