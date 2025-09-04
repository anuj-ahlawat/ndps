import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { Book, Computer, Microscope, Palette, Dumbbell } from "lucide-react";
import Image from "next/image";

const facilities = [
  {
    title: "State-of-the-Art Science Labs",
    description: "Fully equipped physics, chemistry, and biology labs to foster hands-on learning and experimentation.",
    icon: <Microscope className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/800x600.png",
    hint: "science lab modern",
  },
  {
    title: "Expansive Library",
    description: "A quiet and resourceful space with a vast collection of books, journals, and digital resources to support research and reading.",
    icon: <Book className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/800x600.png",
    hint: "school library large",
  },
  {
    title: "Modern Computer Labs",
    description: "High-speed internet and the latest software to provide students with the necessary digital literacy skills.",
    icon: <Computer className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/800x600.png",
    hint: "computer lab school",
  },
  {
    title: "Art & Music Studios",
    description: "Dedicated spaces for students to explore their creativity in visual arts, music, and performing arts.",
    icon: <Palette className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/800x600.png",
    hint: "art studio school",
  },
  {
    title: "Comprehensive Sports Complex",
    description: "Includes a full-sized football field, basketball courts, a swimming pool, and a gymnasium to promote physical fitness.",
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    image: "https://placehold.co/800x600.png",
    hint: "school sports complex",
  },
];

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Our Facilities</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Providing a world-class environment for learning and growth.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto space-y-20">
            {facilities.map((facility, index) => (
              <div key={facility.title} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                 <div className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <Image
                        src={facility.image}
                        alt={facility.title}
                        data-ai-hint={facility.hint}
                        fill
                        className="object-cover"
                    />
                 </div>
                <div className={`text-center md:text-left ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                  <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                    {facility.icon}
                  </div>
                  <h2 className="font-headline text-3xl font-bold text-primary mb-4">{facility.title}</h2>
                  <p className="text-muted-foreground text-lg">{facility.description}</p>
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
