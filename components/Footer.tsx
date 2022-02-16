import GithubSvg from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto pt-16 pb-8 max-w-3xl w-full text-center">
        {/* <div aria-hidden="true" className="flex justify-center">
          <div className="py-2.5 px-3.5 flex justify-center items-center text-gray-800 text-sm leading-none bg-white border border-gray-200 rounded shadow-sm">
            Status:{" "}
            <span
              className="mx-1.5 h-3 w-3 inline-block bg-emerald-400 border-[2.5px] border-emerald-200
             rounded-full"
            />
            <span className="text-gray-900">Currently available</span>
          </div>
        </div> */}
        <div className="mt-6 flex justify-center text-gray-600">
          <div className="first:pr-4 border-r border-gray-300">
            <a
              href="https://github.com/seanhasenstein"
              target="_blank"
              rel="noreferrer"
              className=" hover:text-gray-900 transition-colors"
            >
              <GithubSvg className="w-6 h-6" />
              <span className="sr-only">Github profile</span>
            </a>
          </div>
          <div className="last:pl-4">
            <a
              href="https://www.linkedin.com/in/seanhasenstein/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              <LinkedIn className="w-6 h-6" />
              <span className="sr-only">LinkedIn profile</span>
            </a>
          </div>
        </div>
        <p className="mt-5 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Sean Hasenstein. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
