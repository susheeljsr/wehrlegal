import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, Shell } from "@/components/site/shell";
import {
  centralRulesDate,
  codesInForce,
  hrFeelFirst,
  labourCodes,
  registerReviewed,
  stateRules,
  type RuleStatus,
} from "@/lib/labour";
import { company, keywords } from "@/lib/site";

export const Route = createFileRoute("/labour-codes")({
  head: () => ({
    meta: [
      { title: "New labour codes, central rules and Jharkhand rules | WeHR Legal" },
      {
        name: "description",
        content:
          "New labour code Acts and rules: Code on Wages, Industrial Relations, Social Security and OSH. Central rules and the Jharkhand state-rule register, updated by WeHR Legal.",
      },
      { name: "keywords", content: keywords },
    ],
  }),
  component: LabourCodesPage,
});

function Status({ value }: { value: RuleStatus }) {
  const tone =
    value === "In force" || value === "Central sphere"
      ? "bg-navy text-paper"
      : value === "Draft"
        ? "bg-brass-soft text-navy"
        : "border border-line text-slate";
  return <span className={`inline-flex rounded-sm px-2 py-1 text-xs font-semibold ${tone}`}>{value}</span>;
}

function LabourCodesPage() {
  return (
    <Shell>
      <PageHero
        kicker="New labour codes · central and state rules"
        title="Four Codes are in force. State rules are not all finished."
        lede={`The Codes have applied across India since ${codesInForce}. Central rules were notified on ${centralRulesDate}. Jharkhand’s own rules are still the row to watch. Register reviewed ${registerReviewed}.`}
      />
      <Section
        title="The four labour codes"
        intro="These replaced 29 central Acts. The Code is the law. The rules — central or state — are how that law is operated."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {labourCodes.map((code) => (
            <article key={code.name} className="rounded-md border border-line p-6">
              <p className="text-xs font-semibold tracking-widest text-brass uppercase">{code.year}</p>
              <h3 className="mt-2 text-2xl text-navy">{code.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{code.covers}</p>
              <p className="mt-3 text-sm text-slate">
                <span className="font-semibold text-navy">Replaces. </span>
                {code.replaces}
              </p>
              <p className="mt-3 text-sm text-slate">
                <span className="font-semibold text-navy">Central rule. </span>
                {code.centralRule}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        tone="mist"
        title="Central rules and state rules"
        intro="Central rules bind the central sphere. A private establishment in Jharkhand follows Jharkhand’s rules once they are final, and the Code itself from the day it commenced."
      >
        <div className="overflow-x-auto rounded-md border border-line bg-paper">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-navy text-paper">
              <tr>
                <th className="px-4 py-3 font-semibold">State / sphere</th>
                <th className="px-4 py-3 font-semibold">Wages</th>
                <th className="px-4 py-3 font-semibold">IR</th>
                <th className="px-4 py-3 font-semibold">Social security</th>
                <th className="px-4 py-3 font-semibold">OSH</th>
              </tr>
            </thead>
            <tbody>
              {stateRules.map((row) => (
                <tr key={row.state} className="border-t border-line align-top">
                  <th className="px-4 py-4 font-semibold text-navy">{row.state}</th>
                  <td className="px-4 py-4"><Status value={row.wages} /></td>
                  <td className="px-4 py-4"><Status value={row.ir} /></td>
                  <td className="px-4 py-4"><Status value={row.social} /></td>
                  <td className="px-4 py-4"><Status value={row.osh} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-6 space-y-3">
          {stateRules.map((row) => (
            <li key={row.state} className="text-sm leading-relaxed text-slate">
              <span className="font-semibold text-navy">{row.state}. </span>
              {row.note}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm text-slate">
          Other states are on different timetables. If a plant sits outside Jharkhand or Bihar, ask and that state’s row will be added here. Status moves. Confirm the gazette before you change a wage structure.
        </p>
      </Section>
      <Section title="What HR should check first">
        <div className="grid gap-4 md:grid-cols-2">
          {hrFeelFirst.map((item) => (
            <article key={item.title} className="rounded-md border border-line p-5">
              <h3 className="text-xl text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/updates" className="inline-flex rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-paper">
            Latest HR updates
          </Link>
          <a href={company.whatsapp} className="inline-flex rounded-sm border border-line px-5 py-3 text-sm font-semibold text-navy">
            Ask for a code check
          </a>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-slate">
          General information published by {company.legal}. Not legal advice. The register is updated when a central or state notification changes what an HR team must do.
        </p>
      </Section>
    </Shell>
  );
}
