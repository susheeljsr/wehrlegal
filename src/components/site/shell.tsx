import type { ReactNode } from "react";
import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { company, headerNav, nav } from "@/lib/site";

export function Shell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
            <span className="font-display text-xl font-semibold tracking-tight text-navy">WeHR Legal</span>
            <span className="text-xs text-brass">{company.mark}</span>
          </Link>
          <nav className="hidden items-center gap-4 xl:flex">
            {headerNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[13px] font-medium ${path === item.to ? "text-navy" : "text-slate hover:text-navy"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={company.whatsapp}
              className="hidden rounded-sm bg-navy px-4 py-2.5 text-sm font-semibold text-paper sm:inline-flex"
            >
              WhatsApp
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line text-navy xl:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="border-t border-line px-5 py-3 xl:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-navy"
              >
                {item.label}
              </Link>
            ))}
            <a href={company.whatsapp} className="mt-2 inline-flex rounded-sm bg-navy px-4 py-3 text-sm font-semibold text-paper">
              WhatsApp
            </a>
          </nav>
        ) : null}
      </header>
      {children}
      <footer className="border-t border-line bg-navy text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">WeHR Legal</p>
            <p className="mt-2 text-sm text-mist">{company.legal}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
              Shadow HR, fractional CHRO, temporary manpower and GeM supply from Jamshedpur. DPIIT recognised startup. MSME registered.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-brass uppercase">Visit</p>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-mist hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-brass uppercase">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-mist">
              <li>
                <a className="hover:text-paper" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              <li>
                <a className="hover:text-paper" href={company.whatsapp}>
                  WhatsApp
                </a>
              </li>
              <li>
                <a className="hover:text-paper" href={company.linkedin}>
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="hover:text-paper" href={company.facebook}>
                  Facebook
                </a>
              </li>
              <li>{company.city}, Jharkhand</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-soft px-5 py-4 text-center text-xs text-mist">
          © {new Date().getFullYear()} {company.legal}. Jamshedpur manpower supplier.
        </div>
      </footer>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-line bg-navy text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-brass uppercase">{kicker}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-medium md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist md:text-lg">{lede}</p>
      </div>
    </section>
  );
}

export function Section({
  title,
  intro,
  children,
  tone = "paper",
}: {
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "paper" | "mist" | "navy";
}) {
  const bg = tone === "navy" ? "bg-navy text-paper" : tone === "mist" ? "bg-mist text-ink" : "bg-paper text-ink";
  return (
    <section className={`border-b border-line ${bg}`}>
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2 className={`max-w-3xl text-3xl font-medium md:text-4xl ${tone === "navy" ? "text-paper" : "text-navy"}`}>
          {title}
        </h2>
        {intro ? (
          <p className={`mt-4 max-w-2xl leading-relaxed ${tone === "navy" ? "text-mist" : "text-slate"}`}>{intro}</p>
        ) : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
