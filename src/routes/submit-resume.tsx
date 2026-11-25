import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero, Shell } from "@/components/site/shell";
import { company, keywords } from "@/lib/site";

export const Route = createFileRoute("/submit-resume")({
  head: () => ({
    meta: [
      { title: "Submit your resume | Part-time Shadow HR | WeHR Legal" },
      {
        name: "description",
        content:
          "Part-time Shadow HR professionals can submit a resume to WeHR Legal. Practising and retired HR, IR and legal experts. Jamshedpur.",
      },
      { name: "keywords", content: keywords },
    ],
  }),
  component: SubmitResume,
});

const subjects = [
  "Shadow HR",
  "Fractional HR",
  "Fractional CHRO",
  "Recruitment and hiring",
  "Payroll and compliance",
  "Industrial relations",
  "POSH and labour law",
  "Manpower sourcing",
];

function SubmitResume() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const picked = subjects.filter((item) => data.get(item) === "on");
    const text = [
      "Part-time Shadow HR — resume",
      `Name: ${data.get("name")}`,
      `Mobile: ${data.get("mobile")}`,
      `Email: ${data.get("email")}`,
      `City: ${data.get("city")}`,
      `Years in HR: ${data.get("years")}`,
      `Current or last role: ${data.get("role")}`,
      `Subjects: ${picked.join(", ") || "—"}`,
      `Time I can give: ${data.get("time")}`,
      `Note: ${data.get("note") || "—"}`,
      "I will attach my resume in this chat.",
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/917209456587?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <Shell>
      <PageHero
        kicker="Part-time Shadow HR"
        title="Submit your resume."
        lede="If you can take part-time Shadow HR — a few days a month, or a defined assignment — send your details. Attach the resume file in the WhatsApp chat that opens. We allot work only in your subject."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-5">
        <form onSubmit={onSubmit} className="space-y-4 md:col-span-3">
          <label className="block text-sm font-medium text-navy">
            Name
            <input name="name" required autoComplete="name" className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-3" />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-navy">
              Mobile
              <input name="mobile" required type="tel" autoComplete="tel" className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-3" />
            </label>
            <label className="block text-sm font-medium text-navy">
              Email
              <input name="email" required type="email" autoComplete="email" className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-3" />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-navy">
              City
              <input name="city" required className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-3" />
            </label>
            <label className="block text-sm font-medium text-navy">
              Years in HR
              <input name="years" required inputMode="numeric" className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-3" />
            </label>
          </div>
          <label className="block text-sm font-medium text-navy">
            Current or last role
            <input name="role" required className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-3" />
          </label>
          <fieldset>
            <legend className="text-sm font-medium text-navy">Subjects you can take</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {subjects.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm text-slate">
                  <input type="checkbox" name={item} className="h-4 w-4 accent-navy" />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="block text-sm font-medium text-navy">
            Time you can give
            <select name="time" className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-3">
              <option>Part-time, a few days a month</option>
              <option>Project or one assignment</option>
              <option>Retainer, fixed days</option>
              <option>Evenings or weekends only</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-navy">
            Note
            <textarea name="note" rows={4} className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-3" />
          </label>
          <button type="submit" className="rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-paper">
            Submit on WhatsApp
          </button>
          {sent ? (
            <p className="text-sm text-slate">
              WhatsApp is open with your details. Attach your resume (PDF) in that chat before you send.
            </p>
          ) : (
            <p className="text-sm text-slate">The resume file is attached in WhatsApp. This page does not store it.</p>
          )}
        </form>
        <aside className="md:col-span-2">
          <div className="rounded-lg border border-line p-5">
            <p className="text-xs font-semibold tracking-widest text-brass uppercase">Who this is for</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate">
              <li>HR managers who can spare part of the month.</li>
              <li>Retired specialists from large companies.</li>
              <li>IR, payroll, recruitment and POSH practitioners.</li>
            </ul>
            <p className="mt-6 text-sm text-slate">
              Or email the resume to{" "}
              <a className="font-semibold text-navy" href={`mailto:${company.email}?subject=Part-time%20Shadow%20HR%20resume`}>
                {company.email}
              </a>
              .
            </p>
          </div>
        </aside>
      </section>
    </Shell>
  );
}
