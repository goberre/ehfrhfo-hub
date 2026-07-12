import { seoConfig } from "@/config/seo";
import { siteConfig, tools } from "@/config/site";

const TAX_URL = "https://tax.ehfrhfo.com";
const PAY_URL = "https://pay.ehfrhfo.com";
const NAME_URL = "https://name.ehfrhfo.com";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.brand,
        url: siteConfig.url,
        logo: `${siteConfig.url}/favicon.svg`,
        sameAs: [siteConfig.url, TAX_URL, PAY_URL, NAME_URL],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: seoConfig.title,
        description: seoConfig.description,
        inLanguage: "ko-KR",
        publisher: { "@id": `${siteConfig.url}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${TAX_URL}/blog?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#tools`,
        name: "돌고래 계산기 목록",
        itemListElement: tools.map((tool, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: tool.name,
          url: tool.href,
        })),
      },
      ...tools.map((tool) => ({
        "@type": "WebApplication",
        name: tool.name,
        url: tool.href,
        description: tool.description,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        provider: { "@id": `${siteConfig.url}/#organization` },
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
