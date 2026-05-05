"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Briefcase,
  Copy,
  FileText,
  Github,
  Home,
  Linkedin,
  Mail,
  PenLine,
  User,
  Wrench,
} from "lucide-react";
import { toast } from "sonner";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { siteConfig } from "@/content/data/site";

interface CommandPaletteContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(
  null
);

export function useCommandPalette() {
  const ctx = useContext(CommandPaletteContext);
  if (!ctx) {
    return {
      open: () => {},
      close: () => {},
      isOpen: false,
    };
  }
  return ctx;
}

export function CommandPaletteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    let lastG = 0;
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const editable =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((v) => !v);
        return;
      }

      if (editable) return;

      if (e.key === "g") {
        lastG = Date.now();
        return;
      }
      if (Date.now() - lastG < 1200) {
        const map: Record<string, string> = {
          h: "/",
          a: "/about",
          p: "/projects",
          w: "/writing",
          c: "/contact",
          u: "/uses",
        };
        const dest = map[e.key.toLowerCase()];
        if (dest) {
          lastG = 0;
          router.push(dest);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  const go = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  const copyEmail = async () => {
    setIsOpen(false);
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Could not copy email");
    }
  };

  return (
    <CommandPaletteContext.Provider value={{ open, close, isOpen }}>
      {children}
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => go("/")}>
              <Home className="h-4 w-4" />
              Home
              <CommandShortcut>G H</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => go("/about")}>
              <User className="h-4 w-4" />
              About
              <CommandShortcut>G A</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => go("/projects")}>
              <Briefcase className="h-4 w-4" />
              Projects
              <CommandShortcut>G P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => go("/writing")}>
              <PenLine className="h-4 w-4" />
              Writing
            </CommandItem>
            <CommandItem onSelect={() => go("/uses")}>
              <Wrench className="h-4 w-4" />
              Uses
            </CommandItem>
            <CommandItem onSelect={() => go("/contact")}>
              <Mail className="h-4 w-4" />
              Contact
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem onSelect={copyEmail}>
              <Copy className="h-4 w-4" />
              Copy email
              <span className="ml-auto truncate max-w-[180px] text-[11px] font-mono text-ink-muted">
                {siteConfig.email}
              </span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setIsOpen(false);
                window.open("/cv.pdf", "_blank");
              }}
            >
              <FileText className="h-4 w-4" />
              Download resume
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Links">
            <CommandItem
              onSelect={() => {
                setIsOpen(false);
                window.open(siteConfig.social.github, "_blank");
              }}
            >
              <Github className="h-4 w-4" />
              GitHub
              <ArrowRight className="ml-auto h-3 w-3 text-ink-faint" />
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setIsOpen(false);
                window.open(siteConfig.social.linkedin, "_blank");
              }}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowRight className="ml-auto h-3 w-3 text-ink-faint" />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </CommandPaletteContext.Provider>
  );
}
