"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Command } from "lucide-react";

import { cn } from "@/lib/utils";
import { useCommandPalette } from "./CommandPalette";

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export function FloatingNav() {
  const pathname = usePathname();
  const { open } = useCommandPalette();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 z-40 -translate-x-1/2 transition-all duration-300 px-4 sm:px-0",
        scrolled && "top-3"
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "flex items-center gap-1 rounded-full border border-white/[0.08] bg-base-surface1/70 px-1.5 py-1.5 backdrop-blur-xl shadow-card transition-all",
          scrolled && "shadow-glow"
        )}
      >
        <Link
          href="/"
          aria-label="Kavindu - home"
          className="ml-2 mr-1 hidden sm:inline-flex items-center px-2 py-1 text-sm font-mono text-ink hover:text-brand transition-colors"
        >
          kavindu
        </Link>
        <div className="hidden sm:block h-5 w-px bg-white/[0.08]" aria-hidden />
        <ul className="flex items-center">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-1.5 text-sm transition-colors",
                    active
                      ? "text-ink bg-white/[0.06]"
                      : "text-ink-muted hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden sm:block h-5 w-px bg-white/[0.08] mx-1" aria-hidden />
        <button
          type="button"
          onClick={open}
          aria-label="Open command palette"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-mono text-ink-muted hover:text-ink hover:bg-white/[0.06] transition-colors"
        >
          <Command className="h-3.5 w-3.5" />
          <span>K</span>
        </button>
      </nav>
    </header>
  );
}
