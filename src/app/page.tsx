import BrandLockup from "@/components/BrandLockup";
import HubFooter from "@/components/HubFooter";
import LastUpdated from "@/components/LastUpdated";
import SeoHiddenContent from "@/components/SeoHiddenContent";
import { siteConfig, tools } from "@/config/site";

export default function HomePage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero */}
      <section className="mesh-bg relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggIGQ9Ik0zMCAwTDMwIDYwTTAgMzBINjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-40" />

        <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-16 text-center sm:pt-24">
          <div className="hero-float mb-8 flex justify-center">
            <BrandLockup size="hero" light />
          </div>

          <p className="text-sm font-medium tracking-widest text-cyan-300/80">
            한글로 돌고래
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base text-white/50">
            세금 · 4대보험 · 시급 · 연봉
            <br />
            무료 · 회원가입 없음
          </p>

          <div className="mt-10 flex justify-center">
            <LastUpdated />
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="relative bg-[#060b14] px-5 pb-24 pt-4">
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {tools.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className={`tool-card group relative overflow-hidden rounded-2xl bg-gradient-to-br ${tool.gradient} p-[1px] shadow-2xl ${tool.glow}`}
            >
              <div className="relative flex h-full min-h-[220px] flex-col justify-between rounded-[15px] bg-[#0a101c]/90 p-7 backdrop-blur-xl">
                <div>
                  <p className="text-xs font-medium tracking-wide text-white/40">
                    {tool.subtitle}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">
                    {tool.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {tool.description}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:gap-3">
                  열기
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-sm text-center text-xs leading-relaxed text-white/30">
          주소 {siteConfig.domain}
          <br />
          세금 tax · 급여 pay
        </p>
      </section>

      <SeoHiddenContent />
      <HubFooter />
    </div>
  );
}
