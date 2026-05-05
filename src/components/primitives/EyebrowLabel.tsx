import { cn } from "@/lib/utils";

interface EyebrowLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  index?: string;
}

export function EyebrowLabel({
  className,
  index,
  children,
  ...props
}: EyebrowLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-faint",
        className
      )}
      {...props}
    >
      {index && <span className="text-brand">{index}</span>}
      <span className="h-px w-6 bg-white/[0.16]" aria-hidden />
      {children}
    </span>
  );
}
