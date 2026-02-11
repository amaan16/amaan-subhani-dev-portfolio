// src/app/page.tsx
import Navbar from "@/components/Navbar";
import portfolio from "@/data/portfolio";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="section-block mt-4 scroll-mt-24 px-4 py-10 sm:px-8"
    >
      {title ? (
        <h2 className="text-3xl font-semibold tracking-[0.22em] text-emerald-200 uppercase">
          {title}
        </h2>
      ) : null}
      <div className={title ? "mt-5" : ""}>{children}</div>
    </section>
  );
}

export default function Home() {
  const p = portfolio;

  return (
    <>
      <Navbar />
      <main
        id="home"
        className="mx-auto max-w-6xl px-4 pt-28 pb-12 text-[17px] leading-relaxed sm:px-6"
      >
        {/* HERO */}
        <header className="py-10 flex flex-col justify-center -translate-y-6">
          <h1 className="mt-4 text-6xl font-bold tracking-[0.08em] text-emerald-200">
            {p.name}
          </h1>
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-400">
            {p.headline}
          </p>
          <p className="mt-4 max-w-2xl text-emerald-100/80">{p.hero.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={p.hero.ctas.primary.href}
              className="rounded-xl border border-emerald-400/60 bg-emerald-500/10 px-4 py-2 text-emerald-200 hover:bg-emerald-500/20"
            >
              {p.hero.ctas.primary.label}
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-emerald-500/30 px-4 py-2 text-emerald-100/80 hover:bg-emerald-500/10"
            >
              Resume
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-emerald-100/80">
            <a
              href={`mailto:${p.socials.email}`}
              className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-black/20 px-3 py-2 hover:bg-emerald-500/10"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-emerald-300"
                fill="currentColor"
              >
                <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2 8 5 8-5H4zm16 10V9l-8 5-8-5v8h16z" />
              </svg>
              Email
            </a>
            <a
              href={p.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-black/20 px-3 py-2 hover:bg-emerald-500/10"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-emerald-300"
                fill="currentColor"
              >
                <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5zM3 9h4v12H3V9zm7 0h4v1.7c.6-1 1.9-2 3.8-2 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.4c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21h-4V9z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={p.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-black/20 px-3 py-2 hover:bg-emerald-500/10"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-emerald-300"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.32 2.75-1.05 2.75-1.05.54 1.41.2 2.45.1 2.71.63.72 1.02 1.63 1.02 2.75 0 3.95-2.35 4.82-4.58 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/amaan1603/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-black/20 px-3 py-2 hover:bg-emerald-500/10"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-emerald-300"
                fill="currentColor"
              >
                <path d="M13.04 3.06a1 1 0 0 1 1.42-.02l1.5 1.44a1 1 0 0 1 .02 1.41l-7.9 8.2a2.5 2.5 0 0 0 3.53 3.53l8.2-7.9a1 1 0 0 1 1.41.02l1.44 1.5a1 1 0 0 1-.02 1.42l-8.1 7.8a4.5 4.5 0 0 1-6.36-6.36l8.1-8.06zM7.8 11.2a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h4.8z" />
              </svg>
              LeetCode
            </a>
            <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-black/20 px-3 py-2">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-emerald-300"
                fill="currentColor"
              >
                <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
              {p.location ?? "Chicago, IL"}
            </div>
          </div>
        </header>

        {/* ABOUT */}
        <Section id="about" title={p.about.title}>
          <p className="max-w-3xl text-emerald-100/80">{p.about.summary}</p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {p.about.highlights.map((h) => (
              <li
                key={h}
                className="rounded-xl border border-emerald-500/30 bg-black/20 p-3 text-emerald-100/80"
              >
                {h}
              </li>
            ))}
          </ul>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <div className="grid gap-4 sm:grid-cols-2">
            {p.skills.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl border border-emerald-500/30 bg-black/20 p-5"
              >
                <h3 className="font-semibold text-emerald-200">
                  {group.label}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience">
          <div className="grid gap-4">
            {p.experience.map((e) => (
              <div
                key={`${e.company}-${e.role}`}
                className="rounded-2xl border border-emerald-500/30 bg-black/20 p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-emerald-200">
                    {e.role}
                  </h3>
                  <p className="text-sm text-emerald-300/70">
                    {e.start} — {e.end}
                  </p>
                </div>
                <p className="mt-1 text-emerald-100/80">{e.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-emerald-100/80">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {p.projects.map((proj) => (
              <div
                key={proj.title}
                className="rounded-2xl border border-emerald-500/30 bg-black/20 p-5"
              >
                <h3 className="text-lg font-semibold text-emerald-200">
                  {proj.title}
                </h3>
                {proj.subtitle ? (
                  <p className="mt-1 text-sm text-emerald-300/70">
                    {proj.subtitle}
                  </p>
                ) : null}
                <p className="mt-3 text-emerald-100/80">{proj.description}</p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-emerald-100/80">
                  {proj.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  {proj.links.github ? (
                    <a
                      className="text-sm text-emerald-300 underline hover:text-emerald-200"
                      href={proj.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  ) : null}
                  {proj.links.live ? (
                    <a
                      className="text-sm text-emerald-300 underline hover:text-emerald-200"
                      href={proj.links.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="Education">
          <div className="grid gap-4">
            {p.education.map((ed) => (
              <div
                key={`${ed.school}-${ed.degree}`}
                className="rounded-2xl border border-emerald-500/30 bg-black/20 p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-emerald-200">
                    {ed.degree}
                  </h3>
                  <p className="text-sm text-emerald-300/70">
                    {ed.start} — {ed.end}
                  </p>
                </div>
                <p className="mt-1 text-emerald-100/80">{ed.school}</p>
                {ed.gpa ? (
                  <p className="mt-2 text-sm text-emerald-300/70">
                    GPA: {ed.gpa}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        <footer
          id="contact"
          className="mt-10 rounded-3xl border border-emerald-500/20 bg-black/10 px-6 py-10 text-emerald-100/80"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">
            Contact
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              className="underline text-emerald-300 hover:text-emerald-200"
              href={`mailto:${p.socials.email}`}
            >
              {p.socials.email}
            </a>
            <a
              className="underline text-emerald-300 hover:text-emerald-200"
              href="tel:+17087701559"
            >
              +1 708 770 1559
            </a>
            <a
              className="underline text-emerald-300 hover:text-emerald-200"
              href={p.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="underline text-emerald-300 hover:text-emerald-200"
              href={p.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span className="text-emerald-100/80">
              {p.location ?? "Chicago, IL"}
            </span>
          </div>
          <div className="mt-6 text-xs uppercase tracking-[0.25em] text-emerald-300/70">
            © {new Date().getFullYear()} {p.name}
          </div>
        </footer>
      </main>
    </>
  );
}
