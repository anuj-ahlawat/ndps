import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

export default function AnnualCalendarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">Annual Academic Calendar</h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/80">
              Key dates and events for the academic year.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-4xl mx-auto flex flex-col items-center">
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>School Calendar</CardTitle>
                    <CardDescription>Select a date to view events.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <Calendar
                        mode="single"
                        className="rounded-md border"
                    />
                </CardContent>
             </Card>
             <div className="mt-8 text-muted-foreground self-start">
                <h2 className="font-headline text-2xl font-bold text-primary mb-4">Upcoming Events</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li><span className="font-semibold">August 15, 2024:</span> Independence Day Celebration</li>
                    <li><span className="font-semibold">September 5, 2024:</span> Teacher&apos;s Day</li>
                    <li><span className="font-semibold">October 2, 2024:</span> Gandhi Jayanti (Holiday)</li>
                </ul>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
