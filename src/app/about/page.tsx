import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Users, User, Ratio } from "lucide-react";

const teamMembers = [
  { name: 'Dr. Evelyn Reed', role: 'Principal', image: 'https://placehold.co/400x400.png', hint: 'woman portrait' },
  { name: 'Mr. Samuel Chen', role: 'Vice Principal', image: 'https://placehold.co/400x400.png', hint: 'man portrait' },
  { name: 'Ms. Aisha Khan', role: 'Head of Academics', image: 'https://placehold.co/400x400.png', hint: 'woman portrait professional' },
];

const stats = [
  { value: '1200+', label: 'Students Enrolled', icon: <Users className="h-8 w-8 text-primary" /> },
  { value: '75+', label: 'Dedicated Teachers', icon: <User className="h-8 w-8 text-primary" /> },
  { value: '16:1', label: 'Student-Teacher Ratio', icon: <Ratio className="h-8 w-8 text-primary" /> },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">About NDPS</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              A tradition of excellence, a future of innovation.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our History & Mission</h2>
              <p className="mb-4 text-muted-foreground">
                Founded on the principles of academic excellence and holistic development, New Delhi Public School has been a beacon of quality education for over two decades. Our mission is to empower students to achieve their full potential and become responsible global citizens.
              </p>
              <p className="text-muted-foreground">
                We believe in a balanced approach to education, combining rigorous academic programs with a rich tapestry of extracurricular activities. Our values of integrity, respect, and resilience are woven into every aspect of school life.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
               <Image
                 src="https://placehold.co/600x450.png"
                 alt="School building front"
                 data-ai-hint="school building front"
                 fill
                 className="object-cover"
               />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <Card key={stat.label} className="p-6 shadow-lg">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-muted-foreground mt-1">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our Philosophy</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground">
                We are committed to creating a learning environment that is safe, supportive, and intellectually stimulating. We encourage students to explore their passions, take risks, and learn from their experiences. Our goal is to cultivate not just scholars, but well-rounded individuals who are prepared to make a positive impact on the world.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-12">Meet Our Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image src={member.image} alt={member.name} data-ai-hint={member.hint} fill className="object-cover" />
                  </div>
                  <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                  <p className="text-accent font-semibold">{member.role}</p>
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
