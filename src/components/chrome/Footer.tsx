import { Code2, Coffee } from "lucide-react";

import { Container } from "@/components/primitives/Container";
import { siteConfig } from "@/content/data/site";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/[0.06]">
      <Container className="py-8 flex flex-col-reverse sm:flex-row items-center justify-center gap-3">
        <p className="text-xs font-mono text-ink-faint inline-flex items-center gap-1.5">
          Powered by Clean <Code2 className="h-3.5 w-3.5 text-brand" /> and{" "}
          <Coffee className="h-3.5 w-3.5 text-brand" />
        </p>
      </Container>
    </footer>
  );
}
