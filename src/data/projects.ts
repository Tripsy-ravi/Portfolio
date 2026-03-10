export type Project = {
  title: string;
  description: string;
  status: "Live" | "Prototype" | "Case Study";
  stack: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "Healthcare Integration Suite",
    description:
      "A suite of HL7 and API integrations that automate patient workflows across RIS platforms, with monitoring and reliability built in.",
    status: "Case Study",
    stack: ["HL7", "AWS Lambda", "Mirth Connect", "PostgreSQL"],
  },
  {
    title: "Delzzy Subscription Delivery",
    description:
      "A startup concept built end-to-end with product ideation, 20+ Figma screens, and a React Native prototype.",
    status: "Prototype",
    stack: ["React Native", "Figma", "MongoDB", "Redux"],
  },
  {
    title: "EncrypConnect",
    description:
      "Secure contacts app with JWT auth, bcrypt password hashing, and protected routes.",
    status: "Prototype",
    stack: ["Node.js", "Express", "JWT", "MongoDB"],
  },
  {
    title: "FilterFind",
    description:
      "A CRUD store app with advanced filtering and robust middleware validation.",
    status: "Prototype",
    stack: ["Node.js", "MongoDB", "Express"],
  },
  {
    title: "Dimensional Showcase",
    description:
      "A 3D portfolio experience using Three.js with smooth motion design.",
    status: "Prototype",
    stack: ["React", "Three.js", "Tailwind", "Framer Motion"],
  },
];
