import { cn } from "@/lib/utils";

interface TechChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  size?: "sm" | "md";
}

export function TechChip({
  label,
  size = "md",
  className,
  ...props
}: TechChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/[0.10] bg-white/[0.04] font-mono text-ink-muted",
        size === "md" && "px-3 py-1 text-xs",
        size === "sm" && "px-2 py-0.5 text-[10px]",
        className
      )}
      {...props}
    >
      {label}
    </span>
  );
}

export function TechChipList({
  items,
  size = "md",
  className,
}: {
  items: string[];
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <TechChip key={item} label={item} size={size} />
      ))}
    </div>
  );
}
