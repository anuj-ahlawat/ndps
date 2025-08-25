import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const smcMembers = [
  { sNo: 1, name: "Mr. Rajesh Sharma", designation: "Chairman" },
  { sNo: 2, name: "Dr. Evelyn Reed", designation: "Principal / Member Secretary" },
  { sNo: 3, name: "Mr. Samuel Chen", designation: "Vice-Principal / Member" },
  { sNo: 4, name: "Mrs. Kavita Joshi", designation: "Teacher Representative" },
  { sNo: 5, name: "Mr. Mohan Kumar", designation: "Teacher Representative" },
  { sNo: 6, name: "Ms. Anita Desai", designation: "Parent Representative" },
  { sNo: 7, name: "Mr. Prakash Verma", designation: "Parent Representative" },
  { sNo: 8, name: "Mrs. Geeta Iyer", designation: "Parent Representative" },
  { sNo: 9, name: "Mr. Alok Jain", designation: "Parent Representative" },
  { sNo: 10, name: "Dr. R. K. Singhania", designation: "Educationist" },
  { sNo: 11, name: "Mrs. Meera Pandit", designation: "Educationist" },
  { sNo: 12, name: "Accountant of the School", designation: "Member" },
  { sNo: 13, name: "Social Worker", designation: "Member" },
];

export default function SmcBodyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">School Management Committee (SMC)</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Ensuring effective governance and stakeholder participation.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-4xl mx-auto">
             <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle>SMC Members for the session 2024-2025</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[100px]">S.No.</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Designation in Committee</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {smcMembers.map((member) => (
                                <TableRow key={member.sNo}>
                                    <TableCell className="font-medium">{member.sNo}</TableCell>
                                    <TableCell>{member.name}</TableCell>
                                    <TableCell>{member.designation}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
             </Card>
             <div className="mt-8 text-muted-foreground space-y-4">
                 <h2 className="font-headline text-2xl font-bold text-primary">Role of the SMC</h2>
                 <p>The School Management Committee (SMC) plays a crucial role in the governance and development of the school. It is constituted as per the guidelines of the CBSE and the Directorate of Education. The SMC works collaboratively with the school leadership to monitor and support the school's functioning, ensuring transparency, accountability, and the overall well-being of the school community.</p>
                 <p>Key responsibilities include overseeing the utilization of grants, monitoring academic and co-curricular activities, and ensuring the implementation of governmental policies. The committee serves as a vital link between the school, parents, and the community, fostering a spirit of partnership for the betterment of education.</p>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
