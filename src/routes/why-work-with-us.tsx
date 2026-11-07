import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, Shell } from "@/components/site/shell";
import { company, keywords } from "@/lib/site";

export const Route = createFileRoute("/why-work-with-us")({
  head: () => ({
    meta: [
      { title: "Why work with WeHR Legal | HR consultancy and Shadow HR" },
      {
        name: "description",
        content:
          "Why companies use WeHR Legal for HR outsourcing and Shadow HR: subject experts, a dedicated business manager, payroll compliance and retired HR professionals from large employers.",
      },
      { name: "keywords", content: keywords },
    ],
  }),
  component: Why,
});

const directions = [
  {
    title: "People",
    text: "Work goes to the HR, IR or legal person who has done that exact job — not to whoever is free.",
  },
  {
    title: "Purpose",
    text: "Company HR management exists to keep the business lawful and the managers unblocked.",
  },
  {
    title: "Progress",
    text: "Systems stay light enough for a growing firm and strict enough for a government buyer.",
  },
];

const challenges = [
  "You need payroll, POSH, contracts and hiring, but cannot justify four full-time specialists.",
  "A promoter is signing offer letters at midnight because there is no HR seat.",
  "A principal employer is exposed because a contractor’s registers are incomplete.",
  "A department wants manpower, but the file must survive GeM and audit.",
];

function Why() {
  return (
    <Shell>
      <PageHero
        kicker="Why work with us"
        title="People-first HR consultancy for companies that move faster than their org chart."
        lede="WeHR Legal is the Shadow HR bench behind the business. You keep one business manager. We allot every task to a subject expert — including retired professionals who built HR inside large companies."
      />
      <Section title="Direction" intro="Three tests we apply before we accept an assignment.">
        <div className="grid gap-4 md:grid-cols-3">
          {directions.map((item) => (
            <article key={item.title} className="rounded-md border border-line p-5">
              <h3 className="text-2xl text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        tone="mist"
        title="We understand a company that has outgrown informal HR"
        intro="Most of our clients are not looking for a motivational workshop. They need the work done."
      >
        <ul className="grid gap-3 md:grid-cols-2">
          {challenges.map((item) => (
            <li key={item} className="rounded-md bg-paper p-4 text-sm leading-relaxed text-ink">
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Why invest in people operations">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl text-navy">Build the foundation once</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Offer letters, appointment terms, leave rules, POSH policy and a payroll calendar stop being reinvented every quarter. HR management becomes a system the next manager can run.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-navy">Keep senior judgement on call</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              A disciplinary case, a contractor default or a GeM manpower schedule should not wait for a new hire. Shadow HR puts that judgement on a retainer.
            </p>
          </div>
        </div>
      </Section>
      <Section tone="navy" title="What you get">
        <ul className="grid gap-4 md:grid-cols-3">
          {[
            ["One owner", "A dedicated expert business manager who knows the file."],
            ["Right specialist", "Recruitment, payroll, IR or legal — only the matching expert."],
            ["A record", "Policies, registers and advice you can show an auditor or a board."],
          ].map(([title, text]) => (
            <li key={title} className="rounded-md border border-navy-soft p-5">
              <p className="font-display text-xl">{title}</p>
              <p className="mt-2 text-sm text-mist">{text}</p>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="mt-8 inline-flex rounded-sm bg-brass px-5 py-3 text-sm font-semibold text-navy">
          Design the engagement
        </Link>
        <p className="mt-4 text-sm text-mist">
          Or write to {company.email}. Based in {company.city}.
        </p>
      </Section>
    </Shell>
  );
}
