import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-mono uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-white/[0.10] bg-white/[0.04] text-ink-muted",
        brand:
          "border-brand/30 bg-brand/[0.08] text-brand",
        success:
          "border-status-available/30 bg-status-available/[0.08] text-status-available",
        progress:
          "border-status-progress/30 bg-status-progress/[0.08] text-status-progress",
        outline:
          "border-white/[0.16] text-ink-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
