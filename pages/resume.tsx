import Layout from "../components/Layout";
import {
  education,
  experienceItems,
  languages,
  otherJobs,
  tools,
} from "../data";

export default function Resume() {
  return (
    <Layout>
      <div className="mt-6 mx-auto py-6 px-7  sm:p-12 max-w-3xl bg-white border border-gray-900/10 shadow-2xl shadow-black/10 rounded-sm">
        <div className="mb-3 md:mb-8 flex flex-col md:flex-row justify-between">
          <div className="mb-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 leading-none">
              Sean Hasenstein
            </h2>
            <p className="mt-2 px-1.5 inline-flex text-white font-medium bg-gray-800 uppercase tracking-wide">
              Web Developer
            </p>
          </div>
          <div className="hidden mb-4 pt-4 md:flex flex-col items-end justify-end text-sm text-gray-500">
            <p>seanhasenstein.com</p>
            <p>
              <a
                href="mailto:jobs@seanhasenstein.com"
                className="hover:text-indigo-600 hover:underline"
              >
                jobs@seanhasenstein.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-x-6">
          {/* COLUMN 1 */}
          <div className="md:pr-12 flex flex-col md:max-w-md w-full">
            <div>
              <h3 className="mb-2 text-lg text-gray-900 font-semibold">
                Relevant Experience
              </h3>
              <div>
                {experienceItems.map((e) => (
                  <div
                    key={e.id}
                    className="mt-7 first:mt-0 text-sm text-gray-600"
                  >
                    <div className="flex flex-col xxs:flex-row xxs:justify-between">
                      <p className="xxs:pr-4 text-gray-900 font-medium leading-tight">
                        {e.title}
                      </p>
                      <p className="mt-0.5 flex-shrink-0 text-xs text-gray-800">
                        {e.timefrome}
                      </p>
                    </div>
                    <p className="mt-0.5 text-[11px] font-medium text-gray-900">
                      {e.product}
                    </p>
                    <div>
                      <p className="mt-1 text-xs leading-snug">{e.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* COLUMN 2 */}
          <div>
            <div className="mt-9">
              <div>
                <h3 className="mb-1.5 text-xs text-gray-900 font-semibold uppercase tracking-wider">
                  Programming Languages
                </h3>
                <div className="grid grid-cols-2 w-64 md:w-auto">
                  <ul>
                    {languages[0].map((l) => (
                      <li key={l.id} className="mt-0.5 text-xs text-gray-600">
                        {l.text}
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {languages[1].map((l) => (
                      <li key={l.id} className="mt-0.5 text-xs text-gray-600">
                        {l.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-10 w-64 md:w-auto">
                <h3 className="mb-1.5 text-xs text-gray-900 font-semibold uppercase tracking-wider">
                  Frameworks &amp; Tools
                </h3>
                <div className="grid grid-cols-2">
                  <ul>
                    {tools[0].map((t) => (
                      <li key={t.id} className="mt-0.5 text-xs text-gray-600">
                        {t.text}
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {tools[1].map((t) => (
                      <li key={t.id} className="mt-0.5 text-xs text-gray-600">
                        {t.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="mb-2 text-xs text-gray-900 font-semibold uppercase tracking-wider">
                  Education
                </h3>
                <div>
                  {education.map((e) => (
                    <div key={e.id} className="mt-5 first:mt-0">
                      <p className="text-xs text-gray-900 font-medium leading-tight">
                        {e.degree}
                      </p>
                      <p className="mt-1.5 text-[11px] text-gray-500 leading-tight">
                        {e.school}
                      </p>
                      <p className="mt-0.5 text-[11px] text-gray-500 leading-tight">
                        {e.timeframe}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <h3 className="mb-2 text-xs text-gray-900 font-semibold uppercase tracking-wider">
                  Other employment
                </h3>
                <div>
                  {otherJobs.map((j) => (
                    <div key={j.id} className="mt-5 first:mt-0">
                      <p className="text-xs text-gray-900 font-medium leading-tight">
                        {j.position}
                      </p>
                      <p className="mt-1.5 text-[11px] text-gray-500 leading-tight">
                        {j.entity}
                      </p>
                      <p className="mt-0.5 text-[11px] text-gray-500 leading-tight">
                        {j.timeframe}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
