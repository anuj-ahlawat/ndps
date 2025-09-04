import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Wifi, Droplets, Bus, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

const infraDetails = [
  { label: "Total Campus Area", value: "5 Acres", icon: <Building className="w-6 h-6 text-primary" /> },
  { label: "Wi-Fi Enabled Campus", value: "Yes", icon: <Wifi className="w-6 h-6 text-primary" /> },
  { label: "Classrooms", value: "60 (Smart Classes)", icon: <Users className="w-6 h-6 text-primary" /> },
  { label: "Transport Facility", value: "Available (GPS Enabled)", icon: <Bus className="w-6 h-6 text-primary" /> },
  { label: "RO Purified Water", value: "Yes", icon: <Droplets className="w-6 h-6 text-primary" /> },
  { label: "CCTV Surveillance", value: "24/7", icon: <ShieldCheck className="w-6 h-6 text-primary" /> },
];

export default function InfrastructurePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Infrastructure</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              A state-of-the-art campus built for 21st-century learning.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
               <Image
                 src="https://placehold.co/600x450.png"
                 alt="School Campus Aerial View"
                 data-ai-hint="school campus aerial"
                 fill
                 className="object-cover"
               />
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our Campus</h2>
              <p className="mb-6 text-muted-foreground">
                New Delhi Public School boasts a sprawling, eco-friendly campus designed to provide a conducive environment for learning and growth. Our infrastructure is meticulously planned to support a wide range of academic and co-curricular activities, ensuring that students have access to the best facilities.
              </p>
              <Card>
                <CardHeader>
                    <CardTitle>Infrastructure Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        {infraDetails.map(item => (
                             <div key={item.label} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50">
                                {item.icon}
                                <div>
                                <p className="font-semibold">{item.label}</p>
                                <p className="text-muted-foreground">{item.value}</p>
                                </div>
                             </div>
                        ))}
                    </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-card">
            <div className="container max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Key Facilities</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground mt-2">Explore the facilities that make our campus a hub of activity and learning.</p>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <Card className="p-6 text-center">
                         <h3 className="font-headline text-xl font-bold text-primary mb-2">Spacious Classrooms</h3>
                         <p className="text-muted-foreground">Well-ventilated and equipped with smart boards and comfortable furniture to enhance the learning experience.</p>
                     </Card>
                     <Card className="p-6 text-center">
                         <h3 className="font-headline text-xl font-bold text-primary mb-2">Library & Media Center</h3>
                         <p className="text-muted-foreground">A vast repository of books, journals, and digital resources to foster a love for reading and research.</p>
                     </Card>
                      <Card className="p-6 text-center">
                         <h3 className="font-headline text-xl font-bold text-primary mb-2">Science & Computer Labs</h3>
                         <p className="text-muted-foreground">Modern, fully-equipped labs for practical learning in physics, chemistry, biology, and computer science.</p>
                     </Card>
                      <Card className="p-6 text-center">
                         <h3 className="font-headline text-xl font-bold text-primary mb-2">Auditorium</h3>
                         <p className="text-muted-foreground">A large, multi-purpose auditorium for hosting events, assemblies, and performances.</p>
                     </Card>
                      <Card className="p-6 text-center">
                         <h3 className="font-headline text-xl font-bold text-primary mb-2">Sports Complex</h3>
                         <p className="text-muted-foreground">Extensive grounds for various sports, including a football field, basketball court, and athletic tracks.</p>
                     </Card>
                      <Card className="p-6 text-center">
                         <h3 className="font-headline text-xl font-bold text-primary mb-2">Health & Wellness Room</h3>
                         <p className="text-muted-foreground">A well-equipped infirmary with a qualified nurse to attend to students&apos; medical needs.</p>
                     </Card>
                 </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
