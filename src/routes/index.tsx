import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Shell } from "@/components/site/shell";
import { company, credentials, keywords, outcomes, pool, services } from "@/lib/site";
import { formatUpdateDate, hrUpdates } from "@/lib/updates";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WeHR Legal | Shadow HR, fractional CHRO and Jamshedpur manpower" },
      {
        name: "description",
        content:
          "Temporary manpower provider, hiring consultant, recruitment and manpower sourcing from Jamshedpur. Fractional HR, Fractional CHRO, Shadow HR and GeM manpower. DPIIT startup.",
      },
      { name: "keywords", content: keywords },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Shell>
      <section className="border-b border-line bg-navy text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">
              DPIIT startup · MSME · GeM manpower supplier · {company.city}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.1] font-medium md:text-6xl">
              Shadow HR, fractional CHRO and temporary manpower, staffed by people who have already done the job.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              WeHR Legal is a Jamshedpur manpower supplier and hiring consultant. Recruitment, payroll and company HR management go only to a subject expert — including retired specialists from large companies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={company.whatsapp} className="inline-flex items-center gap-2 rounded-sm bg-brass px-5 py-3 text-sm font-semibold text-navy">
                Speak with a manager <ArrowRight size={16} />
              </a>
              <Link to="/why-work-with-us" className="inline-flex items-center rounded-sm border border-mist/40 px-5 py-3 text-sm font-semibold text-paper">
                Why work with us
              </Link>
            </div>
          </div>
          <aside className="md:col-span-4">
            <div className="rounded-lg border border-navy-soft bg-navy-soft p-6">
              <p className="font-display text-3xl text-brass">{company.mark}</p>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                Thought before process. A dedicated expert business manager. No need to hire a domain expert for every task.
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-navy/40 pb-2">
                  <dt className="text-mist">Model</dt>
                  <dd>Shadow HR</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-navy/40 pb-2">
                  <dt className="text-mist">Buyers</dt>
                  <dd className="text-right">Companies & government</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-mist">Base</dt>
                  <dd>Jamshedpur</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <ul className="grid border-b border-line sm:grid-cols-2 lg:grid-cols-5">
        {credentials.map((item) => (
          <li key={item} className="border-b border-line px-5 py-4 text-sm font-medium text-navy last:border-b-0 sm:border-r lg:border-b-0">
            {item}
          </li>
        ))}
      </ul>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="max-w-2xl text-3xl font-medium text-navy md:text-4xl">
            HR outsourcing, recruitment and company HR management
          </h2>
          <p className="mt-4 max-w-2xl text-slate">
            Temporary manpower, manpower sourcing and a Fractional CHRO are separate services. Each one is executed by the person whose career was that subject.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="rounded-md border border-line bg-paper p-5">
                <h3 className="text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.text}</p>
              </article>
            ))}
          </div>
          <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
            All services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="border-b border-line bg-mist">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">The bench</p>
            <h2 className="mt-3 text-3xl font-medium text-navy md:text-4xl">A country-scale pool, not a local roster of generalists.</h2>
            <p className="mt-4 text-slate">
              Shadow HR consultants include professionals still in practice and those who retired from large employers and now take assignments. Each task is allotted only to a subject expert.
            </p>
          </div>
          <ul className="space-y-4">
            {pool.map((item) => (
              <li key={item.title} className="border-l-2 border-brass pl-4">
                <p className="font-semibold text-navy">{item.title}</p>
                <p className="mt-1 text-sm text-slate">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">HR updates</p>
            <h2 className="mt-3 text-3xl font-medium text-navy">Labour codes and payroll, written for the person who has to act.</h2>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/updates" className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                All updates <ArrowRight size={16} />
              </Link>
              <Link to="/labour-codes" className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                Central and state rules <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <article className="rounded-md border border-line bg-paper p-6 md:col-span-7">
            <p className="text-xs font-semibold tracking-widest text-brass uppercase">
              {formatUpdateDate(hrUpdates[0].date)} · {hrUpdates[0].category}
            </p>
            <h3 className="mt-3 text-2xl text-navy">{hrUpdates[0].title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">{hrUpdates[0].summary}</p>
          </article>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-3xl font-medium text-navy">What changes when WeHR Legal holds the people work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {outcomes.map((item, i) => (
              <article key={item.title} className="flex gap-4">
                <span className="font-display text-2xl text-brass">0{i + 1}</span>
                <div>
                  <h3 className="text-xl text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">Government and PSU</p>
            <h2 className="mt-3 max-w-xl text-3xl font-medium">Jamshedpur GeM manpower supplier for public organisations.</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist">
              Contractual manpower, documentation and a nodal officer for departments that buy through GeM and public tenders.
            </p>
          </div>
          <Link to="/government" className="inline-flex items-center gap-2 rounded-sm bg-paper px-5 py-3 text-sm font-semibold text-navy">
            Government practice <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Shell>
  );
}
