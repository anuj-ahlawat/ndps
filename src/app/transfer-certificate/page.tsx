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
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const transferCertificateData = [
  { sNo: 1, name: "Mohnish Bandil", class: "11th", admissionNo: "2150" },
  { sNo: 2, name: "Krishna Sharma", class: "10th", admissionNo: "622" },
  { sNo: 3, name: "Avantika Sikarwar", class: "11th", admissionNo: "1675" },
  { sNo: 4, name: "Shabd Garg", class: "11th", admissionNo: "1640" },
  { sNo: 5, name: "Aaditi Chauhan", class: "12th", admissionNo: "2105" },
  { sNo: 6, name: "Sachin Singh Tomar", class: "12th", admissionNo: "1533" },
  { sNo: 7, name: "Abhay Pratap Singh Gurjar", class: "10th", admissionNo: "1840" },
  { sNo: 8, name: "Ankush Gurjar", class: "10th", admissionNo: "1725" },
  { sNo: 9, name: "Vaishnavi Kirtiwar", class: "10th", admissionNo: "1120" },
  { sNo: 10, name: "Abhay Verma", class: "12th", admissionNo: "1135" },
  { sNo: 11, name: "Ashishi Kushwah", class: "12th", admissionNo: "1579" },
];

export default function TransferCertificatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Transfer Certificate</h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto">
             <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-center text-2xl text-green-600">TRANSFER CERTIFICATE</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>S.No.</TableHead>
                                <TableHead>NAME</TableHead>
                                <TableHead>CLASS</TableHead>
                                <TableHead>ADMISSION NO.</TableHead>
                                <TableHead>DOWNLOAD</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transferCertificateData.map((student) => (
                                <TableRow key={student.sNo}>
                                    <TableCell>{student.sNo}</TableCell>
                                    <TableCell>{student.name}</TableCell>
                                    <TableCell>{student.class}</TableCell>
                                    <TableCell>{student.admissionNo}</TableCell>
                                    <TableCell>
                                        <Button asChild variant="link">
                                            <Link href={`/tc/${student.admissionNo}.pdf`}>View</Link>
                                        </Button>
                                    </TableCell>
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