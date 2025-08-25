import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, UserCheck, Megaphone } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const committeeMembers = [
    { name: "Dr. Evelyn Reed", role: "Principal (Chairperson)" },
    { name: "Mr. Samuel Chen", role: "Vice-Principal (Member)" },
    { name: "Mr. Arjun Das", role: "Physical Education Head (Member)" },
    { name: "Mrs. Kavita Joshi", role: "Senior Teacher (Member)" },
    { name: "Ms. Anita Desai", role: "Parent Representative" },
    { name: "Mr. Prakash Verma", role: "Parent Representative" },
    { name: "Local Police Inspector", role: "Special Invitee" },
]

export default function SchoolSafetyCommitteePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">School Safety Committee</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Committed to ensuring a safe and secure environment for all students.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto">
             <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
                <Card>
                    <CardHeader className="items-center">
                        <ShieldCheck className="h-10 w-10 text-accent mb-2" />
                        <CardTitle className="font-headline">Our Commitment</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">To proactively identify, assess, and mitigate risks to ensure the physical and emotional well-being of our students and staff.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="items-center">
                        <UserCheck className="h-10 w-10 text-accent mb-2" />
                        <CardTitle className="font-headline">Key Responsibilities</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Developing safety protocols, conducting regular drills, and ensuring compliance with all safety regulations.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="items-center">
                        <Megaphone className="h-10 w-10 text-accent mb-2" />
                        <CardTitle className="font-headline">Raising Awareness</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Educating the school community on safety measures, emergency procedures, and responsible behavior.</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle>Committee Members</CardTitle>
                    <CardDescription>Our dedicated committee working to ensure campus safety.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/2">Name</TableHead>
                                <TableHead>Role in Committee</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {committeeMembers.map((member) => (
                                <TableRow key={member.name}>
                                    <TableCell className="font-medium">{member.name}</TableCell>
                                    <TableCell>{member.role}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

             <div className="mt-12 space-y-6 text-muted-foreground">
                <h3 className="font-headline text-2xl font-bold text-primary">Safety Policies</h3>
                <p>The School Safety Committee has formulated comprehensive safety policies covering various aspects, including anti-bullying, child protection (POCSO), fire safety, transport safety, and emergency response. These policies are regularly reviewed and updated to address emerging challenges and ensure a secure learning atmosphere.</p>
             </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
