import BrandLockup from "@/components/BrandLockup";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function HubFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#060b14]">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <BrandLockup size="sm" light />
        <div className="flex gap-5 text-xs text-white/40">
          <Link href="/privacy" className="transition hover:text-white/70">
            개인정보처리방침
          </Link>
          <span>{siteConfig.domain}</span>
        </div>
      </div>
    </footer>
  );
}
