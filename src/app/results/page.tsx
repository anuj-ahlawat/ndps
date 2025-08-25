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
} from "@/components/ui/table";
import { Trophy, Percent, Star } from "lucide-react";

const highAchievers = [
  { name: 'Anjali Sharma', class: 'XII-A', stream: 'Science', percentage: '98.6%' },
  { name: 'Rohan Mehra', class: 'XII-C', stream: 'Commerce', percentage: '97.8%' },
  { name: 'Priya Singh', class: 'XII-B', stream: 'Humanities', percentage: '97.2%' },
  { name: 'Sameer Gupta', class: 'X-A', stream: 'N/A', percentage: '99.0%' },
  { name: 'Neha Verma', class: 'X-D', stream: 'N/A', percentage: '98.4%' },
];

export default function ResultsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Academic Achievements</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Celebrating the outstanding performance of our students.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
                <Card>
                    <CardHeader className="items-center">
                        <Trophy className="h-10 w-10 text-accent mb-2" />
                        <CardTitle className="font-headline">100% Pass Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">In both Class X and XII CBSE Examinations.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="items-center">
                        <Percent className="h-10 w-10 text-accent mb-2" />
                        <CardTitle className="font-headline">95.4% School Average</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">In Class XII Board Examinations.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="items-center">
                        <Star className="h-10 w-10 text-accent mb-2" />
                        <CardTitle className="font-headline">45+ Perfect Scores</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Students achieved 100/100 in various subjects.</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle>Our High Achievers</CardTitle>
                    <CardDescription>We congratulate our top performers for their exceptional results in the recent board examinations.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Student Name</TableHead>
                                <TableHead>Class</TableHead>
                                <TableHead>Stream</TableHead>
                                <TableHead className="text-right">Percentage</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {highAchievers.map((student) => (
                                <TableRow key={student.name}>
                                    <TableCell className="font-medium">{student.name}</TableCell>
                                    <TableCell>{student.class}</TableCell>
                                    <TableCell>{student.stream}</TableCell>
                                    <TableCell className="text-right font-semibold text-primary">{student.percentage}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
