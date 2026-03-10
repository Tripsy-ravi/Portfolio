export type Experience = {
  role: string;
  company: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Technical Account Manager",
    company: "Superleap",
    highlights: [
      "Own technical success for enterprise accounts, aligning product outcomes with customer goals.",
      "Lead cross-functional delivery for integrations, onboarding, and adoption.",
      "Translate customer pain points into actionable product and engineering priorities.",
    ],
  },
  {
    role: "Solutions Engineer",
    company: "AlphaNodus",
    highlights: [
      "Architected 10+ healthcare integrations across RIS platforms using HL7 and API workflows.",
      "Built end-to-end integration pipelines for patient creation, order entry, and prior auth updates.",
      "Designed monitoring for Mirth Connect with CloudWatch Agent and Prometheus.",
      "Delivered serverless integration services on AWS Lambda to improve reliability.",
      "Automated workflows with n8n and Twilio contributing $2-2.5M annual revenue.",
    ],
  },
  {
    role: "Software Engineer (Frontend) Intern",
    company: "AlphaNodus",
    highlights: [
      "Built a reusable TypeScript automation library powering Chrome extensions.",
      "Enabled prior authorization submissions across 8 healthcare portals.",
      "Shipped React + TypeScript extensions that drove 297.76% user growth.",
      "Led frontend testing across 248+ components with 92%+ coverage.",
    ],
  },
  {
    role: "Software Engineer (Backend) Intern",
    company: "AlphaNodus",
    highlights: [
      "Engineered bi-directional Evicore API integrations (OAuth2, X12 278, FHIR, CDS).",
      "Worked on event-driven microservices with PostgreSQL and Knex.js.",
      "Built 30+ backend services using AWS Lambda, SNS/SQS FIFO, Step Functions.",
      "Developed unit + integration test suites with AVA and Sinon (92%+ coverage).",
    ],
  },
];
