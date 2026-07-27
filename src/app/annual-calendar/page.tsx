"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import events from "@/data/event.json";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";

type Event = {
  id: number;
  title: string;
  type: string;
  description: string;
  date?: string;
  startDate?: string;
  endDate?: string;
};

const badgeColors: Record<string, string> = {
  holiday: "bg-red-500",
  exam: "bg-orange-500",
  competition: "bg-blue-500",
  vacation: "bg-purple-500",
  session: "bg-green-500",
  event: "bg-sky-500",
  result: "bg-emerald-500",
};

export default function AnnualCalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date>();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDates = useMemo(() => {
    const dates: Date[] = [];

    events.forEach((event: Event) => {
      if (event.date) {
        dates.push(new Date(event.date));
      }

      if (event.startDate && event.endDate) {
        const current = new Date(event.startDate);
        const end = new Date(event.endDate);

        while (current <= end) {
          dates.push(new Date(current));
          current.setDate(current.getDate() + 1);
        }
      }
    });

    return dates;
  }, []);

  const upcomingEvents = useMemo(() => {
  return events
    .filter((event: Event) => {
      const eventDate = new Date(event.date || event.startDate!);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= today;
    })
    .sort(
      (a: Event, b: Event) =>
        new Date(a.date || a.startDate!).getTime() -
        new Date(b.date || b.startDate!).getTime()
    )
    .slice(0, 3); // Show only the next 3 upcoming events
}, []);

  const selectedEvents = useMemo(() => {
    if (!selectedDate) return [];

    return events.filter((event: Event) => {
      if (event.date) {
        return (
          new Date(event.date).toDateString() ===
          selectedDate.toDateString()
        );
      }

      if (event.startDate && event.endDate) {
        const start = new Date(event.startDate);
        const end = new Date(event.endDate);

        return selectedDate >= start && selectedDate <= end;
      }

      return false;
    });
  }, [selectedDate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">

        <section className="bg-primary text-primary-foreground py-16">
          <div className="container max-w-5xl mx-auto text-center">

            <h1 className="text-5xl font-bold">
              Annual Academic Calendar
            </h1>

            <p className="mt-4 text-lg opacity-90">
              Academic Session 2026-27
            </p>

            <Button asChild className="mt-8" variant="secondary">
              <Link
                href="/schoolFiles/academic-calendar-2026-27.pdf"
                target="_blank"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Academic Calendar
              </Link>
            </Button>

          </div>
        </section>

        <section className="py-14">

          <div className="container max-w-7xl mx-auto grid gap-8 lg:grid-cols-[430px_1fr]">

            <Card>
              <CardHeader>
                <CardTitle>School Calendar</CardTitle>
                <CardDescription>
                  Click a date to view events.
                </CardDescription>
              </CardHeader>

              <CardContent>

                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  modifiers={{
                    events: eventDates,
                  }}
                  modifiersClassNames={{
                    events:
                      "bg-primary text-primary-foreground rounded-full font-bold",
                  }}
                />

              </CardContent>
            </Card>

            <div className="space-y-6">

              <Card>

                <CardHeader>
                  <CardTitle>
                    Upcoming Events
                  </CardTitle>

                  <CardDescription>
                    Academic activities and holidays.
                  </CardDescription>

                </CardHeader>

                <CardContent>

                  <div className="space-y-4">

                    {upcomingEvents.map((event: Event) => (

                      <div
                        key={event.id}
                        className="border rounded-xl p-4 hover:shadow transition"
                      >

                        <div className="flex justify-between items-center">

                          <h3 className="font-semibold text-lg">
                            {event.title}
                          </h3>

                          <Badge
                            className={
                              badgeColors[event.type] ??
                              "bg-gray-500"
                            }
                          >
                            {event.type}
                          </Badge>

                        </div>

                        <p className="text-sm text-muted-foreground mt-2">

                          {event.date
                            ? new Date(event.date).toLocaleDateString(
                                "en-IN",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                }
                              )
                            : `${new Date(
                                event.startDate!
                              ).toLocaleDateString("en-IN")} - ${new Date(
                                event.endDate!
                              ).toLocaleDateString("en-IN")}`}

                        </p>

                        <p className="mt-2">
                          {event.description}
                        </p>

                      </div>

                    ))}

                  </div>

                </CardContent>

              </Card>

              <Card>

                <CardHeader>

                  <CardTitle>
                    Events on Selected Date
                  </CardTitle>

                </CardHeader>

                <CardContent>

                  {!selectedDate && (
                    <p className="text-muted-foreground">
                      Select a date from the calendar.
                    </p>
                  )}

                  {selectedDate &&
                    selectedEvents.length === 0 && (
                      <p className="text-muted-foreground">
                        No events scheduled.
                      </p>
                    )}

                  <div className="space-y-3">

                    {selectedEvents.map((event: Event) => (

                      <div
                        key={event.id}
                        className="border rounded-lg p-4"
                      >

                        <div className="flex justify-between">

                          <h4 className="font-semibold">
                            {event.title}
                          </h4>

                          <Badge
                            className={
                              badgeColors[event.type]
                            }
                          >
                            {event.type}
                          </Badge>

                        </div>

                        <p className="text-sm text-muted-foreground mt-2">
                          {event.description}
                        </p>

                      </div>

                    ))}

                  </div>

                </CardContent>

              </Card>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}