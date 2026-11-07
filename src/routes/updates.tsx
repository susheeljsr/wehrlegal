import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Shell } from "@/components/site/shell";
import { keywords } from "@/lib/site";
import { formatUpdateDate, hrUpdates, type UpdateCategory } from "@/lib/updates";

export const Route = createFileRoute("/updates")({
  head: () => ({
    meta: [
      { title: "HR updates and labour law changes | WeHR Legal" },
      {
        name: "description",
        content:
          "Latest HR updates from WeHR Legal: labour codes, central and state rules, payroll changes and manpower practice for companies in Jamshedpur and beyond.",
      },
      { name: "keywords", content: keywords },
    ],
  }),
  component: UpdatesPage,
});

const filters = ["All", "Labour codes", "Payroll", "Manpower", "Practice"] as const;

function UpdatesPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = hrUpdates.filter((item) => filter === "All" || item.category === filter);

  return (
    <Shell>
      <PageHero
        kicker="HR updates"
        title="What changed in HR, and what to do before the next payroll."
        lede="A running note of labour-code notifications, wage-ceiling changes and manpower practice. It is general information for HR teams, not a legal opinion on your establishment."
      />
      <section className="border-b border-line bg-navy text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">Labour codes</p>
            <h2 className="mt-2 text-2xl">Central Acts and the state-rule register</h2>
            <p className="mt-2 max-w-xl text-sm text-mist">
              The four Codes, the central rules of 8 May 2026, and the Jharkhand row we keep open for the final notification.
            </p>
          </div>
          <Link to="/labour-codes" className="inline-flex rounded-sm bg-paper px-5 py-3 text-sm font-semibold text-navy">
            Open the register
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-sm px-3 py-2 text-sm font-semibold ${
                filter === item ? "bg-navy text-paper" : "border border-line bg-paper text-navy"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-8 space-y-4">
          {visible.map((item) => (
            <article key={item.id} className="rounded-md border border-line bg-paper p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-wide text-brass uppercase">
                <time dateTime={item.date}>{formatUpdateDate(item.date)}</time>
                <span className="text-line">/</span>
                <span>{item.category as UpdateCategory}</span>
              </div>
              <h2 className="mt-3 text-2xl text-navy">{item.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate">{item.summary}</p>
              <ul className="mt-4 max-w-3xl space-y-2 text-sm text-slate">
                {item.points.map((point) => (
                  <li key={point} className="border-t border-line pt-2">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-slate">
          To add a notification — a Jharkhand gazette, a central circular, a payroll change — send the text and the date to{" "}
          <a className="font-semibold text-navy" href="mailto:info@wehrlegal.com">
            info@wehrlegal.com
          </a>
          . We publish it on this page.
        </p>
      </section>
    </Shell>
  );
}
