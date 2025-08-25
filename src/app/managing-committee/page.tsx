import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const committeeMembers = [
  { name: 'Mr. Rajesh Sharma', role: 'Chairman', image: 'https://placehold.co/400x400.png', hint: 'man portrait corporate' },
  { name: 'Mrs. Sunita Singh', role: 'Secretary', image: 'https://placehold.co/400x400.png', hint: 'woman portrait corporate' },
  { name: 'Mr. Vikram Gupta', role: 'Treasurer', image: 'https://placehold.co/400x400.png', hint: 'professional man' },
  { name: 'Dr. Evelyn Reed', role: 'Principal (Ex-officio)', image: 'https://placehold.co/400x400.png', hint: 'woman portrait professional' },
  { name: 'Mr. Samuel Chen', role: 'Vice Principal (Member)', image: 'https://placehold.co/400x400.png', hint: 'man portrait professional' },
  { name: 'Ms. Anita Desai', role: 'Parent Representative', image: 'https://placehold.co/400x400.png', hint: 'indian woman portrait' },
  { name: 'Mr. Prakash Verma', role: 'Parent Representative', image: 'https://placehold.co/400x400.png', hint: 'indian man portrait' },
  { name: 'Mrs. Kavita Joshi', role: 'Teacher Representative', image: 'https://placehold.co/400x400.png', hint: 'teacher woman' },
];

export default function ManagingCommitteePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Managing Committee</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Guiding the vision and future of Sri Ram International School.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto">
             <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="font-headline text-3xl font-bold text-primary mb-4">Our Esteemed Members</h2>
                <p className="text-muted-foreground">
                    The Managing Committee of Sri Ram International School comprises experienced educationists, administrators, and community leaders dedicated to upholding the school's mission and ensuring its continuous growth and excellence. The committee provides strategic direction, oversees financial management, and ensures that the school adheres to the highest standards of educational quality and ethical conduct.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {committeeMembers.map((member) => (
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
