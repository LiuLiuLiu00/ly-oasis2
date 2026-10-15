"use client";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { searchItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isSearchShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (isSearchShortcut) {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(timer);
  }, [open]);

  const results = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return searchItems.slice(0, 8);

    return searchItems
      .filter((item) => item.keywords.toLowerCase().includes(keyword))
      .slice(0, 10);
  }, [query]);

  const goTo = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  return (
    <>
      <Button
        type="button"
        variant="secondary"
        className="hidden min-w-[190px] justify-between text-neutral-500 lg:inline-flex"
        onClick={() => setOpen(true)}
      >
        <span className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          搜索内容
        </span>
        <span className="rounded border border-neutral-200 px-1.5 py-0.5 text-[11px] font-bold text-neutral-500">
          ⌘K
        </span>
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="搜索"
      >
        <Search className="h-5 w-5" />
      </Button>

      {open ? (
        <div
          className="fixed inset-0 z-50 bg-ink/35 px-4 py-20 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onMouseDown={() => setOpen(false)}
        >
          <div
            className="mx-auto max-w-2xl overflow-hidden rounded-card border border-neutral-200 bg-paper shadow-soft"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-neutral-200 bg-white px-4 py-3">
              <Search className="h-5 w-5 text-neutral-500" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="搜索手记、工具、Builds"
                className="h-10 flex-1 bg-transparent text-base font-semibold text-ink outline-none placeholder:text-neutral-400"
              />
              <Button type="button" variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {results.length ? (
                results.map((item) => (
                  <button
                    key={`${item.href}-${item.title}`}
                    type="button"
                    className="flex w-full flex-col gap-1 rounded-card px-4 py-3 text-left transition-colors hover:bg-white"
                    onClick={() => goTo(item.href)}
                  >
                    <span className="text-xs font-bold text-neutral-500">{item.type}</span>
                    <span className="text-sm font-black text-ink">{item.title}</span>
                    <span className="line-clamp-2 text-sm leading-6 text-neutral-600">
                      {item.description}
                    </span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-10 text-center">
                  <p className="font-bold text-ink">没有找到匹配内容</p>
                  <p className="mt-2 text-sm text-neutral-500">换一个关键词试试，例如 Agent、图片、工具抽屉。</p>
                </div>
              )}
            </div>
            <div className={cn("border-t border-neutral-200 px-4 py-3 text-xs text-neutral-500", !query && "bg-white")}>
              共收录 {searchItems.length} 条内容索引
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
