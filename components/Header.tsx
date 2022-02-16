import Link from "next/link";
import { useRouter } from "next/router";
import { isActivePage } from "../utils";

const navItems = [
  {
    id: 1,
    text: "Home",
    href: "/",
  },
  {
    id: 2,
    text: "Work",
    href: "/work",
  },
  {
    id: 3,
    text: "Resume",
    href: "/resume",
  },
  {
    id: 4,
    text: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const router = useRouter();
  return (
    <header className="-mt-4">
      <div className="mx-auto">
        <div className="mb-5 flex justify-center">
          <Link href="/">
            <a>
              <div className="h-10 w-10 inline-flex justify-center items-center bg-gray-300 rounded-full">
                <span className="h-8 w-8 inline-flex justify-center items-center bg-gray-900 text-gray-100 text-xl font-extrabold rounded-full">
                  S
                </span>
              </div>
            </a>
          </Link>
        </div>
        <nav>
          <ul className="pb-6 w-full inline-flex justify-center gap-x-8 xs:gap-11">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>
                  <a
                    className={`text-sm xs:text-base leading-6 text-gray-900 hover:text-black hover:underline focus:outline-none focus-visible:text-indigo-600 focus-visible:underline${
                      isActivePage(router.pathname, item.text)
                        ? " underline"
                        : ""
                    }`}
                  >
                    {item.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
