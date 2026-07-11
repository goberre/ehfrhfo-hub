export const siteConfig = {
  brand: "돌고래",
  domain: "ehfrhfo.com",
  name: "돌고래 — 세금·급여 계산",
  tagline: "한글로 돌고래.com 치시면 언제라도 올 수 있습니다.",
  description:
    "돌고래(ehfrhfo.com) — 세금·4대보험, 시급·연봉 계산기. 2026년 최신 요율, 무료, 회원가입 없음.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ehfrhfo.com",
  locale: "ko_KR",
  ogImage: "/og-image.svg",
} as const;

export const tools = [
  {
    href: "https://tax.ehfrhfo.com",
    name: "세금·4대보험",
    subtitle: "tax.ehfrhfo.com",
    description: "프리랜서 3.3%, 개인사업자, 직장인 실수령액",
    gradient: "from-blue-600 to-indigo-700",
    glow: "shadow-blue-500/25",
  },
  {
    href: "https://pay.ehfrhfo.com",
    name: "시급·연봉",
    subtitle: "pay.ehfrhfo.com",
    description: "시급, 연봉, 최저시급, 알바 주휴수당",
    gradient: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/25",
  },
] as const;
