export const siteConfig = {
  brand: "돌고래",
  name: "돌고래 — 한국 세금·급여 계산 도구",
  tagline: "세금, 4대보험, 시급·연봉 계산을 한곳에서.",
  description:
    "돌고래(ehfrhfo.com)는 2026년 최신 요율을 반영한 한국 세금·급여 계산 도구 모음입니다. 종합소득세·4대보험 실수령액, 시급·연봉·최저시급 계산기를 무료로 이용하세요.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ehfrhfo.com",
  locale: "ko_KR",
  ogImage: "/og-image.svg",
} as const;

export const tools = [
  {
    href: "https://tax.ehfrhfo.com",
    name: "세금·4대보험 계산기",
    description:
      "프리랜서 3.3%, 개인사업자, 직장인 맞춤. 종합소득세·4대보험 공제 후 실수령액을 그래프로 확인.",
    tags: ["종합소득세", "4대보험", "프리랜서", "개인사업자"],
    accent: "blue" as const,
  },
  {
    href: "https://pay.ehfrhfo.com",
    name: "시급·연봉 계산기",
    description:
      "시급, 연봉, 월급, 최저시급, 알바 주휴수당까지. 2026년 최저시급 10,320원 기준 실시간 계산.",
    tags: ["시급", "연봉", "최저시급", "주휴수당"],
    accent: "cyan" as const,
  },
] as const;

export const guides = [
  {
    href: "https://tax.ehfrhfo.com/blog",
    label: "세금·보험 가이드",
    site: "tax",
  },
  {
    href: "https://pay.ehfrhfo.com/blog",
    label: "시급·연봉 가이드",
    site: "pay",
  },
] as const;
