import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { SchoolLogo } from "@/components/icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-800 text-slate-200">
      <div className="container max-w-screen-2xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <SchoolLogo className="h-8 w-8 text-accent" />
              <span className="font-headline text-xl font-bold">New Delhi Public School</span>
            </Link>
            <p className="text-sm text-slate-300">
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
              <li><Link href="/rules" className="hover:text-accent transition-colors">Rules</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Get in Touch</h3>
            <address className="space-y-2 text-sm text-slate-300 not-italic">
              <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 shrink-0"/><span>Prem Nursery Gopal Nagar Najafgarh, New Delhi-110043</span></p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0"/><a href="mailto:srisnajafgarh@gmail.com" className="hover:text-accent transition-colors">srisnajafgarh@gmail.com</a></p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0"/><a href="tel:+919999040338" className="hover:text-accent transition-colors">(+91) 99990 40338</a></p>
            </address>
          </div>
          <div>
             <h3 className="font-headline text-lg font-semibold mb-4">Affiliation</h3>
             <div className="text-sm text-slate-300 space-y-1">
                <p><strong>Affiliation No:</strong> 2730594</p>
                <p><strong>School Code:</strong> 25349</p>
             </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-600 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} New Delhi Public School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
