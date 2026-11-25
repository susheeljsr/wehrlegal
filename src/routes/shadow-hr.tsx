import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, Shell } from "@/components/site/shell";
import { company, keywords } from "@/lib/site";

export const Route = createFileRoute("/shadow-hr")({
  head: () => ({
    meta: [
      { title: "Shadow HR | WeHR Legal Jamshedpur" },
      {
        name: "description",
        content:
          "Shadow HR from WeHR Legal: retired and practising HR professionals from large companies act as your people function. HR outsourcing without hiring every specialist.",
      },
      { name: "keywords", content: keywords },
    ],
  }),
  component: Shadow,
});

const steps = [
  ["Brief", "You tell the business manager what is stuck — hiring, a notice, payroll, a contractor."],
  ["Allotment", "The task goes only to the subject expert. A recruiter does not draft a charge-sheet."],
  ["Delivery", "You receive the letter, the shortlist, the register or the advice — in your name, on your timeline."],
  ["Memory", "The file stays with us, so the next question does not start from zero."],
];

function Shadow() {
  return (
    <Shell>
      <PageHero
        kicker="Shadow HR"
        title="Your HR department, staffed by people who already retired from doing it full-time — and by those still practising."
        lede="Shadow HR is fractional people leadership. Beside it sit Fractional HR — the operating seat — and a Fractional CHRO for the decisions that belong with the promoter."
      />
      <Section title="Who sits on the bench">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Large-company alumni", "HR professionals who ran plants, corporate centres and shared services, now consulting."],
            ["Working specialists", "Recruiters, payroll leads and IR officers who take defined scopes alongside their practice."],
            ["Legal partners", "Counsel for contracts, POSH and labour interpretation when the question is no longer operational."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-md border border-line p-5">
              <h3 className="text-xl text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="mist" title="How an assignment moves">
        <ol className="grid gap-4 md:grid-cols-4">
          {steps.map(([title, text], i) => (
            <li key={title} className="rounded-md bg-paper p-5">
              <p className="font-display text-2xl text-brass">0{i + 1}</p>
              <h3 className="mt-2 text-lg text-navy">{title}</h3>
              <p className="mt-2 text-sm text-slate">{text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="navy" title="Fractional HR and a Fractional CHRO">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-md border border-navy-soft bg-navy-soft p-5">
            <h3 className="text-xl">Fractional HR</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              Policies, letters, performance, employee cases. The right buy when there is no HR manager, or when the one you have needs a senior beside them for part of the month.
            </p>
          </article>
          <article className="rounded-md border border-navy-soft bg-navy-soft p-5">
            <h3 className="text-xl">Fractional CHRO</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              Organisation design, wage strategy, IR posture and leadership hiring. A fixed number of days with the promoter — the chief people seat, without a full-time cost.
            </p>
          </article>
        </div>
        <Link to="/services" hash="fractional" className="mt-6 inline-flex text-sm font-semibold text-brass">
          See how the seats are scoped
        </Link>
      </Section>
      <Section title="When Shadow HR is the right buy">
        <ul className="max-w-3xl space-y-3 text-sm leading-relaxed text-slate">
          <li>Headcount is growing, but a CHRO seat is a year away.</li>
          <li>You already have one HR executive who needs senior cover, not replacement.</li>
          <li>A government or PSU buyer expects the principal employer to show control over people processes.</li>
          <li>You want HR outsourcing that still has a name and a phone number.</li>
        </ul>
        <a href={company.whatsapp} className="mt-8 inline-flex rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-paper">
          Ask for a Shadow HR scope
        </a>
      </Section>
      <Section tone="mist" title="Part-time Shadow HR — submit your resume">
        <p className="max-w-2xl text-sm leading-relaxed text-slate">
          Practising and retired HR, IR and legal professionals can join the bench for part-time Shadow HR. Send your resume. Assignments are allotted only in your subject.
        </p>
        <Link to="/submit-resume" className="mt-6 inline-flex rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-paper">
          Submit your resume
        </Link>
      </Section>
    </Shell>
  );
}
