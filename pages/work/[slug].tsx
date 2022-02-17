import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Example } from "../../types";
import { getAllExamples, getExampleBySlug } from "../../utils/api";
import markdownToHtml from "../../utils/markdownToHtml";
import Layout from "../../components/Layout";
import GithubSvg from "../../components/icons/Github";
import markdownStyles from "../../styles/markdown.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const examples = getAllExamples(["slug"]);

  return {
    paths: examples.map((example) => {
      return {
        params: {
          slug: example.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const example = getExampleBySlug(context?.params?.slug as string, [
    "title",
    "tag",
    "website",
    "github",
    "colors",
    "stack",
    "images",
    "content",
  ]);
  const content = await markdownToHtml(example.content || "");

  return {
    props: {
      example: {
        ...example,
        content: content.value,
      },
    },
  };
};

type Props = {
  example: Example;
};

export default function ExamplePage({ example }: Props) {
  const [primaryImgIndex, setPrimaryImgIndex] = React.useState(0);
  const handleImageButtonClick = (index: number) => {
    if (index === primaryImgIndex) return;
    setPrimaryImgIndex(index);
  };

  return (
    <Layout>
      <section>
        <div className="mt-10 mx-auto">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
            {/* LEFT COLUMN */}
            <div>
              <h3 className="inline-flex text-xl font-semibold text-gray-900 tracking-tight">
                {example.title}
              </h3>
              <p className="text-gray-800">{example.tag}</p>
              {/* NAV */}
              {(example.website || example.github) && (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {example.website && (
                    <a
                      href={example.website}
                      target="_blank"
                      rel="noreferrer"
                      className="py-3 flex-1 flex flex-col justify-center items-center bg-gray-50 border border-gray-300 rounded shadow-sm transition-colors hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="mt-1 text-xs text-black font-medium">
                        Live Website
                      </span>
                    </a>
                  )}
                  {example.github && (
                    <a
                      href={example.github}
                      target="_blank"
                      rel="noreferrer"
                      className="py-3 flex-1 flex flex-col justify-center items-center bg-gray-50 border border-gray-300 rounded shadow-sm transition-colors hover:bg-white"
                    >
                      <GithubSvg className="h-6 w-6 text-gray-500" />
                      <span className="mt-1 text-xs text-black font-medium">
                        Code on GitHub
                      </span>
                    </a>
                  )}
                </div>
              )}
              {/* COLORS */}
              <div className="mt-9">
                <h3 className="text-lg font-semibold text-gray-900">Colors</h3>
                <div className="mt-1.5 grid grid-cols-3 xs:flex xs:justify-between md:justify-start gap-y-4 gap-x-2.5">
                  {example.colors.map((c) => (
                    <div key={c} className="w-full md:w-auto">
                      <span
                        style={{ backgroundColor: c }}
                        className="inline-block h-8 w-full md:w-16 rounded border border-black/20 shadow-sm"
                      />
                      <p className="text-gray-600 text-xs font-mono lowercase">
                        {c}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* STACK */}
              <div className="mt-9">
                <h3 className="pb-1 text-lg font-semibold text-gray-900">
                  Stack
                </h3>
                <ul className="mt-0.5 w-64 grid grid-cols-2 gap-y-1.5">
                  {example.stack.map((s, i) => (
                    <li key={i} className="text-gray-600 text-sm">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              {/* DESCRIPTION */}
              <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: example.content }}
              />
            </div>
            {/* RIGHT COLUMN */}
            <div>
              <div className="flex object-cover border border-black/8 shadow-sm rounded-sm">
                {example && (
                  <img
                    src={`/images/${example.images[primaryImgIndex]}`}
                    alt={`Macaport mockup ${primaryImgIndex + 1} of ${
                      example.images.length
                    }`}
                    className="rounded-sm"
                  />
                )}
              </div>
              <div className="mt-2.5 grid grid-cols-3 gap-2">
                {example.images?.map((image, index) => (
                  <button
                    key={image}
                    className={`flex object-cover border border-black/8 shadow-sm rounded-sm hover:border-black/25 ${
                      index === primaryImgIndex
                        ? "border-black hover:border-black/100"
                        : ""
                    }`}
                    onClick={() => handleImageButtonClick(index)}
                  >
                    <img
                      src={`/images/${image}`}
                      alt={`Macaport mockup ${index + 1} of ${
                        example.images.length
                      }`}
                      className="rounded-sm"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
