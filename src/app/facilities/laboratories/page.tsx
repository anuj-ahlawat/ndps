import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FlaskConical, Dna, Atom } from "lucide-react";

export default function LaboratoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Laboratories</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Hands-on learning and scientific exploration.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto">
             <div className="text-center mb-12">
                 <h2 className="font-headline text-3xl font-bold text-primary mb-4">State-of-the-Art Science Labs</h2>
                 <p className="max-w-3xl mx-auto text-muted-foreground">
                    Our school is equipped with separate, fully-equipped laboratories for Physics, Chemistry, and Biology. These labs provide students with the opportunity to conduct experiments, and gain a deeper understanding of scientific principles through hands-on experience.
                 </p>
             </div>
            <div className="grid md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader>
                        <Image src="https://placehold.co/600x400.png" alt="Physics Lab" data-ai-hint="physics lab" width={600} height={400} className="rounded-t-lg" />
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                        <Atom className="h-10 w-10 mx-auto text-accent mb-2"/>
                        <h3 className="font-headline text-2xl font-bold">Physics Lab</h3>
                        <p className="text-muted-foreground mt-2">Equipped with modern apparatus for experiments in mechanics, optics, and electricity.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                         <Image src="https://placehold.co/600x400.png" alt="Chemistry Lab" data-ai-hint="chemistry lab" width={600} height={400} className="rounded-t-lg" />
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                        <FlaskConical className="h-10 w-10 mx-auto text-accent mb-2"/>
                        <h3 className="font-headline text-2xl font-bold">Chemistry Lab</h3>
                         <p className="text-muted-foreground mt-2">A wide range of chemicals and equipment for practicals in organic and inorganic chemistry.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                         <Image src="https://placehold.co/600x400.png" alt="Biology Lab" data-ai-hint="biology lab" width={600} height={400} className="rounded-t-lg" />
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                        <Dna className="h-10 w-10 mx-auto text-accent mb-2"/>
                        <h3 className="font-headline text-2xl font-bold">Biology Lab</h3>
                         <p className="text-muted-foreground mt-2">Features microscopes, specimens, and models to study the fascinating world of living organisms.</p>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
