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

export type Example = {
  number: number;
  slug: string;
  title: string;
  tag: string;
  categories: string[];
  stack: Stack[];
  images: string[];
  colors: string[];
  website?: string;
  github?: string;
  content: string;
};
