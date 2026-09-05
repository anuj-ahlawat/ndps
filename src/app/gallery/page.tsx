
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

const galleryImages = [
  { src: "/picture/gallery_1.jpeg", alt: "Students in a classroom", hint: "students classroom" },
  { src: "/picture/gallery_2.jpeg", alt: "School campus", hint: "school campus" },
  { src: "/picture/gallery_3.jpeg", alt: "Students playing sports", hint: "kids sports" },
  { src: "/picture/gallery_4.jpeg", alt: "Science lab", hint: "science lab" },
  { src: "/picture/gallery_5.jpeg", alt: "School library", hint: "school library" },
  { src: "/picture/gallery_6.jpeg", alt: "Art class", hint: "art class" },
  { src: "/picture/gallery_7.jpeg", alt: "Annual day function", hint: "school event stage" },
  { src: "/picture/gallery_2.jpeg", alt: "Computer lab", hint: "computer lab students" },
  { src: "/picture/gallery_1.jpeg", alt: "School playground", hint: "school playground" },
];

const janmashtamiImages = [
  {
    src: "/picture/janmashtami/janmashtami_1.jpeg",
    alt: "Janmashtami Celebration",
    hint: "Janmashtami celebration school",
  },
  {
    src: "/picture/janmashtami/janmashtami_2.jpeg",
    alt: "Janmashtami Celebration",
    hint: "Krishna Janmashtami",
  },
  {
    src: "/picture/janmashtami/janmashtami_3.jpeg",
    alt: "Janmashtami Celebration",
    hint: "Janmashtami school event",
  },
  {
    src: "/picture/janmashtami/janmashtami_4.jpeg",
    alt: "Janmashtami Celebration",
    hint: "Krishna celebration",
  },
  {
    src: "/picture/janmashtami/janmashtami_5.jpeg",
    alt: "Janmashtami Celebration",
    hint: "Janmashtami students",
  },
  {
    src: "/picture/janmashtami/janmashtami_6.jpeg",
    alt: "Janmashtami Celebration",
    hint: "Janmashtami event",
  },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">

        {/* Page Header */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">
              Campus Life Gallery
            </h1>

            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              A glimpse into the vibrant and enriching environment at NDPS.
            </p>
          </div>
        </section>

        {/* Campus Life Gallery */}
        <section className="py-16 md:py-24">
          <div className="container max-w-6xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8">
              Campus Life
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-start p-4">
                    <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Janmashtami Gallery */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container max-w-6xl mx-auto">

            <div className="text-center mb-10">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Janmashtami Celebration
              </h2>

              <p className="mt-3 text-muted-foreground text-lg">
                Glimpses from the Janmashtami celebration at NDPS.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {janmashtamiImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-start p-4">
                    <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {image.alt}
                    </p>
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
