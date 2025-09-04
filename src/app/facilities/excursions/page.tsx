import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Map, Landmark, Building2 } from "lucide-react";

export default function ExcursionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Excursions</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Learning beyond the classroom walls.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Educational Trips & Tours</h2>
              <p className="mb-6 text-muted-foreground">
                We believe that educational trips and excursions are an integral part of the learning process. These outings provide students with valuable real-world experiences, supplement their classroom learning, and help in their overall development. We organize regular visits to places of historical, cultural, and scientific importance.
              </p>
            </div>
             <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
               <Image
                 src="https://placehold.co/600x450.png"
                 alt="Students on an excursion"
                 data-ai-hint="students excursion"
                 fill
                 className="object-cover"
               />
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-card">
            <div className="container max-w-5xl mx-auto text-center">
                <h2 className="font-headline text-3xl font-bold text-primary mb-12">Types of Excursions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="p-6">
                        <Landmark className="h-10 w-10 text-accent mx-auto mb-4"/>
                        <h3 className="font-headline text-xl font-bold">Historical Sites</h3>
                        <p className="text-muted-foreground mt-2">Visits to forts, palaces, and monuments to learn about our rich heritage.</p>
                    </Card>
                     <Card className="p-6">
                        <Building2 className="h-10 w-10 text-accent mx-auto mb-4"/>
                        <h3 className="font-headline text-xl font-bold">Museums & Galleries</h3>
                        <p className="text-muted-foreground mt-2">Exploring art, science, and history museums to spark curiosity.</p>
                    </Card>
                     <Card className="p-6">
                        <Map className="h-10 w-10 text-accent mx-auto mb-4"/>
                        <h3 className="font-headline text-xl font-bold">Adventure Camps</h3>
                        <p className="text-muted-foreground mt-2">Developing teamwork, leadership, and resilience through outdoor activities.</p>
                    </Card>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
