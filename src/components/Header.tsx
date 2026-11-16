"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { WAITLIST_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/links";
import Logo from "@/components/Logo";
import { InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sponsor", label: "Sponsors" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-[64px] w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10 xl:px-12">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden h-full items-center gap-1.5 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative flex h-full items-center px-3.5 text-[0.9375rem] transition-colors",
                  active
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {active && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: "oklch(0.58 0.24 258)" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions (Socials + CTA) */}
        <div className="hidden md:flex md:items-center md:gap-3">
          <div className="flex items-center gap-1 text-muted-foreground">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 items-center justify-center rounded-md transition-colors hover:bg-muted hover:text-foreground"
              aria-label="MidQWest on Instagram"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 items-center justify-center rounded-md transition-colors hover:bg-muted hover:text-foreground"
              aria-label="MidQWest on LinkedIn"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>

          <a
            href={WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-4.5 py-2 text-[13.5px] font-semibold text-vivid-foreground transition-all hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.58 0.24 258) 0%, oklch(0.52 0.22 268) 100%)",
              boxShadow: "0 2px 12px oklch(0.58 0.24 258 / 0.25)",
            }}
          >
            Apply now!
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm transition-colors",
                  pathname === link.href
                    ? "bg-muted font-semibold text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-vivid-foreground"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.58 0.24 258) 0%, oklch(0.52 0.22 268) 100%)",
              }}
            >
              Apply now!
            </a>

            <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-3">
              <span className="text-xs font-medium text-muted-foreground">Follow us</span>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-8 items-center justify-center rounded-md transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="MidQWest on Instagram"
                >
                  <InstagramIcon className="size-4" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-8 items-center justify-center rounded-md transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="MidQWest on LinkedIn"
                >
                  <LinkedinIcon className="size-4" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
