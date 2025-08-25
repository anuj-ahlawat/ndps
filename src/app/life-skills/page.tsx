import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, HandHeart, MessageCircle } from "lucide-react";
import Image from "next/image";

const lifeSkills = [
  {
    title: "Critical Thinking & Problem Solving",
    description: "We encourage students to analyze information, think critically, and develop innovative solutions to complex problems.",
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
  },
  {
    title: "Collaboration & Teamwork",
    description: "Through group projects and activities, students learn to work effectively with others, respecting diverse perspectives.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
  {
    title: "Communication & Interpersonal Skills",
    description: "Developing articulate and confident communicators who can express their ideas clearly and listen empathetically.",
    icon: <MessageCircle className="h-10 w-10 text-primary" />,
  },
  {
    title: "Emotional Intelligence & Empathy",
    description: "We foster self-awareness, self-regulation, and empathy, helping students build strong and healthy relationships.",
    icon: <HandHeart className="h-10 w-10 text-primary" />,
  },
];

export default function LifeSkillsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Life Skills Education</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Equipping students with essential skills for success in life.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto">
             <div className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our Approach to Holistic Development</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
                At NDPS, we believe that education extends beyond textbooks. Our Life Skills program is integrated into the curriculum to equip students with the necessary social, emotional, and thinking skills to navigate the challenges of the modern world successfully and responsibly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lifeSkills.map((skill) => (
                <Card key={skill.title} className="flex items-start p-6 gap-6 shadow-lg hover:shadow-xl transition-shadow">
                   <div className="p-3 bg-secondary rounded-full">
                      {skill.icon}
                    </div>
                  <div>
                    <CardTitle className="font-headline text-xl mb-2">{skill.title}</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground">{skill.description}</p>
                    </CardContent>
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
