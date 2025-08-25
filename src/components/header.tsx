"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, PhoneCall, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SchoolLogo } from "@/components/icons";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/faculty", label: "Faculty" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/fees", label: "Fee Structure" },
  { href: "/results", label: "Results" },
  { href: "/rules", label: "Rules" },
  { href: "/recognition", label: "Recognition" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="bg-[#4a69bd] text-white p-4">
        <div className="container max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <SchoolLogo className="h-16 w-16 text-white" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold font-serif tracking-wider" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.2)'}}>Sri Ram International School</h1>
              <p className="text-sm">Prem Nursery Gopal Nagar Najafgarh, New Delhi-110043</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mt-1">
                <a href="http://www.sris.ac.in" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">website: www.sris.ac.in</a>
                <a href="mailto:srisnajafgarh@gmail.com" className="text-yellow-300 hover:underline">Email: srisnajafgarh@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a href="tel:+919999040338" className="flex items-center gap-2 bg-black/20 p-2 rounded-md hover:bg-black/40 transition-colors">
              <PhoneCall className="h-4 w-4"/>
              <span>(+91) - 9999040338</span>
            </a>
            <a href="tel:01171522487" className="flex items-center gap-2 bg-black/20 p-2 rounded-md hover:bg-black/40 transition-colors">
              <Phone className="h-4 w-4"/>
              <span>(011) - 71522487</span>
            </a>
            <div className="text-xs mt-1">
                <p>Affiliation No. - 2730594</p>
                <p>School Code - 25349</p>
            </div>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:hidden">
            <SchoolLogo className="h-6 w-6 text-primary" />
            <span className="font-bold text-primary">SRIS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn("transition-colors hover:text-primary", pathname === link.href ? "text-primary" : "text-foreground/80")}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                        <SchoolLogo className="h-8 w-8 text-primary" />
                        <span className="font-headline text-xl font-bold text-primary">Sri Ram Int. School</span>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                      </Button>
                  </div>
                  <nav className="flex flex-col gap-1 p-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "text-lg font-medium rounded-md px-3 py-2",
                          pathname === link.href ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
