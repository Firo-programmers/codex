import * as React from "react";

import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border/60 bg-secondary/70 px-3 py-1 text-xs font-medium text-secondary-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
