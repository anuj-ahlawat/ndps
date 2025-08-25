"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { SchoolLogo } from "@/components/icons";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "About-Us",
    sublinks: [
      { href: "/managing-committee", label: "Managing Committee" },
      { href: "/chairpersons-desk", label: "Chairperson's Desk" },
      { href: "/principals-desk", label: "Principal's Desk" },
      { href: "/vision-mission", label: "Our Vision & Mission" },
      { href: "/recognition", label: "Recognition & Affiliation" },
      { href: "/smc-body", label: "SMC Body" },
      { href: "/rules", label: "School Rules" },
      { href: "/infrastructure", label: "Infrastructure" },
    ]
  },
  {
    label: "Academics",
    sublinks: [
      { href: "/examination", label: "Examination" },
      { href: "/annual-calendar", label: "Annual Academic Calendar" },
      { href: "/results", label: "Class 10th & 12th CBSE Result" },
      { href: "/life-skills", label: "Life Skills" },
      { href: "/faculty", label: "Faculty" },
      { href: "/co-scholastic-activities", label: "Co-Scholastic Activities" },
    ]
  },
  {
    label: "Admission",
    sublinks: [
      { href: "/admissions", label: "Admission Process" },
      { href: "/fees", label: "Fee Structure" },
    ]
  },
  {
    label: "Facilities",
    sublinks: [
      { href: "/facilities/smart-classes", label: "Smart Classes" },
      { href: "/facilities/laboratories", label: "Laboratories" },
      { href: "/facilities/library", label: "Library" },
      { href: "/facilities/computer-lab", label: "Computer Lab" },
      { href: "/facilities/transport", label: "Transport" },
      { href: "/facilities/excursions", label: "Excursions" },
    ]
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News & Events" },
  { href: "/contact", label: "Contact-Us" },
];


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-red-500 bg-primary/90 text-primary-foreground backdrop-blur supports-[backdrop-filter]:bg-primary/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <SchoolLogo className="h-8 w-8 text-white" />
            <span className="font-bold hidden sm:inline-block">NDPS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              link.sublinks ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground data-[state=open]:bg-primary-foreground/10">
                      {link.label}
                      <ChevronDown className="h-4 w-4"/>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-primary text-primary-foreground border-primary-foreground/20">
                    {link.sublinks.map((sublink) => (
                      <DropdownMenuItem key={sublink.href} asChild>
                        <Link href={sublink.href} className="hover:bg-primary-foreground/10!">{sublink.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={cn(
                    "transition-colors hover:bg-primary-foreground/10 px-3 py-2 rounded-md", 
                    pathname === link.href ? "bg-primary-foreground/10" : ""
                  )}
                >
                  {link.label}
                </Link>
              )
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
              <SheetContent side="left" className="w-full bg-primary text-primary-foreground border-r-primary-foreground/20 p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-b-primary-foreground/20">
                     <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                        <SchoolLogo className="h-8 w-8" />
                        <span className="font-headline text-xl font-bold">New Delhi Public School</span>
                      </Link>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetClose>
                  </div>
                  <nav className="flex flex-col gap-1 p-4">
                    <Accordion type="single" collapsible className="w-full">
                    {navLinks.map((link, index) => (
                       link.sublinks ? (
                        <AccordionItem value={`item-${index}`} key={link.label} className="border-b-primary-foreground/20">
                          <AccordionTrigger className="hover:no-underline text-lg font-medium py-3">
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-1 pl-4">
                            {link.sublinks.map((sublink) => (
                              <Link
                                key={sublink.href}
                                href={sublink.href}
                                className={cn(
                                  "text-base font-medium rounded-md px-3 py-2",
                                  pathname === sublink.href ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {sublink.label}
                              </Link>
                            ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                       ) : (
                        <Link
                          key={link.href}
                          href={link.href!}
                          className={cn(
                            "text-lg font-medium rounded-md px-3 py-3 flex items-center border-b border-b-primary-foreground/20",
                            pathname === link.href ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                       )
                    ))}
                    </Accordion>
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
