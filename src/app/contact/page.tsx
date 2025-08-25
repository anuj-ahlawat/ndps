import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Contact Us</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              We'd love to hear from you. Get in touch with us for admissions, queries, or feedback.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={6} />
                <Button type="submit" size="lg">Send Message</Button>
              </form>
            </div>
            <div className="space-y-8">
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Our Address</h3>
                  <p className="text-muted-foreground">123 Education Lane, New Delhi, India 110001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-muted-foreground"><a href="mailto:contact@ndps.edu.in" className="hover:text-primary">contact@ndps.edu.in</a></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-muted-foreground"><a href="tel:+911123456789" className="hover:text-primary">+91 11 2345 6789</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
            <div className="container max-w-6xl mx-auto">
                <h2 className="font-headline text-3xl font-bold text-primary mb-6 text-center">Find Us on the Map</h2>
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl border">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.260027582207!2d77.2167210150821!3d28.62194698242137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4a044b7b2b%3A0x6b7297693b12a02!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1678886561138!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="School Location"
                    ></iframe>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
