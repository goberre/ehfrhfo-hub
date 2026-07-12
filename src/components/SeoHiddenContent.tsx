import { seoHiddenSections } from "@/config/seo";

/** Crawler-friendly copy; visually hidden from UI */
export default function SeoHiddenContent() {
  return (
    <section className="sr-only" aria-label="서비스 소개">
      {seoHiddenSections.map((section) => (
        <article key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </article>
      ))}
    </section>
  );
}
