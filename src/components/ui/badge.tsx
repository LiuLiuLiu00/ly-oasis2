import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  children
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-card border border-neutral-200 bg-white px-2.5 py-1 text-xs font-semibold text-neutral-700",
        className
      )}
    >
      {children}
    </span>
  );
}
