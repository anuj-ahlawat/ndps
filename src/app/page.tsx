import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, FlaskConical, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/chat-bot";
import Link from "next/link";

const academicPrograms = [
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "Primary School",
    description: "Nurturing young minds with a foundation of curiosity and creativity.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Middle School",
    description: "Developing critical thinking and collaborative skills for future challenges.",
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
    title: "High School",
    description: "Preparing students for university and beyond with a rigorous, comprehensive curriculum.",
  },
];

const newsItems = [
  {
    image: "https://placehold.co/600x400.png",
    hint: "science fair",
    category: "Academics",
    title: "Annual Science Fair Winners Announced",
    date: "October 26, 2023",
  },
  {
    image: "https://placehold.co/600x400.png",
    hint: "sports day",
    category: "Sports",
    title: "NDPS Dominates at Inter-School Athletics Meet",
    date: "October 22, 2023",
  },
  {
    image: "https://placehold.co/600x400.png",
    hint: "school festival",
    category: "Events",
    title: "Cultural Fest 'AURA 2023' a Grand Success",
    date: "October 18, 2023",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="/images/school_main.jpg"
            alt="New Delhi Public School Campus"
            data-ai-hint="school building"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 container max-w-4xl px-4">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
              Welcome to New Delhi Public School
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
              A community dedicated to fostering intellectual curiosity, critical thinking, and a passion for lifelong learning.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/admissions">Enroll Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-black border-white hover:bg-white hover:text-primary">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section id="about" className="py-16 md:py-24 bg-card">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">A Legacy of Excellence</h2>
              <p className="mb-4 text-muted-foreground">
                Founded on the principles of academic excellence and holistic development, New Delhi Public School has been a beacon of quality education for over two decades. Our mission is to empower students to achieve their full potential and become responsible global citizens.
              </p>
               <Button asChild variant="link" className="px-0 text-primary hover:text-accent">
                 <Link href="/about">
                   Discover Our Story <ArrowRight className="ml-2 h-4 w-4" />
                 </Link>
               </Button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
               <Image
                 src="https://placehold.co/600x450.png"
                 alt="Students collaborating"
                 data-ai-hint="students collaboration"
                 fill
                 className="object-cover"
               />
            </div>
          </div>
        </section>

        {/* Academics Preview Section */}
        <section id="academics" className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">Academic Programs</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
              Our curriculum is designed to challenge students and inspire a love for learning at every stage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {academicPrograms.map((program) => (
                <Card key={program.title} className="text-center p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="items-center">
                    <div className="p-4 bg-secondary rounded-full mb-4">
                      {program.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
             <Button asChild className="mt-12">
               <Link href="/academics">
                 Explore All Programs <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
          </div>
        </section>
        
        {/* News Preview Section */}
        <section id="news" className="py-16 md:py-24 bg-card">
          <div className="container max-w-6xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary text-center mb-12">Latest News & Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <Card key={item.title} className="overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      data-ai-hint={item.hint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-accent font-semibold mb-2">{item.category}</p>
                    <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button asChild>
                    <Link href="/news">
                        View All News <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
}
