import Link from "next/link";

const list = [
  "“Passwordless” email authentication.",
  "An API that handles data for inventory, stores, products, and orders.",
  "Data filtering, sorting, exporting.",
  "Printable order invoices.",
];

export default function MacaportDashboard() {
  return (
    <div>
      <p className="mt-1 text-sm text-gray-600">
        Macaport approached me for an e-commerce platform for their screen
        printing business. After discussing their needs I built them an{" "}
        <Link href="/work/macaport">
          <a className="underline hover:text-black">e-commerce website</a>
        </Link>{" "}
        and also this dashboard.
      </p>
      <p className="mt-4 text-sm text-gray-600">
        The dashboard gives Macaport the ability to manage their API's for
        inventory, stores, products, and orders.
      </p>
      <h4 className="mt-7 text-sm font-semibold text-gray-900 uppercase tracking-wide">
        Dashboard features include:
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
