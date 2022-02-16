import { Work } from "../types";
import Macaport from "../components/work/Macaport";
import MacaportDashboard from "../components/work/MacaportDashboard";
import OfficialsConnection from "../components/work/OfficialsConnection";
import OfficialsConnectionDashboard from "../components/work/OfficialsConnectionDashboard";
import ZabelMonuments from "../components/work/ZabelMonuments";
import FallsMonument from "../components/work/FallsMonument";
import VanGemertMemorials from "../components/work/VanGemertMemorials";
import SheboyganMonuments from "../components/work/SheboyganMonuments";
import SpiritOfWellness from "../components/work/SpiritOfWellness";

export const work: Work[] = [
  {
    id: "macaport",
    title: "Macaport",
    tagline: "Screen printing company",
    stack: ["React", "TypeScript", "Next.js", "MongoDb", "Stripe", "Vercel"],
    images: [
      "/images/macaport/featured-1.jpg",
      "/images/macaport/featured-2.jpg",
      "/images/macaport/featured-3.jpg",
      "/images/macaport/featured-4.jpg",
      "/images/macaport/featured-5.jpg",
      "/images/macaport/featured-6.jpg",
    ],
    tags: ["e-commerce"],
    colors: ["#ffffff", "#e5e7eb", "#0d6b2b", "#303eb1", "#282d34"],
    liveUrl: "https://macaport.com/",
    github: "https://github.com/seanhasenstein/macaport",
    description: <Macaport />,
  },
  {
    id: "macaport-admin-dashboard",
    title: "Macaport Admin Dashboard",
    tagline: "Screen printing company",
    stack: ["React", "TypeScript", "Next.js", "MongoDb"],
    images: [
      "/images/macaport-dashboard/featured-1.jpg",
      "/images/macaport-dashboard/featured-2.jpg",
      "/images/macaport-dashboard/featured-3.jpg",
      "/images/macaport-dashboard/featured-4.jpg",
      "/images/macaport-dashboard/featured-5.jpg",
      "/images/macaport-dashboard/featured-6.jpg",
    ],
    tags: ["dashboard"],
    colors: ["#ffffff", "#e5e7eb", "#0d6b2b", "#303eb1", "#282d34"],
    liveUrl: undefined,
    github: "https://github.com/seanhasenstein/macaport-admin-dashboard",
    description: <MacaportDashboard />,
  },
  {
    id: "officials-connection",
    title: "Officials Connection",
    tagline: "Basketball Officials Camps",
    stack: ["React", "TypeScript", "Next.js", "MongoDb"],
    images: [
      "/images/officials-connection/featured-1.jpg",
      "/images/officials-connection/featured-2.jpg",
      "/images/officials-connection/featured-3.jpg",
      "/images/officials-connection/featured-4.jpg",
      "/images/officials-connection/featured-5.jpg",
      "/images/officials-connection/featured-6.jpg",
    ],
    tags: ["marketing", "e-commerce"],
    colors: ["#ffffff", "#e8edf1", "#be123c", "#0369a1", "#1f2838"],
    liveUrl: "https://officialsconnection.org/",
    github: "https://github.com/seanhasenstein/officials-connection",
    description: <OfficialsConnection />,
  },
  {
    id: "officials-connection-dashboard",
    title: "Officials Connection Dashboard",
    tagline: "Basketball Officials Camps",
    stack: ["React", "TypeScript", "Next.js", "MongoDb"],
    images: [
      "/images/officials-connection-dashboard/featured-1.jpg",
      "/images/officials-connection-dashboard/featured-2.jpg",
      "/images/officials-connection-dashboard/featured-3.jpg",
      "/images/officials-connection-dashboard/featured-4.jpg",
      "/images/officials-connection-dashboard/featured-5.jpg",
      "/images/officials-connection-dashboard/featured-6.jpg",
    ],
    tags: ["dashboard"],
    colors: ["#ffffff", "#e8edf1", "#be123c", "#0369a1", "#1f2838"],
    liveUrl: undefined,
    github: "https://github.com/seanhasenstein/officials-connection-dashboard",
    description: <OfficialsConnectionDashboard />,
  },
  {
    id: "zabel-monuments",
    title: "Zabel Monuments",
    tagline: "Monument Company",
    stack: ["React", "TypeScript", "Gatsby"],
    images: [
      "/images/zabel/featured-1.jpg",
      "/images/zabel/featured-2.jpg",
      "/images/zabel/featured-3.jpg",
      "/images/zabel/featured-4.jpg",
      "/images/zabel/featured-5.jpg",
      "/images/zabel/featured-6.jpg",
    ],
    tags: ["marketing"],
    colors: ["#f8fafc", "#f1c166", "#6ea546", "#466ea5", "#2a2721"],
    liveUrl: "https://zabelmonuments.com/",
    github: "https://github.com/seanhasenstein/zabel-monuments",
    description: <ZabelMonuments />,
  },
  {
    id: "falls-monument-company",
    title: "Falls Monument Company",
    tagline: "Monument Company",
    stack: ["React", "TypeScript", "Gatsby"],
    images: [
      "/images/falls/featured-1.jpg",
      "/images/falls/featured-2.jpg",
      "/images/falls/featured-3.jpg",
      "/images/falls/featured-4.jpg",
      "/images/falls/featured-5.jpg",
      "/images/falls/featured-6.jpg",
    ],
    tags: ["marketing"],
    colors: ["#ffffff", "#e5e7eb", "#96938d", "#466ea5", "#2a2721"],
    liveUrl: "https://www.fallsmonument.com/",
    github: "https://github.com/seanhasenstein/fallsmonument.com",
    description: <FallsMonument />,
  },
  {
    id: "van-gemert-memorials",
    title: "Van Gemert Memorials",
    tagline: "Monument Company",
    stack: ["React", "TypeScript", "Gatsby"],
    images: [
      "/images/vangemert/featured-1.jpg",
      "/images/vangemert/featured-2.jpg",
      "/images/vangemert/featured-3.jpg",
      "/images/vangemert/featured-4.jpg",
      "/images/vangemert/featured-5.jpg",
      "/images/vangemert/featured-6.jpg",
    ],
    tags: ["marketing"],
    colors: ["#ffffff", "#ddd4cb", "#a5ba9a", "#377e96", "#2a2721"],
    liveUrl: "https://www.vangemertmemorials.com/",
    github: "https://github.com/seanhasenstein/vangemertmemorials.com",
    description: <VanGemertMemorials />,
  },
  {
    id: "sheboygan-monuments",
    title: "Sheboygan Monuments",
    tagline: "Monument Company",
    stack: ["React", "TypeScript", "Gatsby"],
    images: [
      "/images/sheboygan/featured-1.jpg",
      "/images/sheboygan/featured-2.jpg",
      "/images/sheboygan/featured-3.jpg",
      "/images/sheboygan/featured-4.jpg",
      "/images/sheboygan/featured-5.jpg",
      "/images/sheboygan/featured-6.jpg",
    ],
    tags: ["marketing"],
    colors: ["#ffffff", "#e5e5e5", "#8ca833", "#2c6c9c", "#171717"],
    liveUrl: "https://www.sheboyganmonuments.com/",
    github: "https://github.com/seanhasenstein/sheboyganmonuments.com",
    description: <SheboyganMonuments />,
  },
  {
    id: "spirit-of-wellness",
    title: "Spirit of Wellness",
    tagline: "5k Race",
    stack: ["WordPress"],
    images: [
      "/images/spiritofwellness/featured-1.jpg",
      "/images/spiritofwellness/featured-2.jpg",
      "/images/spiritofwellness/featured-3.jpg",
      "/images/spiritofwellness/featured-4.jpg",
      "/images/spiritofwellness/featured-5.jpg",
      "/images/spiritofwellness/featured-6.jpg",
    ],
    tags: ["marketing"],
    colors: ["#ffffff", "#d8d6d6", "#debc00", "#158539", "#111111"],
    liveUrl: undefined,
    github: undefined,
    description: <SpiritOfWellness />,
  },
];

