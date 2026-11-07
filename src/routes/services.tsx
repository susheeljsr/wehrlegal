import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Shell } from "@/components/site/shell";
import { company, consultancyServices, keywords, seniorConsultant, serviceGroups } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Temporary manpower, recruitment and fractional CHRO | WeHR Legal" },
      {
        name: "description",
        content:
          "Temporary manpower provider, hiring consultant, recruitment and manpower sourcing from Jamshedpur. Fractional HR, Fractional CHRO, Shadow HR, payroll and HR consultancy.",
      },
      { name: "keywords", content: keywords },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Shell>
      <PageHero
        kicker="Services · HR consultancy · manpower"
        title="Temporary manpower, hiring, and the HR seat you do not have to employ."
        lede="WeHR Legal is a temporary manpower provider, a hiring consultant and a recruitment desk — and the firm behind Fractional HR, a Fractional CHRO and company HR management. Each line has its own expert."
      />
      {serviceGroups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className={`border-b border-line ${index % 2 === 1 ? "bg-mist" : "bg-paper"}`}
        >
          <div className="mx-auto max-w-6xl px-5 py-14">
            <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">{group.kicker}</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-medium text-navy md:text-4xl">{group.title}</h2>
            <p className="mt-4 max-w-2xl text-slate">{group.intro}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {group.items.map((item) => (
                <article key={item.title} className="rounded-md border border-line bg-paper p-6">
                  <h3 className="text-2xl text-navy">{item.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate">
                    {item.points.map((point) => (
                      <li key={point} className="border-t border-line pt-2 first:border-t-0 first:pt-0">
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="hr-consultancy" className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">Senior consultancy</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-medium text-navy md:text-4xl">
            Professional HR management consultancy
          </h2>
          <p className="mt-4 max-w-2xl text-slate">
            Practical, confidential and result-oriented. Taken on a monthly retainer, as a project, or as one defined assignment — whichever the organisation actually needs.
          </p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {consultancyServices.map(([title, text]) => (
              <li key={title} className="rounded-md border border-line p-5">
                <h3 className="text-lg text-navy">{title}</h3>
                <p className="mt-1 text-sm text-slate">{text}</p>
              </li>
            ))}
          </ul>

          <article className="mt-10 grid gap-6 rounded-lg bg-navy p-6 text-paper md:grid-cols-12 md:p-8">
            <div className="md:col-span-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">On the bench</p>
              <h3 className="mt-2 text-2xl">{seniorConsultant.name}</h3>
              <p className="mt-1 text-sm text-mist">{seniorConsultant.firm}</p>
              <p className="mt-4 text-sm leading-relaxed text-mist">{seniorConsultant.summary}</p>
              <p className="mt-4 text-sm leading-relaxed text-mist">
                {seniorConsultant.years} in human resources and industrial relations, at plant and corporate level. He develops HR systems, manages employee relations and implements people-management work that a manual alone will not finish.
              </p>
            </div>
            <div className="md:col-span-4">
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-mist">Experience</dt>
                  <dd className="font-semibold">{seniorConsultant.years}</dd>
                </div>
                <div>
                  <dt className="text-mist">Mobile</dt>
                  <dd>
                    <a className="font-semibold hover:text-brass" href={seniorConsultant.phoneHref}>
                      {seniorConsultant.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-mist">Email</dt>
                  <dd>
                    <a className="font-semibold break-all hover:text-brass" href={`mailto:${seniorConsultant.email}`}>
                      {seniorConsultant.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-3xl text-navy">How the work is bought</h2>
          <div className="mt-6 grid gap-4 text-sm text-slate md:grid-cols-3">
            <p className="rounded-md bg-paper p-5">
              <span className="block text-lg text-navy">Monthly retainer</span>
              Fractional HR, Shadow HR or a fixed block of senior days.
            </p>
            <p className="rounded-md bg-paper p-5">
              <span className="block text-lg text-navy">Project</span>
              A wage settlement, a policy set, a hiring sprint or a compliance clean-up.
            </p>
            <p className="rounded-md bg-paper p-5">
              <span className="block text-lg text-navy">Deployment</span>
              Temporary manpower and GeM supply, with the statutory file attached.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={company.whatsapp} className="inline-flex rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-paper">
              Tell us the work
            </a>
            <Link to="/labour-codes" className="inline-flex rounded-sm border border-line bg-paper px-5 py-3 text-sm font-semibold text-navy">
              Labour codes register
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
