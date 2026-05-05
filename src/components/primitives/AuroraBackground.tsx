import { cn } from "@/lib/utils";

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed inset-0 -z-10 overflow-hidden bg-base",
        className
      )}
      aria-hidden
    >
      <div className="aurora" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="noise" />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-base via-base/80 to-transparent"
        aria-hidden
      />
    </div>
  );
}
