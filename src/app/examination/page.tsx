import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const examSchedule = [
    { exam: 'Periodic Test 1', classes: 'I - XII', dates: 'July 15 - July 22, 2024' },
    { exam: 'Half-Yearly Examination', classes: 'I - XII', dates: 'September 20 - October 5, 2024' },
    { exam: 'Periodic Test 2', classes: 'I - XII', dates: 'December 2 - December 9, 2024' },
    { exam: 'Pre-Board Examination', classes: 'X & XII', dates: 'January 10 - January 25, 2025' },
    { exam: 'Annual Examination', classes: 'I - IX & XI', dates: 'February 20 - March 10, 2025' },
]

export default function ExaminationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Examinations</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Details about the assessment and examination schedule.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-4xl mx-auto">
             <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle>Examination Schedule 2024-2025</CardTitle>
                    <CardDescription>The schedule is subject to change. Please check for updates.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[40%]">Examination</TableHead>
                            <TableHead>Applicable Classes</TableHead>
                            <TableHead className="text-right">Dates</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {examSchedule.map((item) => (
                                <TableRow key={item.exam}>
                                    <TableCell className="font-medium">{item.exam}</TableCell>
                                    <TableCell>{item.classes}</TableCell>
                                    <TableCell className="text-right">{item.dates}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
             </Card>

             <div className="mt-12 space-y-6 text-muted-foreground">
                <h3 className="font-headline text-2xl font-bold text-primary">Assessment Policy</h3>
                <p>Our assessment policy is designed to be comprehensive, continuous, and stress-free. We follow a system of periodic tests and term examinations to evaluate student learning. The focus is not just on summative assessment but also on formative assessment, which includes class participation, projects, assignments, and practical work.</p>
                <p>Promotion to the next class is based on the student's overall performance throughout the academic year, as per the guidelines laid down by the CBSE.</p>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
