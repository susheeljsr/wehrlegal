import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, Shell } from "@/components/site/shell";
import { company, keywords, seniorConsultant } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WeHR Legal | DPIIT startup, Jamshedpur" },
      {
        name: "description",
        content:
          "WE HR LEGAL PRIVATE LIMITED is a DPIIT recognised, MSME registered startup in Jamshedpur for Shadow HR, HR consultancy and GeM manpower supply.",
      },
      { name: "keywords", content: keywords },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Shell>
      <PageHero
        kicker={`About · ${company.legal}`}
        title="A Jamshedpur company built to lend senior HR judgement to organisations that should not build it all in-house."
        lede="WeHR Legal — विचार — started as a private limited company to put practising and retired HR, IR and legal professionals on one bench, then sell that bench as Shadow HR and manpower."
      />
      <Section title="What we believe">
        <div className="grid gap-6 md:grid-cols-2">
          <p className="text-sm leading-relaxed text-slate">
            Most small and mid-size companies, and many government units, do not have a bad culture. They have missing seats. Payroll is done by accounts. Contracts are done by whoever answers the email. Grievances wait.
          </p>
          <p className="text-sm leading-relaxed text-slate">
            The repair is not another software login. It is a person who has closed that kind of file before, reachable through one business manager, paid for the work rather than for a permanent chair.
          </p>
        </div>
        <Link to="/vision" className="mt-6 inline-flex text-sm font-semibold text-navy">
          Vision, mission and values
        </Link>
      </Section>
      <Section tone="mist" title="Standing">
        <dl className="grid gap-4 sm:grid-cols-2">
          {[
            ["Entity", company.legal],
            ["Recognition", "DPIIT / Startup India recognised"],
            ["MSME", "Udyam registered"],
            ["Tax", "GST registered"],
            ["Procurement", "GeM manpower supplier"],
            ["Base", `${company.city}, Jharkhand`],
          ].map(([k, v]) => (
            <div key={k} className="rounded-md bg-paper p-4">
              <dt className="text-xs font-semibold tracking-widest text-brass uppercase">{k}</dt>
              <dd className="mt-1 text-navy">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <Section title="Senior consultant">
        <div className="max-w-3xl">
          <h3 className="text-2xl text-navy">{seniorConsultant.name}</h3>
          <p className="mt-1 text-sm text-slate">
            {seniorConsultant.firm} · {seniorConsultant.years} in HR and industrial relations
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">{seniorConsultant.summary}</p>
          <p className="mt-4 text-sm text-slate">
            <a className="font-semibold text-navy" href={seniorConsultant.phoneHref}>
              {seniorConsultant.phone}
            </a>
            {" · "}
            <a className="font-semibold text-navy" href={`mailto:${seniorConsultant.email}`}>
              {seniorConsultant.email}
            </a>
          </p>
        </div>
      </Section>
      <Section title="Where to find us">
        <ul className="space-y-2 text-sm text-slate">
          <li>
            Email <a className="font-semibold text-navy" href={`mailto:${company.email}`}>{company.email}</a>
          </li>
          <li>
            LinkedIn <a className="font-semibold text-navy" href={company.linkedin}>linkedin.com/company/wehrlegal</a>
          </li>
          <li>
            Facebook <a className="font-semibold text-navy" href={company.facebook}>facebook.com/WeHRLegal</a>
          </li>
        </ul>
      </Section>
    </Shell>
  );
}
