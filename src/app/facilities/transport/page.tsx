import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Bus, MapPin, ShieldCheck } from "lucide-react";

export default function TransportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Transport</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Safe, reliable, and convenient transportation for our students.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
             <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
               <Image
                 src="https://placehold.co/600x450.png"
                 alt="School bus"
                 data-ai-hint="school bus"
                 fill
                 className="object-cover"
               />
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our Fleet</h2>
              <p className="mb-6 text-muted-foreground">
                The school has a fleet of modern buses that cover various routes across the city. We are committed to providing a safe and comfortable journey for our students. All our buses are equipped with safety features and are managed by experienced drivers and conductors.
              </p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <Card className="p-6">
                        <Bus className="h-10 w-10 text-accent mx-auto mb-4"/>
                        <h3 className="font-headline text-xl font-bold">Modern Buses</h3>
                    </Card>
                     <Card className="p-6">
                        <MapPin className="h-10 w-10 text-accent mx-auto mb-4"/>
                        <h3 className="font-headline text-xl font-bold">GPS Tracking</h3>
                    </Card>
                     <Card className="p-6">
                        <ShieldCheck className="h-10 w-10 text-accent mx-auto mb-4"/>
                        <h3 className="font-headline text-xl font-bold">Safety First</h3>
                    </Card>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
