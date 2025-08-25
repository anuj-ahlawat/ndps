import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const newsItems = [
  {
    image: "https://placehold.co/600x400.png",
    hint: "science fair",
    category: "Academics",
    title: "Annual Science Fair Winners Announced",
    date: "October 26, 2023",
    excerpt: "The brightest young minds of NDPS showcased their innovative projects at the Annual Science Fair. The event was a massive success, with projects ranging from renewable energy solutions to AI-powered robots..."
  },
  {
    image: "https://placehold.co/600x400.png",
    hint: "sports day",
    category: "Sports",
    title: "NDPS Dominates at Inter-School Athletics Meet",
    date: "October 22, 2023",
    excerpt: "Our school's athletes brought home a haul of medals from the Inter-School Athletics Meet, showcasing exceptional talent and sportsmanship. The school secured the overall championship trophy..."
  },
  {
    image: "https://placehold.co/600x400.png",
    hint: "school festival",
    category: "Events",
    title: "Cultural Fest 'AURA 2023' a Grand Success",
    date: "October 18, 2023",
    excerpt: "AURA 2023, our annual cultural festival, was a spectacular display of talent, color, and creativity. Students from all grades participated in various events including dance, music, drama, and art..."
  },
   {
    image: "https://placehold.co/600x400.png",
    hint: "coding competition",
    category: "Academics",
    title: "Students Win National Coding Olympiad",
    date: "October 15, 2023",
    excerpt: "A team of our high school students has secured the first position in the National Coding Olympiad, competing against over 500 schools from across the country. Their winning project focused on..."
  },
  {
    image: "https://placehold.co/600x400.png",
    hint: "community service",
    category: "Community",
    title: "NDPS organizes successful Plantation Drive",
    date: "October 10, 2023",
    excerpt: "As part of our commitment to environmental stewardship, NDPS organized a large-scale plantation drive in the local community. Over 1000 saplings were planted by students and staff..."
  },
   {
    image: "https://placehold.co/600x400.png",
    hint: "art exhibition",
    category: "Events",
    title: "Annual Art Exhibition 'Kaleidoscope' Opens",
    date: "October 05, 2023",
    excerpt: "The school's art gallery is now open for the annual exhibition, Kaleidoscope. The exhibition features a stunning collection of artworks by our talented students, from paintings and sculptures to digital art..."
  },
];

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">News & Events</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Stay updated with the latest happenings at New Delhi Public School.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto">
            <div className="flex justify-end mb-8">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="academics">Academics</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="events">Events</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <Card key={item.title} className="overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
                  <div className="relative h-56">
                    <Image
                      src={item.image}
                      alt={item.title}
                      data-ai-hint={item.hint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <p className="text-sm text-accent font-semibold mb-2">{item.category}</p>
                    <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors flex-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.excerpt}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                       <Button variant="link" size="sm" className="px-0">Read More</Button>
                    </div>
                  </CardContent>
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
