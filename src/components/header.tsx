"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
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
    label: "Admission",
    sublinks: [
      { href: "/admissions", label: "Admission Process" },
      { href: "/fees", label: "Fee Structure" },
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
  { href: "/school-safety-committee", label: "School Safety Committee" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact-Us" },
];


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-md">
      <div className="bg-primary text-primary-foreground py-4">
          <div className="container max-w-screen-2xl flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                  <SchoolLogo className="h-16 w-16 text-white" />
                  <div>
                      <h1 className="text-2xl md:text-3xl font-bold font-headline text-white">New Delhi Public School</h1>
                      <p className="text-sm text-primary-foreground/80">Prem Nursery Gopal Nagar Najafgarh, New Delhi-110043</p>
                  </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <a href="tel:+919999040338" className="flex items-center gap-2 hover:text-accent transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>(+91) 99990 40338</span>
                    </a>
                     <a href="mailto:srisnajafgarh@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                      <Mail className="h-4 w-4" />
                      <span>srisnajafgarh@gmail.com</span>
                    </a>
                  </div>
                  <div className="text-xs bg-primary-foreground/10 p-2 rounded-md">
                    <p><strong>Affiliation No:</strong> 2730594</p>
                    <p><strong>School Code:</strong> 25349</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="bg-secondary/50 border-y border-border">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              link.sublinks ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className={cn(
                        "flex items-center gap-1 hover:bg-primary/10 data-[state=open]:bg-primary/10",
                        link.sublinks.some(sublink => pathname.startsWith(sublink.href)) && 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground'
                        )}>
                      {link.label}
                      <ChevronDown className="h-4 w-4"/>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.sublinks.map((sublink) => (
                      <DropdownMenuItem key={sublink.href} asChild>
                        <Link href={sublink.href}>{sublink.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button asChild variant="ghost" className={cn(
                    "hover:bg-primary/10",
                     pathname === link.href ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground' : ''
                     )}>
                    <Link
                      key={link.href}
                      href={link.href!}
                    >
                      {link.label}
                    </Link>
                </Button>
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
              <SheetContent side="left" className="w-full bg-background p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                        <SchoolLogo className="h-8 w-8 text-primary" />
                        <span className="font-bold">NDPS</span>
                      </Link>
                      <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetClose>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-4">
                    <Accordion type="single" collapsible className="w-full">
                    {navLinks.map((link, index) => (
                       link.sublinks ? (
                        <AccordionItem value={`item-${index}`} key={link.label} className="border-b">
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
                            "text-lg font-medium rounded-md px-3 py-3 flex items-center border-b",
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
      </div>
    </header>
  );
}
