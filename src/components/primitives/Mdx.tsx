"use client";

import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const sharedComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn("mt-12 mb-4 text-3xl font-semibold tracking-tight", className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-12 mb-4 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn("mt-8 mb-3 text-xl font-semibold tracking-tight", className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className={cn("mt-6 mb-2 text-lg font-semibold", className)} {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "leading-7 text-ink-muted [&:not(:first-child)]:mt-5 text-pretty",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn("my-5 ml-5 list-disc space-y-2 text-ink-muted marker:text-brand", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn("my-5 ml-5 list-decimal space-y-2 text-ink-muted marker:text-brand", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("leading-7", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "my-6 border-l-2 border-brand/50 bg-white/[0.03] py-3 pl-5 pr-4 italic text-ink rounded-r-lg",
        className
      )}
      {...props}
    />
  ),
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className={cn(
        "my-10 border-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith("http");
    const linkClass = cn(
      "font-medium text-brand underline-offset-4 hover:underline",
      className
    );
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href ?? "#"} className={linkClass}>
        {children}
      </Link>
    );
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded-md border border-white/[0.10] bg-white/[0.04] px-1.5 py-0.5 font-mono text-[0.85em] text-brand",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "my-6 overflow-x-auto rounded-xl border border-white/[0.08] bg-base-surface1 p-4 text-sm text-ink",
        className
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img className={cn("rounded-xl border border-white/[0.08]", className)} alt={alt ?? ""} {...props} />
  ),
  Image,
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-semibold text-ink", className)} {...props} />
  ),
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType<unknown>>;
}

export function Mdx({ code, components }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <article className="max-w-none">
      <Component components={{ ...sharedComponents, ...components }} />
    </article>
  );
}
