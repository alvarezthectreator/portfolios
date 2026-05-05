'use client';

import React from "react";
import { createPortal } from "react-dom";

import { Button, buttonVariants } from "@/components/ui/button";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/components/ui/use-scroll";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const links = [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#about" },
  ];

  const updatedLinks = links.filter(link => link.label !== "Resume");

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-b border-transparent", {
        "border-border bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50":
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <a
          href="#"
          className="rounded-md px-2 py-1 text-lg font-black uppercase tracking-[0.18em] text-white transition-colors hover:text-zinc-300"
        >
          alvarez
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {updatedLinks.map((link) => (
            <a
              key={link.label}
              className={buttonVariants({ variant: "ghost" })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>
      <MobileMenu open={open} className="flex flex-col justify-between gap-2">
        <div className="grid gap-y-2">
          {updatedLinks.map((link) => (
            <a
              key={link.label}
              className={buttonVariants({
                variant: "ghost",
                className: "justify-start",
              })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="outline" className="w-full bg-transparent">
            Sign In
          </Button>
          <Button className="w-full">Get Started</Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean;
};

function MobileMenu({
  open,
  children,
  className,
  ...props
}: MobileMenuProps) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-x-0 bottom-0 top-14 z-40 flex flex-col overflow-hidden border-y md:hidden",
        "bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50"
      )}
    >
      <div
        data-slot={open ? "open" : "closed"}
        className={cn(
          "size-full p-4",
          "data-[slot=open]:animate-zoom-in-97 ease-out",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
