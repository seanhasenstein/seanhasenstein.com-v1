import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Work } from "../../types";
import { work } from "../../data";
import Layout from "../../components/Layout";
import GithubSvg from "../../components/icons/Github";

export default function Example() {
  const router = useRouter();
  const [data, setData] = React.useState<Work>();
  const [primaryImgIndex, setPrimaryImgIndex] = React.useState(0);

  React.useEffect(() => {
    if (work) {
      const item = work.find((w) => w.id === router.query.id);
      setData(item);
    }
  }, [router.query.id]);

  const handleImageButtonClick = (index: number) => {
    if (index === primaryImgIndex) return;
    setPrimaryImgIndex(index);
  };

  return (
    <Layout>
      <section>
        <div className="mt-10 mx-auto">
          {!data && (
            <div className="mt-6 mx-auto pt-9 pb-10 px-6 max-w-lg text-center bg-white shadow-lg border rounded-sm">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-900/25"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mt-1.5 text-xl font-semibold text-gray-900 tracking-tight">
                Example not found
              </h3>
              <p className="mt-1.5 mx-auto xs:w-64 text-gray-600">
                The example you are looking for does not exist.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row justify-center gap-x-3">
                <Link href="/">
                  <a className="inline-flex justify-center items-center px-4 py-2 sm:w-44 border border-transparent text-sm font-medium text-center rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500">
                    Back to home
                  </a>
                </Link>
                <Link href="/work">
                  <a className="mt-3 sm:mt-0 inline-flex justify-center items-center px-4 py-2 sm:w-44 border border-gray-400/50 shadow-sm text-sm font-medium text-center rounded-md text-gray-700 bg-white hover:border-gray-400/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Back to work
                  </a>
                </Link>
              </div>
            </div>
          )}
          {data && (
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
              {/* LEFT COLUMN */}
              <div>
                <h3 className="inline-flex text-xl font-semibold text-gray-900 tracking-tight">
                  {data.title}
                </h3>
                <p className="text-gray-800">{data.tagline}</p>
                {/* NAV */}
                {(data.liveUrl || data.github) && (
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {data.liveUrl && (
                      <a
                        href={data.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="py-3 flex-1 flex flex-col justify-center items-center bg-gray-50 border border-gray-300 rounded shadow-sm transition-colors hover:bg-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mt-1.5 text-xs text-black font-medium">
                          Live Website
                        </span>
                      </a>
                    )}
                    {data.github && (
                      <a
                        href={data.github}
                        target="_blank"
                        rel="noreferrer"
                        className="py-3 flex-1 flex flex-col justify-center items-center bg-gray-50 border border-gray-300 rounded shadow-sm transition-colors hover:bg-white"
                      >
                        <GithubSvg className="h-4 w-4 text-gray-500" />
                        <span className="mt-1 text-xs text-black font-medium">
                          Code on GitHub
                        </span>
                      </a>
                    )}
                  </div>
                )}
                {/* COLORS */}
                <div className="mt-9">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Colors
                  </h3>
                  <div className="mt-2 grid grid-cols-3 xs:flex xs:justify-between md:justify-start gap-y-4 gap-x-2.5">
                    {data.colors.map((c) => (
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
                    {data.stack.map((s, i) => (
                      <li key={i} className="text-gray-600 text-sm">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* DESCRIPTION */}
                <div className="mt-9">
                  <h3 className="pb-1 text-lg font-semibold text-gray-900">
                    Description
                  </h3>
                  {data.description}
                </div>
              </div>
              {/* RIGHT COLUMN */}
              <div>
                <div className="flex object-cover border border-black/8 shadow-sm rounded-sm">
                  {data && (
                    <img
                      src={data.images[primaryImgIndex]}
                      alt={`Macaport mockup ${primaryImgIndex + 1} of ${
                        data.images.length
                      }`}
                      className="rounded-sm"
                    />
                  )}
                </div>
                <div className="mt-2.5 grid grid-cols-3 gap-2">
                  {data.images?.map((image, index) => (
                    <button
                      key={image}
                      className={`flex object-cover border border-black/8 shadow-sm rounded-sm hover:border-black/25 ${
                        index === primaryImgIndex
                          ? "border-black hover:border-black/100"
                          : ""
                      }`}
                      onClick={() => handleImageButtonClick(index)}
                    >
                      <Image
                        src={image}
                        alt={`Macaport mockup photo ${index + 1} of ${
                          data.images.length
                        }`}
                        width={156}
                        height={98}
                        quality={100}
                        className="rounded-sm"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
