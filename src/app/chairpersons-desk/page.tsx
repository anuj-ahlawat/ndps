import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function ChairpersonsDeskPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">From the Chairperson's Desk</h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
                <div className="relative aspect-square rounded-lg shadow-xl overflow-hidden">
                    <Image
                        src="https://placehold.co/400x400.png"
                        alt="Chairperson Mr. Rajesh Sharma"
                        data-ai-hint="man portrait corporate"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="text-center mt-4">
                    <h2 className="font-headline text-2xl font-bold text-primary">Mr. Rajesh Sharma</h2>
                    <p className="text-accent font-semibold">Chairperson</p>
                </div>
            </div>
            <div className="md:col-span-2 space-y-6 text-muted-foreground">
                <p className="text-lg">
                    It is with immense pride and pleasure that I welcome you to Sri Ram International School. Our journey began with a simple yet profound vision: to create a centre for learning where young minds are nurtured, challenged, and inspired to reach their fullest potential.
                </p>
                <p>
                    In today's rapidly changing world, education is not just about imparting knowledge but about equipping our children with the skills, values, and mindset to thrive as global citizens. At SRIS, we are committed to providing a holistic education that balances academic rigor with co-curricular excellence. We believe in fostering an environment where creativity, critical thinking, and a passion for lifelong learning are celebrated.
                </p>
                <p>
                    Our dedicated team of educators is the cornerstone of our institution. They are not just teachers but mentors who guide our students on their path of discovery. We continuously invest in their professional development to ensure that our teaching methodologies remain innovative and effective.
                </p>
                <p>
                    We also believe that education is a collaborative effort between the school, students, and parents. We encourage active parental involvement and value your partnership in our mission to provide the best possible learning experience for your child.
                </p>
                <p>
                    As we look to the future, we remain committed to our core values of excellence, integrity, and respect. We will continue to enhance our facilities, enrich our curriculum, and embrace new technologies to prepare our students for the challenges and opportunities that lie ahead.
                </p>
                <p>
                    Thank you for entrusting us with the future of your children. Together, let us empower them to become compassionate leaders and responsible citizens of tomorrow.
                </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
