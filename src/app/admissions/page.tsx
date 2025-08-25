import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, UserCheck, MessageSquare, Calendar } from "lucide-react";

const admissionProcess = [
  {
    step: 1,
    title: "Online Application",
    description: "Submit the online application form with all the required documents and pay the non-refundable application fee.",
    icon: <FileText className="h-8 w-8 text-primary" />,
  },
  {
    step: 2,
    title: "Interaction & Assessment",
    description: "Shortlisted candidates will be invited for an interaction session (for primary grades) or an entrance assessment (for middle and high school).",
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
  },
  {
    step: 3,
    title: "Offer of Admission",
    description: "Successful candidates will receive an offer of admission via email. The offer will include the deadline for fee payment.",
    icon: <UserCheck className="h-8 w-8 text-primary" />,
  },
  {
    step: 4,
    title: "Confirmation",
    description: "Confirm your child's place by paying the admission fee and submitting the final documents within the specified timeline.",
    icon: <Calendar className="h-8 w-8 text-primary" />,
  },
];

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Admissions</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Join the NDPS family. Begin your journey with us.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary text-center mb-12">Admission Process</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
              <div className="space-y-16">
                {admissionProcess.map((item, index) => (
                  <div key={item.step} className="flex flex-col md:flex-row items-center gap-8">
                     <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <Card className={`w-full md:w-4/5 ml-auto mr-auto ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}>
                           <CardHeader>
                             <CardTitle className="font-headline">{item.title}</CardTitle>
                           </CardHeader>
                           <CardContent>
                             <p className="text-muted-foreground">{item.description}</p>
                           </CardContent>
                        </Card>
                     </div>
                     <div className="relative">
                        <div className="bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center z-10 relative border-4 border-background">
                            <span className="text-2xl font-bold">{item.step}</span>
                        </div>
                     </div>
                      <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-card">
          <div className="container max-w-4xl mx-auto text-center">
             <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Ready to Apply?</h2>
             <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
                Admissions for the academic year 2024-2025 are now open. We look forward to receiving your application and welcoming you to our community.
             </p>
             <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Apply Now</Button>
                <Button size="lg" variant="outline">Download Brochure</Button>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
