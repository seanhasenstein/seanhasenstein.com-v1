import Link from "next/link";

const list = [
  "A customized registration process.",
  "Stripe for transactions.",
  "Mailgun for marketing and transactional emails.",
];

export default function OfficialsConnection() {
  return (
    <div>
      <p className="mt-1 text-sm text-gray-600">
        I have been working with the the Wisconsin Basketball Yearbook Officials
        Camps since 2015. We use{" "}
        <a
          href="https://officialsconnection.org"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-black"
        >
          officialsconnection.org
        </a>{" "}
        for marketing and registration.
      </p>
      <p className="mt-4 text-sm text-gray-600">
        Along with the website I also created a{" "}
        <Link href="/work/officials-connection">
          <a className="underline hover:text-black">dashboard</a>
        </Link>{" "}
        that manages their registration and scheduling API's. And finally I
        created a{" "}
        <a
          href="https://github.com/seanhasenstein/wbyoc-email-server"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-black"
        >
          Node.js server
        </a>{" "}
        that uses Mailgun for email marketing campaigns.
      </p>
      <h4 className="mt-7 text-sm font-semibold text-gray-900 uppercase tracking-wide">
        Website features include:
      </h4>
      <ul className="pl-4">
        {list.map((item, i) => (
          <li key={i} className="mt-2.5 pl-1 text-sm text-gray-600 list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
