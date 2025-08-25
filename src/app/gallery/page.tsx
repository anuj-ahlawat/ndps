import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Students in a classroom", hint: "students classroom" },
  { src: "https://placehold.co/600x400.png", alt: "School campus", hint: "school campus" },
  { src: "https://placehold.co/600x400.png", alt: "Students playing sports", hint: "kids sports" },
  { src: "https://placehold.co/600x400.png", alt: "Science lab", hint: "science lab" },
  { src: "https://placehold.co/600x400.png", alt: "School library", hint: "school library" },
  { src: "https://placehold.co/600x400.png", alt: "Art class", hint: "art class" },
  { src: "https://placehold.co/600x400.png", alt: "Annual day function", hint: "school event stage" },
  { src: "https://placehold.co/600x400.png", alt: "Computer lab", hint: "computer lab students" },
  { src: "https://placehold.co/600x400.png", alt: "School playground", hint: "school playground" },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Campus Life Gallery</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              A glimpse into the vibrant and enriching environment at NDPS.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-start p-4">
                     <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{image.alt}</p>
                   </div>
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
