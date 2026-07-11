import BrandLockup from "@/components/BrandLockup";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function HubFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <BrandLockup size="sm" />
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              {siteConfig.domain} — 한국 세금·급여 계산 도구 모음
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">계산기</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li>
                <a href="https://tax.ehfrhfo.com" className="hover:text-gray-900">
                  tax — 세금·4대보험
                </a>
              </li>
              <li>
                <a href="https://pay.ehfrhfo.com" className="hover:text-gray-900">
                  pay — 시급·연봉
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">정보</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/privacy" className="hover:text-gray-900">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <a
                  href="https://tax.ehfrhfo.com/blog"
                  className="hover:text-gray-900"
                >
                  세금·보험 가이드
                </a>
              </li>
              <li>
                <a
                  href="https://pay.ehfrhfo.com/blog"
                  className="hover:text-gray-900"
                >
                  시급·연봉 가이드
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © 2026 {siteConfig.domain} · {siteConfig.brand}
        </p>
      </div>
    </footer>
  );
}
