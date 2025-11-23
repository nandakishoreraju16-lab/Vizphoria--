import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Users,
  IndianRupee,
  Phone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ScrollReveal from "@/components/ScrollReveal";
import OrnamentalDivider from "@/components/OrnamentalDivider";

// ✅ One central Google Form for all registrations (you can change later)
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScALuMAB-xvHMYo66rUBkZPN-Qb5U0KwIKLBzA7g6VTwVqlHg/viewform?embedded=true";

interface SubEvent {
  id: string;
  name: string;
  fee: number;
  slots?: number;
  rules: string[];
  poc?: { name: string; phone: string };
  formUrl?: string; // Google Form URL for this sub-event
}

interface EventCategory {
  id: string;
  name: string;
  club: string;
  description: string;
  icon: string;
  subEvents: SubEvent[];
}

const CLUB_LABELS: Record<string, string> = {
  debate: "Debate Club",
  fashion: "Fashion Club",
  dance: "Dance Club",
  music: "Music Club",
  media: "Media Club",
  sports: "Sports Club",
  special: "Special Events",
  all: "All Events",
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventCategory | null>(null);
  const [activeClub, setActiveClub] = useState<string>("all");
  const [activeSubEventId, setActiveSubEventId] = useState<string | null>(null);

  const clubs = [
    { id: "all", name: "All Events" },
    { id: "debate", name: "Debate Club" },
    { id: "fashion", name: "Fashion Club" },
    { id: "dance", name: "Dance Club" },
    { id: "music", name: "Music Club" },
    { id: "media", name: "Media Club" },
    { id: "sports", name: "Sports Club" },
    { id: "special", name: "Special Events" },
  ];

  // All sub-events currently use the SAME Google Form URL.
  // If you create separate forms later, just change formUrl for that sub-event.
  const events: EventCategory[] = [
    {
      id: "debate-events",
      name: "Open for All (Debate)",
      club: "debate",
      icon: "⚖️",
      description:
        "Parliamentary debates and courtroom drama for the sharpest minds.",
      subEvents: [
        {
          id: "parliamentary-debate",
          name: "Parliamentary Debate",
          fee: 300,
          slots: 16,
          rules: [
            "Teams of 4 members.",
            "Multiple preliminary rounds plus grand final.",
            "Maintain decorum; no personal attacks.",
            "Judge’s decision is final.",
          ],
          poc: { name: "Samhita", phone: "+91 98765 43210" },
          formUrl: GOOGLE_FORM_URL,
        },
        {
          id: "mock-trial",
          name: "Mock Trial",
          fee: 99,
          rules: [
            "Participants are assigned roles (lawyers, witnesses, etc.).",
            "Full trial format with openings, witnesses and verdict.",
            "Audience may act as jury if the format allows.",
            "Judge’s verdict is final.",
          ],
          poc: { name: "Samhita", phone: "+91 70907 32154" },
          formUrl: GOOGLE_FORM_URL,
        },
      ],
    },
    {
      id: "fashion-events",
      name: "Fashion & Runway",
      club: "fashion",
      icon: "👗",
      description:
        "Walk the ramp, show your style and bring Renaissance fashion to life.",
      subEvents: [
        {
          id: "best-dressed",
          name: "Best Dressed",
          fee: 99,
          rules: [
            "Solo or pair participation.",
            "Short ramp walk to show the outfit.",
            "Keep outfits decent and crowd-friendly.",
            "Judging: creativity, confidence, crowd reaction.",
          ],
          poc: { name: "Bushra", phone: "+91 96235 55150" },
          formUrl: GOOGLE_FORM_URL,
        },
        {
          id: "runway-challenge",
          name: "Runway Renaissance – Nobility vs Peasantry",
          fee: 799,
          rules: [
            "Team size 8–10 participants.",
            "Theme is strictly Nobility vs Peasantry (Renaissance).",
            "Teams arrange their own costumes & props.",
            "Judging: concept, execution, coordination.",
          ],
          poc: { name: "Bushra", phone: "+91 96235 55150" },
          formUrl: GOOGLE_FORM_URL,
        },
      ],
    },
    {
      id: "dance-events",
      name: "Dance Arena",
      club: "dance",
      icon: "💃",
      description:
        "Solo, duo and crew performances with Renaissance-inspired storytelling.",
      subEvents: [
        {
          id: "rhythmic-renaissance",
          name: "Rhythmic Renaissance (Solo)",
          fee: 99,
          rules: [
            "Solo performance.",
            "Time-limited routine with Renaissance flavour.",
            "No props allowed.",
            "Judging: expression, choreography, creativity, stage presence.",
          ],
          poc: { name: "Greeshma", phone: "+91 70196 53639" },
          formUrl: GOOGLE_FORM_URL,
        },
        {
          id: "dynamic-duet",
          name: "Dynamic Duet",
          fee: 199,
          rules: [
            "Team of 2 dancers.",
            "Choreography must tell a clear story.",
            "Props are allowed.",
            "Judging: synchronization, storytelling, creativity.",
          ],
          poc: { name: "Shruti", phone: "+91 98804 62478" },
          formUrl: GOOGLE_FORM_URL,
        },
        {
          id: "grand-renaissance-crew",
          name: "The Grand Renaissance Crew",
          fee: 499,
          rules: [
            "Team size 3–8 participants.",
            "Props are mandatory (teams bring their own).",
            "High-energy group performance.",
            "Judging: coordination, concept, overall impact.",
          ],
          poc: { name: "Shruti", phone: "+91 98804 62478" },
          formUrl: GOOGLE_FORM_URL,
        },
      ],
    },
    {
      id: "music-events",
      name: "Music & Bands",
      club: "music",
      icon: "🎵",
      description:
        "From solo vocals to full bands, bring your sound to the Vizphoria stage.",
      subEvents: [
        {
          id: "vocal-vibes",
          name: "Vocal Vibes (Solo)",
          fee: 99,
          rules: [
            "Solo vocal or solo instrumental performance.",
            "Time-limited performance (follow coordinator instructions).",
            "No explicit or offensive lyrics.",
            "Judging: pitch, control, expression, song choice.",
          ],
          poc: { name: "Jiken", phone: "+91 95128 22228" },
          formUrl: GOOGLE_FORM_URL,
        },
        {
          id: "battle-of-bands",
          name: "Battle of the Bands",
          fee: 799,
          rules: [
            "Band size 3–7 members.",
            "Single performance within the given time limit.",
            "Bands arrange their own instruments.",
            "Judging: tightness, originality, stage presence.",
          ],
          poc: { name: "Jiken", phone: "+91 95128 22228" },
          formUrl: GOOGLE_FORM_URL,
        },
      ],
    },
    {
      id: "media-events",
      name: "Media & Creators",
      club: "media",
      icon: "🎬",
      description:
        "Photo and reel challenges to capture the spirit of Vizphoria 2K25.",
      subEvents: [
        {
          id: "frame-the-renaissance",
          name: "Frame the Renaissance (Photography)",
          fee: 99,
          slots: 20,
          rules: [
            "Solo photography challenge.",
            "Only original photos – plagiarism is disqualified.",
            "Only basic editing (crop/colour) allowed.",
            "No offensive or indecent content.",
          ],
          poc: { name: "Srivalli", phone: "+91 81792 11727" },
          formUrl: GOOGLE_FORM_URL,
        },
        {
          id: "quick-cuts",
          name: "Quick Cuts (Reel Making)",
          fee: 99,
          rules: [
            "Solo reel – short vertical video.",
            "Use original or non-copyrighted audio.",
            "No offensive or indecent content.",
            "Submit before the deadline given by coordinators.",
          ],
          poc: { name: "Srivalli", phone: "+91 81792 11727" },
          formUrl: GOOGLE_FORM_URL,
        },
      ],
    },
    {
      id: "sports-events",
      name: "Sports Championship",
      club: "sports",
      icon: "🏆",
      description:
        "Cricket, football and badminton tournaments across the Vizphoria sports arena.",
      subEvents: [
        {
          id: "cricket",
          name: "Cricket Tournament",
          fee: 999,
          slots: 16,
          rules: [
            "Team size 11–13 players.",
            "Short-format (limited overs).",
            "Teams must bring their own basic equipment.",
            "Umpire’s decision is final.",
          ],
          poc: { name: "Amarjeet", phone: "+91 81026 55644" },
          formUrl: GOOGLE_FORM_URL,
        },
        {
          id: "football",
          name: "5-a-Side Football",
          fee: 799,
          slots: 32,
          rules: [
            "Team size 5–7 players.",
            "Short turf matches.",
            "Slide tackles are banned.",
            "Referee’s decision is final.",
          ],
          poc: { name: "Anurag", phone: "+91 74834 29802" },
          formUrl: GOOGLE_FORM_URL,
        },
        {
          id: "badminton",
          name: "Badminton Doubles",
          fee: 499,
          slots: 20,
          rules: [
            "Team size 2 players (doubles).",
            "Knockout format.",
            "Non-marking shoes and sportswear mandatory.",
            "Referee’s decision is final.",
          ],
          poc: { name: "Janci", phone: "+91 79899 93745" },
          formUrl: GOOGLE_FORM_URL,
        },
      ],
    },
    {
      id: "special-events",
      name: "Special Events & Passes",
      club: "special",
      icon: "✨",
      description:
        "Open mic, entry passes and DJ night — chill events open to everyone.",
      subEvents: [
        {
          id: "open-mic",
          name: "Open Mic",
          fee: 0,
          rules: [
            "Open to all – solo or group performances.",
            "Do whatever you want: music, poetry, stand-up, beatboxing, etc.",
            "Express your talent and entertain the crowd.",
            "Keep your content respectful and crowd-friendly.",
          ],
          formUrl: GOOGLE_FORM_URL,
        },
        {
          id: "three-day-entry-pass",
          name: "3-Day Entry Ticket",
          fee: 99,
          rules: [
            "Entry access for all three days of Vizphoria.",
            "Day 1 and Day 2 are free; the ₹99 covers your Day 3 entry.",
            "Pass is non-transferable. ID may be checked at the gate.",
          ],
          formUrl: GOOGLE_FORM_URL,
        },
        {
          id: "dj-night-19",
          name: "DJ Night – 19 December",
          fee: 0,
          rules: [
            "Entry for DJ night on 19 December.",
            "Participation/entry is free, but registration is required for headcount.",
            "Bring your college ID or valid ID proof.",
          ],
          formUrl: GOOGLE_FORM_URL,
        },
      ],
    },
  ];

  const filteredEvents =
    activeClub === "all" ? events : events.filter((e) => e.club === activeClub);

  const openCategory = (event: EventCategory) => {
    setSelectedEvent(event);
    setActiveSubEventId(null);
  };

  // ---------- RENDER ----------
  return (
    <div className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background */}
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
                Experience Excellence
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-black text-[#660000] mb-4">
              Festival Events
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Open a category, pick a sub-event and fill the registration form
              right here.
            </p>
          </div>
        </ScrollReveal>

        <OrnamentalDivider />

        {/* Club filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10 mb-10">
            {clubs.map((club, index) => (
              <motion.button
                key={club.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveClub(club.id)}
                className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-['EB_Garamond'] border-2 transition-all duration-300 ${activeClub === club.id
                    ? "bg-[#660000] text-white border-[#C9A227] shadow-lg scale-105"
                    : "bg-white text-[#660000] border-[#C9A227]/40 hover:border-[#C9A227] hover:shadow-md"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {club.name}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Category cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
          {filteredEvents.map((event, index) => {
            const minFee = Math.min(...event.subEvents.map((s) => s.fee));
            const clubLabel = CLUB_LABELS[event.club] ?? "Club";
            const hasFreeSubEvent = event.subEvents.some((s) => s.fee === 0);

            return (
              <ScrollReveal key={event.id} delay={index * 100}>
                <Card className="group relative overflow-hidden hover-lift ornate-border bg-card marble-texture border-2 border-border hover:border-secondary/50 transition-all duration-500 h-full cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xs md:text-sm font-semibold text-secondary bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20 backdrop-blur-sm">
                        {clubLabel}
                      </span>
                      <div className="flex flex-col items-end gap-1 text-primary font-bold">
                        <div className="flex items-center gap-1">
                          <Sparkles className="w-4 h-4" />
                          <span className="text-sm md:text-base">
                            {minFee === 0 ? "Includes Free Events" : `From ₹${minFee}`}
                          </span>
                        </div>
                        <span className="text-[10px] md:text-xs text-muted-foreground">
                          {event.subEvents.length} sub-event
                          {event.subEvents.length > 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl md:text-5xl">{event.icon}</div>
                      <div>
                        <CardTitle className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold group-hover:text-primary transition-colors">
                          {event.name}
                        </CardTitle>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-[#8A5C2E] mt-1">
                          {hasFreeSubEvent ? "Paid & Free Events" : "Paid Events"}
                        </p>
                      </div>
                    </div>

                    <CardDescription className="text-sm md:text-base leading-relaxed">
                      {event.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative">
                    <div className="space-y-2 mb-6 text-sm font-['EB_Garamond'] text-[#4A0000]/90">
                      <p>
                        <span className="font-semibold">What’s inside:</span>{" "}
                        {event.subEvents.map((s) => s.name).join(" • ")}
                      </p>
                    </div>

                    <div className="flex justify-between items-center gap-3">
                      <div className="flex flex-col text-xs md:text-sm text-muted-foreground">
                        <span>
                          {event.subEvents.length} sub-event
                          {event.subEvents.length > 1 ? "s" : ""} available
                        </span>
                        <span>
                          Minimum fee:{" "}
                          <strong>
                            {minFee === 0 ? "Free" : `₹${minFee}`}
                          </strong>
                        </span>
                      </div>

                      <Button
                        className="bg-gradient-gold text-black hover:shadow-gold text-sm md:text-base px-5 py-3 rounded-xl font-bold group-hover:scale-105 transition-transform duration-300"
                        onClick={() => openCategory(event)}
                      >
                        View & Register
                      </Button>
                    </div>

                    <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Modal with Google Form embeds */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#F5F1E8] rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border-4 border-[#C9A227] shadow-2xl p-8 md:p-10"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#660000] text-white hover:bg-[#8B0000] transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="text-6xl mb-3">{selectedEvent.icon}</div>
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#660000] mb-2">
                  {selectedEvent.name}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-3" />
                <p className="font-['EB_Garamond'] text-base md:text-lg text-[#4A0000]/90">
                  {selectedEvent.description}
                </p>
              </div>

              <div className="space-y-4 mb-4">
                {selectedEvent.subEvents.map((sub) => {
                  const isActive = activeSubEventId === sub.id;

                  return (
                    <div
                      key={sub.id}
                      className={`rounded-2xl border-2 p-4 md:p-5 transition-all duration-300 ${isActive
                          ? "border-[#C9A227] bg-white"
                          : "border-[#C9A227]/40 bg-white/70"
                        }`}
                    >
                      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2
                              className={`w-5 h-5 ${isActive
                                  ? "text-[#C9A227]"
                                  : "text-[#660000]/40"
                                }`}
                            />
                            <h3 className="font-['Playfair_Display'] text-xl text-[#660000]">
                              {sub.name}
                            </h3>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm font-['EB_Garamond'] text-[#4A0000]/90 mb-3">
                            <span className="inline-flex items-center gap-1">
                              <IndianRupee className="w-4 h-4" />
                              Fee: {sub.fee === 0 ? "Free" : `₹${sub.fee}`}
                            </span>
                            {typeof sub.slots === "number" && (
                              <span className="inline-flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                Slots: {sub.slots}
                              </span>
                            )}
                          </div>

                          <ul className="list-disc list-inside space-y-1 text-sm font-['EB_Garamond'] text-[#4A0000]/90">
                            {sub.rules.map((rule, idx) => (
                              <li key={idx}>{rule}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="w-full md:w-72 flex flex-col gap-3">
                          {sub.poc ? (
                            <div className="bg-gradient-to-r from-[#660000] to-[#8B0000] rounded-xl p-3 text-white">
                              <p className="font-['Playfair_Display'] text-sm mb-1">
                                Coordinator
                              </p>
                              <p className="flex items-center gap-2 text-xs md:text-sm">
                                <Users className="w-4 h-4" />
                                {sub.poc.name}
                              </p>
                              <p className="flex items-center gap-2 text-xs md:text-sm mt-1">
                                <Phone className="w-4 h-4" />
                                {sub.poc.phone}
                              </p>
                            </div>
                          ) : (
                            <div className="bg-[#F8F2E3] border border-[#E0D2B0] rounded-xl p-3 text-xs font-['EB_Garamond'] text-[#4A0000]/90">
                              Coordinator details will be announced soon.
                            </div>
                          )}

                          <Button
                            type="button"
                            onClick={() => setActiveSubEventId(sub.id)}
                            className="w-full py-2 rounded-full text-sm font-['EB_Garamond'] border-2 bg-[#7a0000] text-[#F5D68A] border-[#C9A227] hover:bg-[#8B0000] hover:text-white transition"
                          >
                            {isActive
                              ? "Scroll down to form"
                              : "Show Registration Form"}
                          </Button>

                          {sub.formUrl && (
                            <a
                              href={sub.formUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-[#660000] underline underline-offset-4 text-center"
                            >
                              Open Google Form in new tab
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Embedded Google Form */}
                      {isActive && (
                        <div className="mt-4 border-t border-[#E0D2B0] pt-3">
                          {sub.formUrl ? (
                            <>
                              <p className="font-['Playfair_Display'] text-lg text-[#660000] mb-2">
                                Registration Form – {sub.name}
                              </p>
                              <div className="w-full h-[520px] rounded-2xl overflow-hidden border border-[#E0D2B0] bg-white">
                                <iframe
                                  src={sub.formUrl}
                                  className="w-full h-full"
                                  loading="lazy"
                                  title={`Form for ${sub.name}`}
                                />
                              </div>
                              <p className="mt-2 text-[11px] font-['EB_Garamond'] text-[#8A5C2E]">
                                If the form is not visible,{" "}
                                <a
                                  href={sub.formUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline"
                                >
                                  click here to open it in a new tab
                                </a>
                                .
                              </p>
                            </>
                          ) : (
                            <p className="font-['EB_Garamond'] text-sm text-[#660000]">
                              Registration form link will be updated soon.
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
