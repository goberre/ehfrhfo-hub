import { siteConfig } from "@/config/site";

export const seoConfig = {
  title: "돌고래 | 한글로 돌고래.com — 세금·급여 계산기",
  description:
    "한글로 돌고래.com 치시면 언제라도 올 수 있습니다. ehfrhfo.com — 2026년 최신 요율 세금·4대보험·시급·연봉 계산기. 프리랜서 3.3%, 최저시급 10,320원, 실수령액 무료 계산.",
  keywords: [
    "돌고래",
    "ehfrhfo",
    "ehfrhfo.com",
    "돌고래.com",
    "세금 계산기",
    "4대보험 계산기",
    "시급 계산기",
    "연봉 계산기",
    "실수령액 계산",
    "종합소득세 계산기",
    "프리랜서 3.3%",
    "최저시급 2026",
    "주휴수당 계산",
    "월급 계산기",
  ],
  ogImage: siteConfig.ogImage,
  locale: siteConfig.locale,
  siteName: siteConfig.brand,
} as const;

export const seoHiddenSections = [
  {
    title: "돌고래 — ehfrhfo.com 세금·급여 계산",
    body: "돌고래(ehfrhfo.com)는 한국 세금·급여 계산 도구 모음입니다. tax.ehfrhfo.com에서 프리랜서 3.3%, 개인사업자, 직장인 종합소득세·4대보험 실수령액을 계산하고, pay.ehfrhfo.com에서 시급·연봉·최저시급·알바 주휴수당을 계산할 수 있습니다.",
  },
  {
    title: "한글로 돌고래.com",
    body: "브랜드 이름은 돌고래, 주소는 ehfrhfo.com입니다. 한글로 돌고래.com 치시면 언제라도 올 수 있습니다. 2026년 최신 요율, 회원가입 없이 무료로 이용하세요.",
  },
] as const;
