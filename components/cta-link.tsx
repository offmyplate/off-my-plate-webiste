"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type CtaLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  location: string;
};

export function CtaLink({ children, location, onClick, ...props }: CtaLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        window.gtag?.("event", "cta_click", {
          cta_label: typeof children === "string" ? children : "Contact",
          cta_location: location,
        });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
