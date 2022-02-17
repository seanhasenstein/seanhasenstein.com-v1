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
