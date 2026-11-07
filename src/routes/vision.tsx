import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Shell } from "@/components/site/shell";
import { company, keywords, vision } from "@/lib/site";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision, mission and values | WeHR Legal" },
      {
        name: "description",
        content:
          "Vision, mission and values of WE HR LEGAL PRIVATE LIMITED. Shadow HR, fractional CHRO and manpower from Jamshedpur, allotted only to a subject expert.",
      },
      { name: "keywords", content: keywords },
    ],
  }),
  component: VisionPage,
});

function VisionPage() {
  return (
    <Shell>
      <PageHero
        kicker="Vision, mission and values"
        title="विचार — senior HR judgement, available without a permanent chair for every skill."
        lede={`${company.legal} exists so a company can borrow the country’s HR, IR and legal talent, including people who have already built the function inside a large employer.`}
      />
      <Section title="Vision">
        <p className="max-w-3xl text-lg leading-relaxed text-slate">{vision.vision}</p>
      </Section>
      <Section tone="mist" title="Mission">
        <p className="max-w-3xl text-lg leading-relaxed text-slate">{vision.mission}</p>
      </Section>
      <Section title="Values">
        <ol className="grid gap-4 md:grid-cols-2">
          {vision.values.map((item, i) => (
            <li key={item.title} className="rounded-md border border-line p-5">
              <p className="font-display text-2xl text-brass">0{i + 1}</p>
              <h3 className="mt-2 text-xl text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.text}</p>
            </li>
          ))}
        </ol>
      </Section>
    </Shell>
  );
}
