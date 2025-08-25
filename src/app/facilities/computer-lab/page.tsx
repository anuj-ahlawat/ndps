import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Computer, Wifi, Cpu } from "lucide-react";

export default function ComputerLabPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Computer Lab</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Developing digital literacy and 21st-century skills.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Gateway to the Digital World</h2>
              <p className="mb-6 text-muted-foreground">
                Our computer labs are equipped with the latest hardware and software to provide students with the necessary tools to develop their digital literacy skills. The labs are designed to support the curriculum and encourage students to explore technology in a safe and guided environment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="text-center p-4">
                    <Computer className="h-8 w-8 mx-auto text-accent mb-2"/>
                    <p className="font-semibold">Latest PCs</p>
                </Card>
                 <Card className="text-center p-4">
                    <Wifi className="h-8 w-8 mx-auto text-accent mb-2"/>
                    <p className="font-semibold">High-Speed Internet</p>
                </Card>
                 <Card className="text-center p-4">
                    <Cpu className="h-8 w-8 mx-auto text-accent mb-2"/>
                    <p className="font-semibold">Updated Software</p>
                </Card>
              </div>
            </div>
             <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
               <Image
                 src="https://placehold.co/600x450.png"
                 alt="Students working in computer lab"
                 data-ai-hint="computer lab students"
                 fill
                 className="object-cover"
               />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
