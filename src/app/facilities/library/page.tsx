import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Globe } from "lucide-react";

export default function LibraryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Library</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              A gateway to knowledge and imagination.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
             <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
               <Image
                 src="https://placehold.co/600x450.png"
                 alt="Spacious school library"
                 data-ai-hint="school library spacious"
                 fill
                 className="object-cover"
               />
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our Knowledge Hub</h2>
              <p className="mb-6 text-muted-foreground">
                The school library is a vibrant and welcoming space designed to foster a love for reading and support the academic and research needs of our students and faculty. It is a cornerstone of our commitment to creating lifelong learners.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-card">
            <div className="container max-w-5xl mx-auto text-center">
                <h2 className="font-headline text-3xl font-bold text-primary mb-12">Collection & Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="p-6">
                        <BookOpen className="h-10 w-10 text-accent mx-auto mb-4"/>
                        <h3 className="font-headline text-xl font-bold">Vast Collection</h3>
                        <p className="text-muted-foreground mt-2">Over 10,000 books covering fiction, non-fiction, reference materials, and more.</p>
                    </Card>
                     <Card className="p-6">
                        <Users className="h-10 w-10 text-accent mx-auto mb-4"/>
                        <h3 className="font-headline text-xl font-bold">Reading Areas</h3>
                        <p className="text-muted-foreground mt-2">Comfortable and quiet reading zones for individual and group study.</p>
                    </Card>
                     <Card className="p-6">
                        <Globe className="h-10 w-10 text-accent mx-auto mb-4"/>
                        <h3 className="font-headline text-xl font-bold">Digital Resources</h3>
                        <p className="text-muted-foreground mt-2">Access to e-books, online journals, and educational databases.</p>
                    </Card>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
