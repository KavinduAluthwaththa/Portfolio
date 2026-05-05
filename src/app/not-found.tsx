import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

import { Container } from "@/components/primitives/Container";
import { GlassCard } from "@/components/primitives/GlassCard";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="py-20 sm:py-28">
      <GlassCard className="p-10 sm:p-14 text-center gradient-border">
        <EyebrowLabel className="justify-center">Error 404</EyebrowLabel>
        <h1 className="mt-4 text-5xl sm:text-6xl font-semibold tracking-tight gradient-text inline-block">
          Page not found
        </h1>
        <p className="mt-4 text-ink-muted max-w-md mx-auto">
          The page you&apos;re looking for has either been moved, renamed or
          never existed in the first place.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <Button asChild variant="brand">
            <Link href="/">
              <Home className="h-4 w-4" /> Take me home
            </Link>
          </Button>
          <Button asChild variant="glass">
            <Link href="/projects">
              See my work <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </GlassCard>
    </Container>
  );
}
