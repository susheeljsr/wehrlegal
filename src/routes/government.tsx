import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Shell } from "@/components/site/shell";
import { company, keywords } from "@/lib/site";

export const Route = createFileRoute("/government")({
  head: () => ({
    meta: [
      { title: "Jamshedpur GeM manpower supplier | WeHR Legal" },
      {
        name: "description",
        content:
          "WeHR Legal is a Jamshedpur GeM manpower supplier and DPIIT recognised startup for government companies and PSUs. MSME registered contractual manpower with statutory compliance.",
      },
      { name: "keywords", content: keywords },
    ],
  }),
  component: Government,
});

const categories = [
  ["Office and secretariat", "Data entry, assistants and multi-tasking staff for departments that need disciplined attendance."],
  ["Technical support", "Site and office technicians deployed against a defined skill and a replacement commitment."],
  ["HR and compliance staff", "People who can run registers, wage inputs and contractor files inside a PSU or government company."],
  ["GeM and tender files", "BOQ-ready manpower schedules, wage build-up and a nodal officer for the contract period."],
];

function Government() {
  return (
    <Shell>
      <PageHero
        kicker="Government · PSU · GeM"
        title="Manpower for government companies, bought the way public procurement expects."
        lede="WeHR Legal supplies screened contractual manpower and the paperwork around it. We are a DPIIT recognised startup and an MSME, working as a Jamshedpur GeM manpower supplier."
      />
      <section className="border-b border-line bg-mist">
        <ul className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["DPIIT", "Recognised startup"],
            ["MSME", "Udyam registered"],
            ["GST", "Registered entity"],
            ["GeM", "Manpower supplier"],
          ].map(([k, v]) => (
            <li key={k} className="bg-paper px-5 py-6">
              <p className="text-xs font-semibold tracking-widest text-brass uppercase">{k}</p>
              <p className="mt-1 font-medium text-navy">{v}</p>
            </li>
          ))}
        </ul>
      </section>
      <Section title="What public buyers actually need" intro="Not a brochure of job titles. A deployment that survives minimum wage, EPF and the tender condition.">
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map(([title, text]) => (
            <article key={title} className="rounded-md border border-line p-5">
              <h3 className="text-xl text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="navy" title="How we hold a government manpower contract">
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ["Screen", "Identity, skill and role fit before a person is offered to the buyer."],
            ["Cover", "Wage structure built so statutory deductions are visible, not hidden in a lump sum."],
            ["Supervise", "A nodal contact for attendance, replacement and the monthly file."],
          ].map(([title, text], i) => (
            <li key={title}>
              <p className="font-display text-3xl text-brass">0{i + 1}</p>
              <h3 className="mt-2 text-xl">{title}</h3>
              <p className="mt-2 text-sm text-mist">{text}</p>
            </li>
          ))}
        </ol>
        <a href={`mailto:${company.email}`} className="mt-8 inline-flex rounded-sm bg-paper px-5 py-3 text-sm font-semibold text-navy">
          Invite us to a requirement
        </a>
      </Section>
    </Shell>
  );
}
