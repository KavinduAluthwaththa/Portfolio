import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: "default" | "wide" | "narrow";
  bare?: boolean;
}

export function Section({
  className,
  containerSize = "default",
  bare = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative py-20 sm:py-24 lg:py-28", className)}
      {...props}
    >
      {bare ? children : <Container size={containerSize}>{children}</Container>}
    </section>
  );
}
