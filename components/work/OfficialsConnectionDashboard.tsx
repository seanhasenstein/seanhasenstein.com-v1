import Link from "next/link";

const list = [
  "“Passwordless” authentication.",
  "An API that handles registrations and schedules.",
  "Data filtering, sorting, and exporting.",
  "Printable registration invoices.",
];

export default function OfficialsConnectionDashboard() {
  return (
    <div>
      <p className="mt-1 text-sm text-gray-600">
        I created this dashboard to manage API's for camp registrations and camp
        scheduling. The dashboard data is connected to an{" "}
        <Link href="/work/officials-connection">
          <a className="underline hover:text-black">e-commerce platform</a>
        </Link>{" "}
        that I also built.
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
