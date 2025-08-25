import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Rocket, Zap, ShieldCheck, Handshake, Globe } from "lucide-react";
import Image from "next/image";

const values = [
    { icon: <Zap className="h-8 w-8 text-primary"/>, title: "Excellence", description: "Striving for the highest standards in all endeavors." },
    { icon: <ShieldCheck className="h-8 w-8 text-primary"/>, title: "Integrity", description: "Upholding honesty, ethics, and moral principles." },
    { icon: <Handshake className="h-8 w-8 text-primary"/>, title: "Respect", description: "Fostering a culture of mutual respect and inclusivity." },
    { icon: <Globe className="h-8 w-8 text-primary"/>, title: "Global Citizenship", description: "Nurturing responsible and compassionate global citizens." },
]

export default function VisionMissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Our Vision & Mission</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Our guiding principles for shaping the future.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Card className="shadow-2xl">
                <CardHeader className="flex-row items-center gap-4">
                  <Eye className="h-12 w-12 text-accent" />
                  <CardTitle className="font-headline text-3xl md:text-4xl text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    To be a leading educational institution that empowers every student to become a critical thinker, a lifelong learner, and a compassionate leader in a global community.
                  </p>
                </CardContent>
              </Card>
            </div>
             <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
               <Image
                 src="https://placehold.co/600x450.png"
                 alt="Students looking towards the future"
                 data-ai-hint="students future"
                 fill
                 className="object-cover"
               />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
             <div className="relative h-80 rounded-lg overflow-hidden shadow-xl order-last md:order-first">
               <Image
                 src="https://placehold.co/600x450.png"
                 alt="Students working on a project"
                 data-ai-hint="students project"
                 fill
                 className="object-cover"
               />
            </div>
            <div>
              <Card className="shadow-2xl">
                <CardHeader className="flex-row items-center gap-4">
                  <Rocket className="h-12 w-12 text-accent" />
                  <CardTitle className="font-headline text-3xl md:text-4xl text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                    <li>To provide a safe, inclusive, and intellectually stimulating learning environment.</li>
                    <li>To deliver a comprehensive and balanced curriculum that fosters academic excellence and holistic development.</li>
                    <li>To cultivate essential life skills, including creativity, collaboration, and resilience.</li>
                    <li>To instill core values of integrity, respect, and social responsibility.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="container max-w-5xl mx-auto text-center">
                 <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-12">Our Core Values</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                     {values.map(value => (
                         <div key={value.title} className="flex flex-col items-center">
                            <div className="p-4 bg-secondary rounded-full mb-4">
                                {value.icon}
                            </div>
                            <h3 className="font-headline text-xl font-bold mb-2">{value.title}</h3>
                            <p className="text-muted-foreground">{value.description}</p>
                         </div>
                     ))}
                 </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
