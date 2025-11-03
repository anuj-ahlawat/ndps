import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Building } from "lucide-react";
import Image from "next/image";

export default function RecognitionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Recognition & Affiliation</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Committed to the highest standards of education.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
               <Image
                 src="https://placehold.co/600x450.png"
                 alt="CBSE Logo"
                 data-ai-hint="certificate document"
                 fill
                 className="object-contain p-8"
               />
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-headline text-2xl md:text-3xl text-primary">
                    <Building className="h-8 w-8" />
                    CBSE Affiliation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    New Delhi Public School is proudly affiliated with the Central Board of Secondary Education (CBSE), which is a national level board of education in India for public and private schools, controlled and managed by the Government of India.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">Affiliation No: <span className="font-mono text-accent">1030601</span></p>
                    <p className="font-semibold">School Code: <span className="font-mono text-accent">50570</span></p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                 <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl md:text-3xl text-primary">
                        <BadgeCheck className="h-8 w-8" />
                        Directorate of Education
                    </CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-muted-foreground">
                        The school is also recognized by the Directorate of Education, Govt. of NCT of Delhi.
                    </p>
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
