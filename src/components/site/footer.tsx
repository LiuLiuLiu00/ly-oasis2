import Link from "next/link";

import { LikeButton } from "@/components/site/like-button";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-black text-ink">{siteConfig.name}</p>
          <p className="mt-1">{siteConfig.tagline}</p>
          <div className="mt-4 md:hidden">
            <LikeButton />
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {siteConfig.nav.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
