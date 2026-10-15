"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const STORAGE_KEY = "ai-notes-liked";
const COUNT_KEY = "ai-notes-like-count";
const BASE_LIKES = 128;

export function LikeButton({ className, compact = false }: { className?: string; compact?: boolean }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(BASE_LIKES);

  useEffect(() => {
    const savedLike = window.localStorage.getItem(STORAGE_KEY) === "true";
    const savedCount = Number(window.localStorage.getItem(COUNT_KEY));
    setLiked(savedLike);
    setCount(Number.isFinite(savedCount) && savedCount > 0 ? savedCount : BASE_LIKES);
  }, []);

  const toggleLike = () => {
    setLiked((current) => {
      const next = !current;
      const nextCount = Math.max(BASE_LIKES, count + (next ? 1 : -1));
      setCount(nextCount);
      window.localStorage.setItem(STORAGE_KEY, String(next));
      window.localStorage.setItem(COUNT_KEY, String(nextCount));
      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleLike}
      aria-pressed={liked}
      aria-label={liked ? "取消喜欢这个博客" : "喜欢这个博客"}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-card border border-ink bg-white px-3 py-2 text-sm font-black text-ink shadow-[4px_4px_0_#171717] transition-transform hover:-translate-y-0.5 active:translate-y-0",
        liked && "bg-coral text-white",
        className
      )}
    >
      <Heart
        className={cn(
          "h-4 w-4 transition-transform group-hover:scale-110",
          liked && "fill-current"
        )}
      />
      {compact ? <span>{count}</span> : <span>喜欢这个博客 · {count}</span>}
    </button>
  );
}
