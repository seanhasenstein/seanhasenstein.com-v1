import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Example } from "../types";

type ExampleKey = keyof Example;

const examplesDirectory = join(process.cwd(), "data/examples");

export function getExampleSlugs() {
  return fs.readdirSync(examplesDirectory);
}

export function getExampleBySlug(slug: string, fields: ExampleKey[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(examplesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Item = Record<ExampleKey, any>;

  const items: Item = {} as Item;

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllExamples(fields: ExampleKey[] = []) {
  const slugs = getExampleSlugs();
  const examples = slugs.map((slug) => getExampleBySlug(slug, fields));
  return examples;
}
