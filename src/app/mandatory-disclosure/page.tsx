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
import { Button } from "@/components/ui/button";
import Link from "next/link";

const documents = [
    { sNo: 1, information: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY", details: "/schoolFiles/self declaration 001.pdf" },
    { sNo: 2, information: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE", details: "/schoolFiles/society registration.pdf" },
    { sNo: 3, information: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT", details: "/schoolFiles/NOC.pdf" },
    { sNo: 4, information: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE", details: "/schoolFiles/deo recognition.pdf" },
    { sNo: 5, information: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE", details: "/schoolFiles/building safety certificate.pdf" },
    { sNo: 6, information: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY", details: "/schoolFiles/fire safety certificate.pdf" },
    { sNo: 7, information: "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL", details: "/schoolFiles/deo recognition.pdf" },
    { sNo: 8, information: "COPIES OF VALID WATER SAFETY CERTIFICATES", details: "/schoolFiles/water safety certificate.pdf" },
    { sNo: 9, information: "COPY OF VALID LAND CERTIFICATE", details: "/schoolFiles/land certificate.pdf" },
    { sNo: 10, information: "COPY OF VALID HEALTH CERTIFICATE", details: "/schoolFiles/Health certificate.pdf" },
    { sNo: 11, information: "COPY OF INSURANCE COVERAGE CONFIRMATION", details: "/schoolFiles/coverage confirmation.pdf" },
    { sNo: 12, information: "COPY OF EPF DETAILS (MAY 2021)", details: "/schoolFiles/epf may 2021.pdf" },
    { sNo: 13, information: "COPY OF PARENTS TEACHER ASSOCIATION DOCUMENT", details: "/schoolFiles/parents teacher ass. .pdf" },
    { sNo: 14, information: "COPY OF ANAPATI CERTIFICATE", details: "/schoolFiles/anapati certificate.pdf" },
];

export default function PublicMandatoryDisclosurePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Public Mandatory Disclosure</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Documents and Information
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto">
             <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">DOCUMENTS AND INFORMATION</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[100px]">S.No.</TableHead>
                            <TableHead>INFORMATION</TableHead>
                            <TableHead className="text-right">DETAILS</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {documents.map((doc) => (
                                <TableRow key={doc.sNo}>
                                    <TableCell className="font-medium">{doc.sNo}</TableCell>
                                    <TableCell>{doc.information}</TableCell>
                                    <TableCell className="text-right">
                                        <Button asChild variant="link">
                                            <Link href={doc.details}>View</Link>
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
