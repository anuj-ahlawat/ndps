import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Shield, BookUser } from "lucide-react";

const rules = [
  {
    category: "General Conduct",
    icon: <Scale className="h-8 w-8 text-primary" />,
    points: [
      "Students must be punctual and regular in attendance.",
      "Respect for teachers, staff, and fellow students is mandatory.",
      "School property must be handled with care. Any damage will be charged to the student responsible.",
      "English is the medium of instruction and communication on the school campus.",
      "Bringing mobile phones, smart watches, or any other electronic gadgets is strictly prohibited."
    ]
  },
  {
    category: "Discipline",
    icon: <Shield className="h-8 w-8 text-primary" />,
    points: [
      "Students must adhere to the prescribed school uniform and maintain a neat appearance.",
      "Bullying, fighting, or any form of misconduct will result in strict disciplinary action.",
      "Leaving the school premises during school hours without permission is not allowed.",
      "Irregular attendance, unjustified leave, or habitual late-coming are serious breaches of discipline."
    ]
  },
  {
    category: "For Parents",
    icon: <BookUser className="h-8 w-8 text-primary" />,
    points: [
      "Parents are requested to check the school diary daily for any notes or circulars.",
      "Kindly ensure your child comes to school in the proper uniform and is equipped with all necessary materials.",
      "Parents are not permitted to meet teachers during class hours. Please use the Parent-Teacher Meetings for interaction.",
      "Any change in address or contact number must be promptly reported to the school office."
    ]
  }
]

export default function RulesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Rules & Regulations</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Discipline and conduct for a conducive learning environment.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto space-y-12">
            {rules.map((ruleCategory) => (
              <Card key={ruleCategory.category} className="shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  {ruleCategory.icon}
                  <CardTitle className="font-headline text-2xl md:text-3xl text-primary">{ruleCategory.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                    {ruleCategory.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
