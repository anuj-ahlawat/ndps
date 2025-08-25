import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { SchoolLogo } from "@/components/icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container max-w-screen-2xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <SchoolLogo className="h-8 w-8 text-accent" />
              <span className="font-headline text-xl font-bold">New Delhi Public School</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Fostering excellence, integrity, and lifelong learning since 1995.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-accent transition-colors" /></Link>
              <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-accent transition-colors" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-accent transition-colors" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 hover:text-accent transition-colors" /></Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-accent transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-accent transition-colors">Admissions</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Get in Touch</h3>
            <address className="space-y-2 text-sm text-primary-foreground/80 not-italic">
              <p>123 Education Lane, New Delhi, India 110001</p>
              <p><a href="mailto:contact@ndps.edu.in" className="hover:text-accent transition-colors">contact@ndps.edu.in</a></p>
              <p><a href="tel:+911123456789" className="hover:text-accent transition-colors">+91 11 2345 6789</a></p>
            </address>
          </div>
          <div>
             <h3 className="font-headline text-lg font-semibold mb-4">Our Newsletter</h3>
             <p className="text-sm text-primary-foreground/80 mb-2">Subscribe to get our latest updates.</p>
             <form className="flex gap-2">
                <Input type="email" placeholder="Your email" className="bg-primary-foreground/10 border-primary-foreground/20 text-sm placeholder:text-primary-foreground/50 focus:ring-accent focus:border-accent" aria-label="Email for newsletter"/>
                <Button type="submit" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
             </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} New Delhi Public School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
