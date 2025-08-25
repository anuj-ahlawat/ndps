"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SchoolLogo } from "@/components/icons";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#academics", label: "Academics" },
  { href: "#gallery", label: "Gallery" },
  { href: "#news", label: "News & Events" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <SchoolLogo className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">NDPS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
            <Button>Admissions</Button>
            <Button variant="outline">Parent Portal</Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                      <SchoolLogo className="h-8 w-8 text-primary" />
                      <span className="font-headline text-xl font-bold text-primary">NDPS</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4 flex flex-col gap-2">
                    <Button onClick={() => setIsMenuOpen(false)}>Admissions</Button>
                    <Button variant="outline" onClick={() => setIsMenuOpen(false)}>Parent Portal</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
