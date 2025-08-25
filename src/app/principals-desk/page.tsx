import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function PrincipalsDeskPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">From the Principal's Desk</h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
                <div className="relative aspect-square rounded-lg shadow-xl overflow-hidden">
                    <Image
                        src="https://placehold.co/400x400.png"
                        alt="Principal Dr. Evelyn Reed"
                        data-ai-hint="woman portrait professional"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="text-center mt-4">
                    <h2 className="font-headline text-2xl font-bold text-primary">Dr. Evelyn Reed</h2>
                    <p className="text-accent font-semibold">Principal</p>
                </div>
            </div>
            <div className="md:col-span-2 space-y-6 text-muted-foreground">
                <p className="text-lg">
                    Welcome to Sri Ram International School! As the Principal, I am honored to lead this vibrant community of learners, educators, and parents. Our school is a place where every child is valued, and their unique talents are nurtured in a supportive and stimulating environment.
                </p>
                <p>
                    Our academic philosophy is centered on student-centric learning. We strive to make education a joyful and engaging experience, where students are active participants in their own learning journey. We employ a blend of traditional and modern teaching techniques, including project-based learning, inquiry-based instruction, and technology integration, to cater to diverse learning styles.
                </p>
                <p>
                    Beyond academics, we place a strong emphasis on character development. Our comprehensive co-curricular program, which includes sports, arts, music, and community service, provides ample opportunities for students to develop leadership skills, teamwork, and a sense of social responsibility. We believe in educating the whole child – academically, socially, and emotionally.
                </p>
                <p>
                    The safety and well-being of our students are our utmost priorities. We have a robust framework in place to ensure a secure and welcoming campus for everyone. Our dedicated team of counselors and support staff are always available to assist students with their academic and personal challenges.
                </p>
                <p>
                    I am incredibly proud of our students' achievements, both in and out of the classroom, and the unwavering commitment of our staff. I invite you to explore our website to learn more about our programs and the wonderful opportunities available at SRIS.
                </p>
                <p>
                    We look forward to partnering with you in your child's educational journey.
                </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
