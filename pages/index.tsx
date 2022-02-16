import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import profilePicture from "../public/images/profile-picture.jpg";

export default function Home() {
  return (
    <Layout>
      <section>
        <div className="mt-6 mx-auto pt-9 pb-11 px-6 max-w-3xl bg-white shadow-lg border rounded-sm">
          <div className="flex justify-center">
            <Image
              src={profilePicture}
              height={64}
              width={64}
              quality={100}
              alt="Sean Hasenstein smiling"
              className="rounded-full"
            />
          </div>
          <p className="mt-3 text-gray-900 text-3xl font-semibold tracking-tight leading-none text-center">
            Sean Hasenstein
          </p>
          <p className="mt-2.5 sm:mt-1.5 text-gray-500 font-semibold uppercase tracking-wide text-center">
            Web Developer
          </p>
          <p className="mt-4 mx-auto text-center max-w-sm text-lg text-gray-700">
            I'm currently available for{" "}
            <span className="underline">client work</span> and also open to{" "}
            <span className="underline">full time job</span> opportunities.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-x-3">
            <Link href="/contact">
              <a className="inline-flex justify-center items-center px-4 py-2 sm:w-44 border border-transparent text-sm font-medium text-center rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500">
                Let's talk!
              </a>
            </Link>
            <Link href="/work">
              <a className="mt-3 sm:mt-0 inline-flex justify-center items-center px-4 py-2 sm:w-44 border border-gray-400/50 shadow-sm text-sm font-medium text-center rounded-md text-gray-700 bg-white hover:border-gray-400/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                See my work
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
