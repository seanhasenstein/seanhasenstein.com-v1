import { ReactNode } from "react";

export type Stack =
  | "React"
  | "TypeScript"
  | "Next.js"
  | "Gatsby"
  | "MongoDb"
  | "Stripe"
  | "Vercel"
  | "Gatsby"
  | "WordPress";

export type Work = {
  id: string;
  title: string;
  tagline: string;
  stack: Stack[];
  images: string[];
  tags: string[];
  colors: string[];
  liveUrl?: string;
  github?: string;
  description: ReactNode;
};
