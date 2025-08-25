import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const facultyMembers = [
  { name: 'Dr. Evelyn Reed', role: 'Principal, Ph.D. in Education', image: 'https://placehold.co/400x400.png', hint: 'woman portrait professional' },
  { name: 'Mr. Samuel Chen', role: 'Vice Principal, M.Sc. in Physics', image: 'https://placehold.co/400x400.png', hint: 'man portrait professional' },
  { name: 'Ms. Aisha Khan', role: 'Head of Academics, M.A. in English Literature', image: 'https://placehold.co/400x400.png', hint: 'woman teacher' },
  { name: 'Mr. Rohan Sharma', role: 'Mathematics Department Head', image: 'https://placehold.co/400x400.png', hint: 'male teacher' },
  { name: 'Dr. Priya Verma', role: 'Science Department Head', image: 'https://placehold.co/400x400.png', hint: 'indian woman' },
  { name: 'Mr. Arjun Das', role: 'Head Coach, Sports', image: 'https://placehold.co/400x400.png', hint: 'sports coach' },
  { name: 'Ms. Clara Pinto', role: 'Arts Department Head', image: 'https://placehold.co/400x400.png', hint: 'artist portrait' },
  { name: 'Mr. Kenji Tanaka', role: 'Music Director', image: 'https://placehold.co/400x400.png', hint: 'musician portrait' },
];

export default function FacultyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Our Faculty</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Meet the dedicated and experienced educators who inspire our students.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {facultyMembers.map((member) => (
                <Card key={member.name} className="text-center p-0 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="relative aspect-square">
                    <Image src={member.image} alt={member.name} data-ai-hint={member.hint} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                    <p className="text-accent font-semibold text-sm">{member.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
