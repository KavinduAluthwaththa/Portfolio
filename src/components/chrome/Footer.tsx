import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { Container } from "@/components/primitives/Container";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { siteConfig } from "@/content/data/site";
import { Badge } from "@/components/ui/badge";

const SITEMAP = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/uses", label: "Uses" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { href: siteConfig.social.github, label: "GitHub", icon: Github },
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/[0.06]">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-medium text-ink"
            >
              <span className="grid h-7 w-7 place-items-center rounded-md bg-brand-gradient text-base text-xs font-bold">
                K
              </span>
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-ink-muted max-w-sm text-pretty">
              {siteConfig.tagline}
            </p>
            <Badge variant="success">
              <span className="h-1.5 w-1.5 rounded-full bg-status-available animate-pulse" />
              {siteConfig.availability}
            </Badge>
          </div>

          <div className="space-y-3">
            <EyebrowLabel>Sitemap</EyebrowLabel>
            <ul className="space-y-2">
              {SITEMAP.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-muted underline underline-offset-4 decoration-white/0 hover:text-ink hover:decoration-brand/60 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <EyebrowLabel>Connect</EyebrowLabel>
            <ul className="space-y-2">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{label}</span>
                    {href.startsWith("http") && (
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-xs font-mono text-ink-faint">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs font-mono text-ink-faint">
            Built with Next.js, TypeScript &amp; care from {siteConfig.location}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
