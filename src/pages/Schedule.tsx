import { Card, CardContent } from "@/components/ui/card";

const schedule = [
  {
    day: "Day 1",
    date: "March 15, 2025",
    events: [
      { time: "09:00 AM", event: "Opening Ceremony", venue: "Main Auditorium" },
      { time: "10:00 AM", event: "Renaissance Art Exhibition Begins", venue: "Art Gallery" },
      { time: "11:30 AM", event: "Literary Symposium - Round 1", venue: "Library Hall" },
      { time: "01:00 PM", event: "Lunch Break", venue: "Dining Hall" },
      { time: "02:30 PM", event: "Tech Innovation Challenge Kickoff", venue: "Tech Lab" },
      { time: "04:00 PM", event: "Classical Music Workshop", venue: "Music Room" },
      { time: "06:00 PM", event: "Classical Music Fusion Competition", venue: "Amphitheater" },
      { time: "08:00 PM", event: "Welcome Night Gala", venue: "Main Stage" }
    ]
  },
  {
    day: "Day 2",
    date: "March 16, 2025",
    events: [
      { time: "09:00 AM", event: "Tech Innovation Challenge Continues", venue: "Tech Lab" },
      { time: "10:00 AM", event: "Dance Workshop", venue: "Dance Studio" },
      { time: "11:30 AM", event: "Fashion Design Presentation", venue: "Grand Hall" },
      { time: "01:00 PM", event: "Lunch Break", venue: "Dining Hall" },
      { time: "02:00 PM", event: "Literary Symposium Finals", venue: "Library Hall" },
      { time: "04:00 PM", event: "Art Exhibition Judging", venue: "Art Gallery" },
      { time: "05:00 PM", event: "Drama & Theater Performances", venue: "Main Stage" },
      { time: "07:30 PM", event: "Celebrity Talk Show", venue: "Amphitheater" }
    ]
  },
  {
    day: "Day 3",
    date: "March 17, 2025",
    events: [
      { time: "09:00 AM", event: "Tech Innovation Final Presentations", venue: "Tech Lab" },
      { time: "11:00 AM", event: "Culinary Arts Competition", venue: "Dining Hall" },
      { time: "01:00 PM", event: "Lunch Break & Food Festival", venue: "Campus Grounds" },
      { time: "02:30 PM", event: "Music Jam Session", venue: "Amphitheater" },
      { time: "04:00 PM", event: "Fashion Renaissance Runway Show", venue: "Grand Hall" },
      { time: "06:00 PM", event: "Winners Announcement Ceremony", venue: "Main Auditorium" },
      { time: "07:00 PM", event: "Dance Spectacular Finals", venue: "Main Stage" },
      { time: "09:00 PM", event: "Grand Closing Concert", venue: "Main Stage" }
    ]
  }
];

const Schedule = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      className={`relative flex items-center ${
                        eventIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-secondary shadow-gold z-10" />

                      {/* Content card */}
                      <Card
                        className={`ml-8 md:ml-0 w-full md:w-5/12 hover-lift ornate-border ${
                          eventIndex % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full inline-block w-fit mb-2 md:mb-0">
                              {event.time}
                            </span>
                            <span className="text-xs text-muted-foreground">{event.venue}</span>
                          </div>
                          <h3 className="text-lg font-playfair font-semibold text-foreground">
                            {event.event}
                          </h3>
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
  );
};

export default Schedule;
