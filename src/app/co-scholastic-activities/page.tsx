import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { Palette, Music, Dumbbell, BrainCircuit } from "lucide-react";
import Image from "next/image";

const activities = [
  {
    title: "Art & Craft",
    description: "Students explore various mediums to express their creativity, from painting and sketching to pottery and sculpture.",
    icon: <Palette className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/800x600.png",
    hint: "art class students",
  },
  {
    title: "Music & Dance",
    description: "We offer training in both vocal and instrumental music, as well as various forms of classical and contemporary dance.",
    icon: <Music className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/800x600.png",
    hint: "school music class",
  },
  {
    title: "Sports & Yoga",
    description: "A wide range of sports facilities and coaching to promote physical fitness, teamwork, and a healthy lifestyle.",
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/800x600.png",
    hint: "kids yoga class",
  },
  {
    title: "Clubs & Societies",
    description: "From Debate and MUN to Science and Robotics clubs, students can pursue their interests and develop leadership skills.",
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/800x600.png",
    hint: "students debate club",
  },
];

export default function CoScholasticActivitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Co-Scholastic Activities</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Fostering holistic development beyond the classroom.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto space-y-20">
            {activities.map((activity, index) => (
              <div key={activity.title} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                 <div className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <Image
                        src={activity.image}
                        alt={activity.title}
                        data-ai-hint={activity.hint}
                        fill
                        className="object-cover"
                    />
                 </div>
                <div className={`text-center md:text-left ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                  <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                    {activity.icon}
                  </div>
                  <h2 className="font-headline text-3xl font-bold text-primary mb-4">{activity.title}</h2>
                  <p className="text-muted-foreground text-lg">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
