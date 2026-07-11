import {
  domainStory,
  faq,
  features,
  guides,
  siteConfig,
  stats,
  tools,
  useCases,
} from "@/config/site";
import BrandLockup from "@/components/BrandLockup";
import HubFooter from "@/components/HubFooter";

const accentStyles = {
  blue: {
    card: "border-blue-100 hover:border-blue-200 hover:shadow-blue-100/50",
    badge: "bg-blue-50 text-blue-700",
    cta: "bg-blue-600 hover:bg-blue-700",
    dot: "bg-blue-600",
    link: "text-blue-600 hover:text-blue-800",
  },
  cyan: {
    card: "border-cyan-100 hover:border-cyan-200 hover:shadow-cyan-100/50",
    badge: "bg-cyan-50 text-cyan-700",
    cta: "bg-cyan-600 hover:bg-cyan-700",
    dot: "bg-cyan-600",
    link: "text-cyan-600 hover:text-cyan-800",
  },
} as const;

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-gray-200/80 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <BrandLockup size="md" />
          <nav className="hidden gap-5 text-sm font-medium text-gray-600 sm:flex">
            <a href="#tools" className="transition hover:text-gray-900">
              계산기
            </a>
            <a href="#about" className="transition hover:text-gray-900">
              ehfrhfo.com
            </a>
            <a href="#faq" className="transition hover:text-gray-900">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-blue-100 bg-gradient-to-b from-blue-50/80 to-gray-50">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:py-20">
            <p className="mb-4 text-sm font-medium tracking-wide text-blue-600">
              {siteConfig.domain}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              한국 세금·급여 계산 도구
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              {siteConfig.tagline}
              <br />
              2026년 최신 요율 · 무료 · 설치 불필요
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://tax.ehfrhfo.com"
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                세금 계산기 →
              </a>
              <a
                href="https://pay.ehfrhfo.com"
                className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                시급·연봉 계산기 →
              </a>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px border-t border-blue-100 bg-blue-100 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white px-4 py-5 text-center">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section id="tools" className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            계산기 선택
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            목적에 맞는 도구를 고르세요
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {tools.map((tool) => {
              const style = accentStyles[tool.accent];
              return (
                <article
                  key={tool.href}
                  className={`flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${style.card}`}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                    <span className="text-xs font-medium text-gray-400">
                      {new URL(tool.href).hostname}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
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
                  <ul className="mt-5 grid grid-cols-2 gap-2 border-t border-gray-100 pt-5">
                    {tool.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className={`text-sm font-medium ${style.link}`}
                        >
                          {link.label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={tool.href}
                    className={`mt-6 inline-flex w-fit rounded-lg px-4 py-2 text-sm font-medium text-white transition ${style.cta}`}
                  >
                    메인 계산기 열기
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* Use cases */}
        <section className="border-y border-gray-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-center text-2xl font-bold text-gray-900">
              이런 분께
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {useCases.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="rounded-xl border border-gray-200 p-5 transition hover:border-blue-200 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.body}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            왜 돌고래인가
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Domain story */}
        <section id="about" className="border-t border-gray-200 bg-gray-900 text-white">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <p className="text-sm font-medium text-blue-400">About</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              {domainStory.headline}
            </h2>
            <div className="mt-8 rounded-2xl border border-gray-700 bg-gray-800/50 p-6 font-mono text-sm leading-loose">
              <p className="text-blue-300">ehfrhfo.com</p>
              <p className="text-gray-400">├── tax.ehfrhfo.com &nbsp; 세금·4대보험</p>
              <p className="text-gray-400">├── pay.ehfrhfo.com &nbsp; 시급·연봉</p>
              <p className="text-gray-400">└── ehfrhfo.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 허브 (지금 여기)</p>
            </div>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-gray-300">
              {domainStory.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-gray-700 bg-gray-800 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                기억법 · E-H-F-R-H-F-O
              </p>
              <p className="mt-2 text-sm text-gray-300">{domainStory.mnemonic}</p>
              <p className="mt-1 text-xs text-gray-500">{domainStory.mnemonicKo}</p>
            </div>
          </div>
        </section>

        {/* Guides */}
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-center text-2xl font-bold text-gray-900">
              가이드 &amp; 블로그
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {guides.map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  className="rounded-xl border border-gray-200 p-6 transition hover:border-blue-200 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900">{guide.label}</h3>
                  <p className="mt-2 text-sm text-gray-500">{guide.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-center text-2xl font-bold text-gray-900">FAQ</h2>
          <dl className="mt-10 space-y-6">
            {faq.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <dt className="font-semibold text-gray-900">{item.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-500">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <HubFooter />
    </div>
  );
}
