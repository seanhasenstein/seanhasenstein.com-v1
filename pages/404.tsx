import Link from "next/link";
import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Layout>
      <section>
        <div className="mt-10 mx-auto">
          <div className="mt-6 mx-auto pt-9 pb-10 px-6 max-w-lg text-center bg-white shadow-lg border rounded-sm">
            <div className="flex justify-center">
              <div className="h-10 w-10 flex justify-center items-center bg-red-50 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mt-1.5 text-xl font-semibold text-gray-900 tracking-tight">
              404 - Not found
            </h3>
            <p className="mt-1.5 mx-auto xxs:w-64 text-gray-600">
              Sorry, the page you are looking for does not exist.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row justify-center gap-x-3">
              <Link href="/">
                <a className="inline-flex justify-center items-center px-4 py-2 sm:w-44 border border-transparent text-sm font-medium text-center rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500">
                  Back to home
                </a>
              </Link>
              <Link href="/contact">
                <a className="mt-3 sm:mt-0 inline-flex justify-center items-center px-4 py-2 sm:w-44 border border-gray-400/50 shadow-sm text-sm font-medium text-center rounded-md text-gray-700 bg-white hover:border-gray-400/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Contact me
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
