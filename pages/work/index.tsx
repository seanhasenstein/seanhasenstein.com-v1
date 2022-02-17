import { GetStaticProps } from "next";
import Link from "next/link";
import { Example } from "../../types";
import { getAllExamples } from "../../utils/api";
import Layout from "../../components/Layout";

type ExamplePreview = Pick<
  Example,
  "number" | "title" | "slug" | "tag" | "categories" | "images"
>;

export const getStaticProps: GetStaticProps = async () => {
  const examples = getAllExamples([
    "number",
    "title",
    "slug",
    "tag",
    "categories",
    "images",
  ]);

  examples.sort((a: ExamplePreview, b: ExamplePreview) => {
    return a.number - b.number;
  });

  return {
    props: { examples },
  };
};

type Props = {
  examples: Example[];
};

export default function Work({ examples }: Props) {
  return (
    <Layout>
      <section>
        <div className="mt-6 mx-auto max-w-3xl">
          <div className="flex flex-col items-center justify-center">
            <h3 className="inline-flex text-center text-2xl font-medium text-gray-900 tracking-tight">
              Examples of my work
            </h3>
            <hr className="mt-4 w-16 border-gray-300" />
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {examples.map((e) => (
              <Link href={`/work/${e.slug}`} key={e.slug}>
                <a className="bg-white border-4 border-white rounded-sm shadow hover:shadow-md hover:scale-[1.0125] transition-transform overflow-hidden ring-1 ring-black ring-opacity-5 outline-indigo-600">
                  <div className="flex flex-col justify-end items-center object-cover border border-gray-900/5">
                    <img
                      src={`/images/${e.images[0]}`}
                      alt={`${e.title} mockup`}
                    />
                  </div>
                  <div className="pt-2.5 pb-2 px-1.5">
                    <div>
                      <p className="text-sm font-medium text-gray-900 leading-tight">
                        {e.title}
                      </p>
                      <p className="text-xs font-medium text-gray-500">
                        {e.tag}
                      </p>
                    </div>
                    <div className="mt-8 flex gap-x-1.5">
                      {e.categories.map((t, i) => (
                        <div
                          key={i}
                          className="py-1 px-1.5 text-[10px] text-gray-900 bg-gray-50 border border-gray-200 shadow-sm rounded-full leading-none"
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
