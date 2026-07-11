import BrandLockup from "@/components/BrandLockup";
import { guides, siteConfig, tools } from "@/config/site";
import Link from "next/link";

const accentStyles = {
  blue: {
    card: "border-blue-100 hover:border-blue-200 hover:shadow-blue-100/50",
    badge: "bg-blue-50 text-blue-700",
    cta: "bg-blue-600 hover:bg-blue-700",
    dot: "bg-blue-600",
  },
  cyan: {
    card: "border-cyan-100 hover:border-cyan-200 hover:shadow-cyan-100/50",
    badge: "bg-cyan-50 text-cyan-700",
    cta: "bg-cyan-600 hover:bg-cyan-700",
    dot: "bg-cyan-600",
  },
} as const;

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200/80 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
          <BrandLockup size="md" />
          <nav className="hidden gap-6 text-sm font-medium text-gray-600 sm:flex">
            {tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="transition hover:text-gray-900"
              >
                {tool.name.split(" ")[0]}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:py-24">
          <BrandLockup className="mb-6 justify-center" size="lg" />
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            한국 세금·급여 계산 도구
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            {siteConfig.tagline}
            <br className="hidden sm:block" />
            2026년 최신 요율 · 무료 · 설치 불필요
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {tools.map((tool) => {
              const style = accentStyles[tool.accent];
              return (
                <a
                  key={tool.href}
                  href={tool.href}
                  className={`group flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${style.card}`}
                >
                  <div className="mb-4 flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      {new URL(tool.href).hostname}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-gray-950">
                    {tool.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                    {tool.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {tool.tags.map((tag) => (
                      <li
                        key={tag}
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${style.badge}`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`mt-6 inline-flex w-fit items-center rounded-lg px-4 py-2 text-sm font-medium text-white transition ${style.cta}`}
                  >
                    계산기 열기 →
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="border-t border-gray-200/80 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-wide text-gray-400">
              가이드 &amp; 블로그
            </h2>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              {guides.map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="inline-flex rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-100"
                >
                  {guide.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200/80 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-gray-500 sm:flex-row">
          <BrandLockup size="sm" />
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-700">
              개인정보처리방침
            </Link>
            <span>© 2026 ehfrhfo.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
