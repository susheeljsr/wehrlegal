import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero, Shell } from "@/components/site/shell";
import { company, keywords } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact WeHR Legal | Jamshedpur HR outsourcing" },
      {
        name: "description",
        content:
          "Contact WeHR Legal in Jamshedpur for Shadow HR, HR outsourcing, consultancy and GeM manpower. Email info@wehrlegal.com or WhatsApp.",
      },
      { name: "keywords", content: keywords },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [
      "WeHR Legal enquiry",
      `Name: ${data.get("name")}`,
      `Organisation: ${data.get("org")}`,
      `Need: ${data.get("need")}`,
      `Note: ${data.get("note")}`,
    ].join("\n");
    const url = `https://wa.me/917209456587?text=${encodeURIComponent(text)}`;
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <Shell>
      <PageHero
        kicker="Contact"
        title="Tell us the people problem. We will name the expert."
        lede="Write to info@wehrlegal.com, message WhatsApp, or send the note below. We reply from Jamshedpur."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-5">
        <form onSubmit={onSubmit} className="space-y-4 md:col-span-3">
          <label className="block text-sm font-medium text-navy">
            Name
            <input name="name" required className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-3" />
          </label>
          <label className="block text-sm font-medium text-navy">
            Organisation
            <input name="org" required className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-3" />
          </label>
          <label className="block text-sm font-medium text-navy">
            What do you need
            <select name="need" className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-3">
              <option>Shadow HR retainer</option>
              <option>HR outsourcing</option>
              <option>Recruitment</option>
              <option>Payroll and compliance</option>
              <option>GeM / government manpower</option>
              <option>Legal or POSH</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-navy">
            Note
            <textarea name="note" rows={5} className="mt-1 w-full rounded-sm border border-line bg-paper px-3 py-3" />
          </label>
          <button type="submit" className="rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-paper">
            Continue on WhatsApp
          </button>
          {sent ? <p className="text-sm text-slate">Opening WhatsApp with your note. If it did not, use the link on the right.</p> : null}
        </form>
        <aside className="md:col-span-2">
          <div className="rounded-lg border border-line p-5">
            <p className="text-xs font-semibold tracking-widest text-brass uppercase">Direct</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a className="font-semibold text-navy" href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <a className="font-semibold text-navy" href={company.whatsapp}>WhatsApp +91 72094 56587</a>
              </li>
              <li>
                <a className="font-semibold text-navy" href={company.linkedin}>LinkedIn</a>
              </li>
              <li>
                <a className="font-semibold text-navy" href={company.facebook}>Facebook</a>
              </li>
              <li className="text-slate">{company.city}, Jharkhand</li>
            </ul>
          </div>
        </aside>
      </section>
    </Shell>
  );
}
