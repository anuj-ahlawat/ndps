import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, FlaskConical, Microscope, Paintbrush, Music } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "Primary School (Grades 1-5)",
    description: "Our primary program focuses on building a strong foundation in literacy, numeracy, and scientific inquiry. We foster a love for learning through play-based activities, project-based learning, and a nurturing environment that encourages curiosity.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Middle School (Grades 6-8)",
    description: "In middle school, students transition to a more subject-specific curriculum. We emphasize critical thinking, problem-solving, and collaboration. Students are encouraged to explore their interests through a variety of elective courses and extracurricular activities.",
  },
  {
    icon: <FlaskConical className="h-10 w-10 text-primary" />,
    title: "High School (Grades 9-12)",
    description: "Our high school program prepares students for university and future careers. We offer a rigorous and comprehensive curriculum with multiple streams (Science, Commerce, Arts) and advanced placement options. We provide extensive college counseling and career guidance.",
  },
];

const departments = [
  { name: 'Science & Technology', icon: <Microscope className="h-8 w-8 text-primary" /> },
  { name: 'Humanities & Social Sciences', icon: <BookOpen className="h-8 w-8 text-primary" /> },
  { name: 'Fine Arts', icon: <Paintbrush className="h-8 w-8 text-primary" /> },
  { name: 'Performing Arts', icon: <Music className="h-8 w-8 text-primary" /> },
];

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Academics</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Shaping the minds of tomorrow through a comprehensive and challenging curriculum.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Our Educational Approach</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
                At NDPS, we believe that education is a journey of discovery. Our curriculum is thoughtfully designed to be engaging, relevant, and challenging. We blend traditional teaching methods with modern pedagogical approaches to cater to diverse learning styles and prepare students for the complexities of the 21st century.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program) => (
                <Card key={program.title} className="flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="items-center text-center">
                    <div className="p-4 bg-secondary rounded-full mb-4">
                      {program.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-center">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
               <Image
                 src="https://placehold.co/600x450.png"
                 alt="Library with students"
                 data-ai-hint="school library students"
                 fill
                 className="object-cover"
               />
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Departments</h2>
              <p className="mb-6 text-muted-foreground">
                Our academic departments are home to dedicated and passionate educators who are experts in their fields.
              </p>
              <div className="space-y-4">
                {departments.map((dept) => (
                  <div key={dept.name} className="flex items-center gap-4 p-4 rounded-lg bg-background">
                    {dept.icon}
                    <span className="font-semibold text-lg">{dept.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
