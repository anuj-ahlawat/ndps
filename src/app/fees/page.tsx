import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const feeStructure = [
    { grade: 'Primary (Grades 1-5)', tuition: '₹1,50,000', annual: '₹25,000' },
    { grade: 'Middle School (Grades 6-8)', tuition: '₹1,80,000', annual: '₹30,000' },
    { grade: 'High School (Grades 9-10)', tuition: '₹2,00,000', annual: '₹35,000' },
    { grade: 'Senior Secondary (Grades 11-12)', tuition: '₹2,20,000', annual: '₹40,000' },
]

export default function FeesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Fee Structure</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Transparent and comprehensive fee details for the academic year 2024-2025.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-4xl mx-auto">
             <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle>Academic Year 2024-2025</CardTitle>
                    <CardDescription>All fees are quoted in Indian Rupees (INR) and are per annum.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[40%]">Grade Level</TableHead>
                            <TableHead>Tuition Fee</TableHead>
                            <TableHead>Annual Charges</TableHead>
                            <TableHead className="text-right">Total Fee</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {feeStructure.map((item) => {
                                const tuitionNum = parseInt(item.tuition.replace(/[^0-9]/g, ''));
                                const annualNum = parseInt(item.annual.replace(/[^0-9]/g, ''));
                                const total = (tuitionNum + annualNum).toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 });
                                return (
                                <TableRow key={item.grade}>
                                    <TableCell className="font-medium">{item.grade}</TableCell>
                                    <TableCell>{item.tuition}</TableCell>
                                    <TableCell>{item.annual}</TableCell>
                                    <TableCell className="text-right font-semibold">{total}</TableCell>
                                </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
             </Card>

             <div className="mt-12 grid md:grid-cols-2 gap-8">
                 <div>
                    <h3 className="font-headline text-2xl font-bold text-primary mb-4">What's Included</h3>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Academic tuition</li>
                        <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Library and lab fees</li>
                        <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Basic sports facilities</li>
                        <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Student wellness and counseling</li>
                    </ul>
                 </div>
                 <div>
                    <h3 className="font-headline text-2xl font-bold text-primary mb-4">Additional Costs</h3>
                    <ul className="space-y-2 text-muted-foreground">
                        <li>Uniforms and textbooks</li>
                        <li>Transportation (optional)</li>
                        <li>School lunches (optional)</li>
                        <li>Specialized extracurricular activities and trips</li>
                    </ul>
                 </div>
             </div>
                        
             
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
