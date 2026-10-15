"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { LikeButton } from "@/components/site/like-button";
import { SearchCommand } from "@/components/site/search-command";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/92 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-card border border-ink bg-lemon text-sm font-black text-ink shadow-[3px_3px_0_#171717]">
            记
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black text-ink">{siteConfig.name}</span>
            <span className="hidden text-xs font-semibold text-neutral-500 sm:block">Tool Notes Studio</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-card px-3 py-2 text-sm font-bold text-neutral-600 transition-colors hover:bg-white hover:text-ink",
                isActive(item.href) && "bg-white text-ink shadow-line"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LikeButton compact className="hidden md:inline-flex" />
          <SearchCommand />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "关闭导航" : "打开导航"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-neutral-200 bg-paper px-4 py-3 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="移动端主导航">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-card px-3 py-3 text-sm font-bold text-neutral-700",
                  isActive(item.href) && "bg-white text-ink shadow-line"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
