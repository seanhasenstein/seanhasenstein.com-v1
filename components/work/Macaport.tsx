import Link from "next/link";

const list = [
  "Persistent carts.",
  "Inventory management.",
  "Customizable product add-ons (names, numbers, etc).",
  "Customizable shipping options.",
  "Stripe for transactions.",
  "Mailgun for transactional emails.",
];

export default function Macaport() {
  return (
    <div>
      <p className="mt-1 text-sm text-gray-600">
        Macaport approached me looking for an e-commerce platform for their
        screen printing business. After discussing their needs I built an
        e-commerce Next.js app and a{" "}
        <Link href="/work/macaport-admin-dashboard">
          <a className="underline hover:text-black">dashboard</a>
        </Link>{" "}
        to manage the API's for inventory, stores, products, and orders.
      </p>
      <p className="mt-4 text-sm text-gray-600">
        The website gives Macaport's clients the ability to sell screen printed
        products to their groups, businesses, teams, organizations, etc.
      </p>
      <h4 className="mt-7 text-sm font-semibold text-gray-900 uppercase tracking-wide">
        Store features include:
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
