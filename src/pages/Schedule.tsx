import { Card, CardContent } from "@/components/ui/card";

const schedule = [
  {
    day: "Day 1 – Sports Kickoff",
    date: "16 December 2025",
    events: [
      {
        time: "11:00 AM onwards",
        event: "Badminton (Doubles) – Male",
        venue: "Indoor Badminton Court",
        category: "Sports",
      },
      {
        time: "11:00 AM onwards",
        event: "Badminton (Doubles) – Female",
        venue: "Indoor Badminton Court",
        category: "Sports",
      },
    ],
  },
  {
    day: "Day 2 – Major Sports",
    date: "17 December 2025",
    events: [
      {
        time: "10:00 AM onwards",
        event: "Cricket Tournament",
        venue: "Cricket Ground",
        category: "Sports",
      },
      {
        time: "10:00 AM onwards",
        event: "Football (5-a-Side)",
        venue: "Football Court",
        category: "Sports",
      },
    ],
  },
  {
    day: "Day 3 – Campus Games & Media Events",
    date: "18 December 2025",
    events: [
      {
        time: "9:30 AM onwards",
        event: "The Masquerade Murder (Murder Mystery / Scavenger Hunt)",
        venue: "Entire Campus / B03",
        category: "Debate Club – Offstage",
      },
      {
        time: "10:30 AM onwards",
        event: "Frame the Renaissance (Photography)",
        venue: "Classroom / On Campus",
        category: "Photography – Offstage",
      },
      {
        time: "10:30 AM onwards",
        event: "Mock Trial (Debate Meets Courtroom)",
        venue: "Voyagers",
        category: "Debate – Onstage / Offstage Mix",
      },
      {
        time: "12:30 PM onwards",
        event: "Visionary Voices (Short Film)",
        venue: "Voyagers",
        category: "Photography – Offstage",
      },
      {
        time: "1:30 PM onwards",
        event: "Quick Cuts (Reel Making)",
        venue: "Classroom / B03",
        category: "Photography – Offstage",
      },
    ],
  },
  {
    day: "Day 4 – Main Stage & Finale Acts",
    date: "19 December 2025",
    events: [
      {
        time: "9:00 AM onwards",
        event: "Sur Saragam (Solo Vocals)",
        venue: "Voyagers",
        category: "Music – Onstage",
      },
      {
        time: "10:00 AM onwards",
        event: "Sur Saragam (Duo Vocals)",
        venue: "Voyagers",
        category: "Music – Onstage",
      },
      {
        time: "10:00 AM onwards",
        event: "Solo Instrumental",
        venue: "Main Stage",
        category: "Music – Onstage",
      },
      {
        time: "11:00 AM onwards",
        event: "Rhythmic Renaissance (Solo Dance)",
        venue: "Main Stage",
        category: "Dance – Onstage",
      },
      {
        time: "12:00 PM onwards",
        event: "Dynamic Duet (Duo Dance)",
        venue: "Main Stage",
        category: "Dance – Onstage",
      },
      {
        time: "12:00 PM onwards",
        event: "Sur Saragam (Group Vocals)",
        venue: "Voyagers",
        category: "Music – Onstage",
      },
      {
        time: "12:30 PM onwards",
        event: "The Grand Renaissance Crew (Group Dance)",
        venue: "Main Stage",
        category: "Dance – Onstage",
      },
      {
        time: "1:30 PM onwards",
        event: "Battle of the Bands",
        venue: "Main Stage",
        category: "Music – Onstage",
      },
      {
        time: "2:00 PM onwards",
        event: "Stand-up Comedy + Open Mic",
        venue: "Lower Deck",
        category: "Music + Debate + Dance Clubs",
      },
      {
        time: "3:30 PM onwards",
        event: "Runway Challenge (Nobility vs Peasantry)",
        venue: "Main Stage",
        category: "Fashion – Onstage",
      },
      {
        time: "Time TBA",
        event: "Best Dressed – Vizphoria Edition",
        venue: "Lower Deck",
        category: "Fashion – Onstage",
      },
      {
        time: "6:00 PM onwards",
        event: "DJ Night (Participant-only)",
        venue: "Main Stage / DJ Area",
        category: "General – Closing Night",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full page background overlay */}
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm -z-10" />

      <div className="py-12 relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-4">
              Schedule
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plan your Vizphoria experience with our detailed event schedule
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {schedule.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="animate-fade-in-scale"
                style={{ animationDelay: `${dayIndex * 0.2}s` }}
              >
                <div className="mb-6">
                  <h2 className="text-3xl font-playfair font-bold text-primary mb-2">
                    {day.day}
                  </h2>
                  <p className="text-lg text-muted-foreground">{day.date}</p>
                </div>

                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent" />

                  <div className="space-y-8">
                    {day.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`relative flex items-center ${eventIndex % 2 === 0
                            ? "md:flex-row"
                            : "md:flex-row-reverse"
                          }`}
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-secondary shadow-gold z-10" />

                        {/* Content card */}
                        <Card
                          className={`ml-8 md:ml-0 w-full md:w-5/12 hover-lift ornate-border ${eventIndex % 2 === 0
                              ? "md:mr-auto md:pr-8"
                              : "md:ml-auto md:pl-8"
                            }`}
                        >
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                              <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full inline-block w-fit mb-2 md:mb-0">
                                {event.time}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {event.venue}
                              </span>
                            </div>
                            <h3 className="text-lg font-playfair font-semibold text-foreground">
                              {event.event}
                            </h3>
                            {event.category && (
                              <p className="text-sm text-muted-foreground mt-1">
                                {event.category}
                              </p>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