export const languages = [
  [
    { id: 1, text: "JavaScript" },
    { id: 2, text: "TypeScript" },
    { id: 3, text: "HTML" },
  ],
  [
    { id: 4, text: "CSS" },
    { id: 5, text: "GraphQL" },
    { id: 6, text: "MongoDB" },
  ],
];

export const tools = [
  [
    { id: 1, text: "Node.js" },
    { id: 2, text: "React" },
    { id: 3, text: "Next.js" },
    { id: 4, text: "Gatsby" },
    { id: 5, text: "Styled Components" },
    { id: 6, text: "Tailwind" },
  ],
  [
    { id: 7, text: "React Query" },
    { id: 8, text: "Formik" },
    { id: 9, text: "Jest" },
    { id: 10, text: "Git" },
    { id: 11, text: "Vercel" },
    { id: 12, text: "Netlify" },
  ],
];

export const education = [
  {
    id: 1,
    school: "University of Wisconsin-Stout",
    degree: "M.S. Information & Communication Technology",
    timeframe: "2012-2014",
  },
  {
    id: 2,
    school: "University of Wisconsin-Stevens Point",
    degree: "B.S. Economics & Business Administration",
    timeframe: "2007-2012",
  },
];

export const experienceItems = [
  {
    id: 1,
    title: (
      <a
        href="https://macaport.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-indigo-600 hover:underline"
      >
        Macaport - Screen Printing Company
      </a>
    ),
    product: "E-Commerce Platform & Dashboard",
    position: "Web Designer/Developer",
    timefrome: "2020-present",
    tagline:
      "Built an e-commerce platform with Next.js, MongoDB, and Vercel. The app includes online stores with persistent carts and a checkout system that uses React context, Formik, and Stripe. Also includes a dashboard built with React Query and serverless functions to manage the API's for inventory, stores, products, and orders.",
    tools: [
      "Next.js",
      "NextAuth",
      "Styled Components",
      "Formik",
      "MongoDb",
      "Stripe",
    ],
  },
  {
    id: 4,
    title: (
      <>
        <a
          href="https://zabelmonuments.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-600 hover:underline"
        >
          Zabel Monuments
        </a>
        ,{" "}
        <a
          href="https://www.vangemertmemorials.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-600 hover:underline"
        >
          Van Gemert Memorials
        </a>
        ,{" "}
        <a
          href="https://www.sheboyganmonuments.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-600 hover:underline"
        >
          Sheboygan Monuments
        </a>
        , &{" "}
        <a
          href="https://www.fallsmonument.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-indigo-600 hover:underline"
        >
          Falls Monument
        </a>
      </>
    ),
    product: "Marketing Websites & IT Services",
    position: "Web Designer/Developer",
    timefrome: "2016-present",
    tagline:
      "Designed and developed marketing websites for these four monument companies. The websites are built with Gatsby, hosted on Netlify, and use Netlify’s serverless functions. Website features include accessible testimonial sliders, lightbox image galleries, and FAQ accordions. Also provide other IT services.",
    tools: ["Gatsby", "Styled Components", "Cloudinary", "Netlify"],
  },
  {
    id: 7,
    title: (
      <a
        href="https://officialsconnection.org/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-indigo-600 hover:underline"
      >
        WI Basketball Yearbook Officials Camps
      </a>
    ),
    product: "E-Commerce Platform, Dashboard, & Email Marketing",
    position: "Web Designer/Developer",
    timefrome: "2015-present",
    tagline:
      "Built an e-commerce platform with Next.js, MongoDB, and Vercel. The app includes a registration that uses React context, Formik, and Stripe. Includes a dashboard built with React Query and serverless functions to manage the registrations API. Also built a Node.js server to run email marketing campaigns with Mailgun.",
    tools: [
      "Next.js",
      "NextAuth",
      "Formik",
      "Styled Components",
      "MongoDb",
      "Stripe",
    ],
  },
  {
    id: 6,
    title: "Lakeshore Force AAU Basketball Program",
    product: "Marketing & Information Website",
    position: "Web Designer/Developer",
    timefrome: "2015-2018",
    tagline:
      "Designed and developed a bespoke WordPress website for the eight team AAU basketball program. The website included team news, rosters, schedules, and statistics.",
    tools: ["WordPress"],
  },
  {
    id: 8,
    title: "New Direction for Seniors",
    product: "Marketing Website & IT Services",
    position: "Web Designer/Developer",
    timefrome: "2015-2017",
    tagline:
      "Designed, developed, and managed a bespoke WordPress website for the downsizing and estate sales business. Also provided other IT services and some print design work.",
    tools: ["WordPress", "Photoshop", "Illustrator"],
  },
];

export const otherJobs = [
  {
    id: 1,
    entity: "Sheboygan Lutheran High School",
    position: "Assistant Cross Country/Track & Field Coach",
    timeframe: "2013-present",
  },
  {
    id: 2,
    entity: "University of Wisconsin-Stout",
    position: "Assistant Cross Country/Track & Field Coach",
    timeframe: "2012-2013",
  },
];
