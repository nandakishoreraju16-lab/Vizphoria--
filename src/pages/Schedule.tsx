import { Card, CardContent } from "@/components/ui/card";

const schedule = [
  {
    day: "Day 1 – Sports Kickoff",
    date: "16 December 2025",
    events: [
      {
        time: "11:00 AM - 2:00 PM",
        event: "Badminton",
        venue: "Badminton Court",
        category: "Sports",
      },
    ],
  },
  {
    day: "Day 2 – Outdoor Sports",
    date: "17 December 2025",
    events: [
      {
        time: "9:00 AM onwards",
        event: "Football Match",
        venue: "Turf",
        category: "Sports",
      },
      {
        time: "9:00 AM onwards",
        event: "Cricket Match",
        venue: "Ground",
        category: "Sports",
      },
    ],
  },
  {
    day: "Day 3 – Cultural & Literary Events",
    date: "18 December 2025",
    events: [
      {
        time: "9:00 AM - 10:00 AM",
        event: "The Masquerade Murder",
        venue: "B03",
        category: "Literary / Mystery",
      },
      {
        time: "10:00 AM - 2:00 PM",
        event: "Speak Your Case",
        venue: "Voyager",
        category: "Debate / Speaker Session",
      },
      {
        time: "10:00 AM - 11:00 AM",
        event: "Frame the Renaissance",
        venue: "B03",
        category: "Photography / Art",
      },
      {
        time: "12:00 PM - 1:00 PM",
        event: "Visionary Voices",
        venue: "Voyager",
        category: "Literary / Speaking",
      },
      {
        time: "1:00 PM - 2:00 PM",
        event: "Quick Cuts",
        venue: "B03",
        category: "Video / Editing",
      },
      {
        time: "2:00 PM - 3:00 PM",
        event: "Standup Comedy + Open Mic",
        venue: "Lower Deck",
        category: "Entertainment",
      },
    ],
  },
  {
    day: "Day 4 – Main Stage Finale",
    date: "19 December 2025",
    events: [
      {
        time: "9:00 AM - 1:00 PM",
        event: "Sur Saragam",
        venue: "Main Stage",
        category: "Music – Onstage",
      },
      {
        time: "9:00 AM - 10:00 AM",
        event: "Solo Instrumental",
        venue: "Main Stage",
        category: "Music – Onstage",
      },
      {
        time: "10:00 AM - 11:00 AM",
        event: "Rhythmic Renaissance (Solo Dance)",
        venue: "Main Stage",
        category: "Dance – Onstage",
      },
      {
        time: "11:00 AM - 12:00 PM",
        event: "Dynamic Duet (Duo Dance)",
        venue: "Main Stage",
        category: "Dance – Onstage",
      },
      {
        time: "12:00 PM - 1:00 PM",
        event: "The Grand Renaissance Crew",
        venue: "Main Stage",
        category: "Dance – Onstage",
      },
      {
        time: "1:00 PM - 2:00 PM",
        event: "Battle of Bands",
        venue: "Main Stage",
        category: "Music – Onstage",
      },
      {
        time: "2:00 PM - 3:00 PM",
        event: "Runway Challenge",
        venue: "Main Stage",
        category: "Fashion – Onstage",
      },
      {
        time: "6:00 PM onwards",
        event: "DJ NIGHT",
        venue: "Main Stage",
        category: "Closing Night",
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
