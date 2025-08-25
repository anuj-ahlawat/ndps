import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tv, Wind, Projector } from "lucide-react";

export default function SmartClassesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Smart Classes</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Interactive and engaging learning environments.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
               <Image
                 src="https://placehold.co/600x450.png"
                 alt="Smart classroom with interactive board"
                 data-ai-hint="smart classroom interactive"
                 fill
                 className="object-cover"
               />
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Technology-Enhanced Learning</h2>
              <p className="mb-6 text-muted-foreground">
                Our smart classrooms are equipped with the latest audio-visual technology to make learning more interactive, engaging, and effective. We believe in leveraging technology to supplement traditional teaching methods and provide a richer educational experience for our students.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="text-center p-4">
                    <Tv className="h-8 w-8 mx-auto text-accent mb-2"/>
                    <p className="font-semibold">Interactive Panels</p>
                </Card>
                 <Card className="text-center p-4">
                    <Projector className="h-8 w-8 mx-auto text-accent mb-2"/>
                    <p className="font-semibold">Projectors</p>
                </Card>
                 <Card className="text-center p-4">
                    <Wind className="h-8 w-8 mx-auto text-accent mb-2"/>
                    <p className="font-semibold">Air Conditioned</p>
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
