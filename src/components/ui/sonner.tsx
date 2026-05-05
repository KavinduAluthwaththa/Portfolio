"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-base-surface1 group-[.toaster]:text-ink group-[.toaster]:border group-[.toaster]:border-white/[0.10] group-[.toaster]:rounded-xl group-[.toaster]:shadow-card",
          description: "group-[.toast]:text-ink-muted",
          actionButton:
            "group-[.toast]:bg-brand group-[.toast]:text-base",
          cancelButton:
            "group-[.toast]:bg-white/[0.06] group-[.toast]:text-ink-muted",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
