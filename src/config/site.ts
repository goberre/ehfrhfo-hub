export const siteConfig = {
  brand: "돌고래",
  domain: "ehfrhfo.com",
  name: "돌고래 — 한국 세금·급여 계산 도구",
  tagline: "세금, 4대보험, 시급·연봉 계산을 한곳에서.",
  description:
    "돌고래(ehfrhfo.com)는 2026년 최신 요율을 반영한 한국 세금·급여 계산 도구 모음입니다. 종합소득세·4대보험 실수령액, 시급·연봉·최저시급 계산기를 무료로 이용하세요.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ehfrhfo.com",
  locale: "ko_KR",
  ogImage: "/og-image.svg",
} as const;

export const domainStory = {
  headline: "ehfrhfo.com = 돌고래",
  mnemonic: "Earn · Handle · Finance · Real · Hand · For · Outcome",
  mnemonicKo: "정직하게(Earn) · 다루다(Handle) · 금융(Finance) · 실제(Real) · 손(Han)d · 위해(For) · 결과(Outcome)",
  paragraphs: [
    "ehfrhfo.com은 우리 서비스의 집 주소입니다. 브랜드 이름은 돌고래 — 복잡한 세금·급여 계산을 빠르고 정확하게 헤쳐 나간다는 뜻입니다.",
    "tax.ehfrhfo.com은 세금·4대보험, pay.ehfrhfo.com은 시급·연봉을 담당합니다. ehfrhfo.com(루트)은 두 도구를 연결하는 허브입니다.",
    "기억법: 돌고래가 사는 바다 = ehfrhfo.com. 세금은 tax, 급여는 pay.",
  ],
} as const;

export const stats = [
  { value: "2", label: "전문 계산기" },
  { value: "30+", label: "가이드 글" },
  { value: "2026", label: "최신 요율" },
  { value: "₩0", label: "이용 요금" },
] as const;

export const features = [
  {
    title: "회원가입 없음",
    body: "금액을 입력하면 브라우저에서 바로 계산합니다. 서버에 저장하지 않습니다.",
  },
  {
    title: "2026년 최신 요율",
    body: "4대보험·최저시급 10,320원·3.3% 원천징수 등 최신 기준을 반영합니다.",
  },
  {
    title: "고용 형태별 맞춤",
    body: "프리랜서, 개인사업자, 직장인, 알바 각각 다른 세금 구조를 지원합니다.",
  },
  {
    title: "모바일·PC 모두",
    body: "설치 없이 웹에서 바로 사용. 언제 어디서나 실수령액을 확인하세요.",
  },
] as const;

export const tools = [
  {
    href: "https://tax.ehfrhfo.com",
    name: "세금·4대보험 계산기",
    description:
      "프리랜서 3.3%, 개인사업자, 직장인 맞춤. 종합소득세·4대보험 공제 후 실수령액을 그래프로 확인.",
    tags: ["종합소득세", "4대보험", "프리랜서", "개인사업자"],
    accent: "blue" as const,
    links: [
      { href: "https://tax.ehfrhfo.com/freelancer", label: "프리랜서 3.3%" },
      { href: "https://tax.ehfrhfo.com/business", label: "개인사업자" },
      { href: "https://tax.ehfrhfo.com/employee", label: "근로소득자" },
      { href: "https://tax.ehfrhfo.com/blog", label: "세금·보험 가이드" },
    ],
  },
  {
    href: "https://pay.ehfrhfo.com",
    name: "시급·연봉 계산기",
    description:
      "시급, 연봉, 월급, 최저시급, 알바 주휴수당까지. 2026년 최저시급 10,320원 기준 실시간 계산.",
    tags: ["시급", "연봉", "최저시급", "주휴수당"],
    accent: "cyan" as const,
    links: [
      { href: "https://pay.ehfrhfo.com/hourly", label: "시급 계산기" },
      { href: "https://pay.ehfrhfo.com/annual", label: "연봉 계산기" },
      { href: "https://pay.ehfrhfo.com/minimum-wage", label: "최저시급" },
      { href: "https://pay.ehfrhfo.com/part-time", label: "알바·주휴수당" },
    ],
  },
] as const;

export const guides = [
  {
    href: "https://tax.ehfrhfo.com/blog",
    label: "세금·보험 가이드",
    description: "종소세, 4대보험, 연말정산, 프리랜서 세금",
  },
  {
    href: "https://pay.ehfrhfo.com/blog",
    label: "시급·연봉 가이드",
    description: "최저시급, 주휴수당, 시급↔연봉 환산",
  },
] as const;

export const faq = [
  {
    question: "ehfrhfo.com이 뭔가요?",
    answer:
      "ehfrhfo.com은 돌고래 브랜드의 메인 도메인입니다. tax(세금)와 pay(급여) 계산기를 연결하는 허브이며, 복잡한 금융 계산을 빠르게 해결한다는 돌고래 컨셉을 담았습니다.",
  },
  {
    question: "계산기는 무료인가요?",
    answer: "네. 회원가입 없이 모든 계산기와 가이드를 무료로 이용할 수 있습니다.",
  },
  {
    question: "tax와 pay 중 어디서 계산하나요?",
    answer:
      "세후 실수령액·4대보험·종합소득세는 tax.ehfrhfo.com, 시급·연봉·주휴수당 환산은 pay.ehfrhfo.com을 이용하세요.",
  },
  {
    question: "입력한 금액은 저장되나요?",
    answer:
      "아니요. 입력값은 브라우저에서만 처리되며 서버에 저장하지 않습니다.",
  },
] as const;

export const useCases = [
  {
    title: "프리랜서 · 외주",
    body: "3.3% 원천징수 후 실수령액과 4대보험료를 tax에서 확인하세요.",
    href: "https://tax.ehfrhfo.com/freelancer",
  },
  {
    title: "직장인 · 연봉 협상",
    body: "연봉 제안을 시급·월급으로 환산하고 세후 금액을 비교하세요.",
    href: "https://pay.ehfrhfo.com/annual",
  },
  {
    title: "알바 · 파트타임",
    body: "최저시급 10,320원 기준 주휴수당 포함 월급을 pay에서 계산하세요.",
    href: "https://pay.ehfrhfo.com/part-time",
  },
  {
    title: "개인사업자",
    body: "매출·순익 기준 종합소득세와 4대보험을 tax에서 확인하세요.",
    href: "https://tax.ehfrhfo.com/business",
  },
] as const;
