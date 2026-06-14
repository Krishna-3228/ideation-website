import { BookOpen, Trophy, Calendar, Compass, Activity, ChevronDown } from "lucide-react";

export default function LifeHero() {
  const categories = [
    {
      name: "Academics & Learning",
      id: "learning",
      icon: BookOpen,
      description: "Concept-based learning and classroom activities",
    },
    {
      name: "Sports & Athletics",
      id: "sports",
      icon: Activity,
      description: "Physical education, team sports, and competitions",
    },
    {
      name: "Excursions & Trips",
      id: "trips",
      icon: Compass,
      description: "Educational tours, field trips, and outdoor adventures",
    },
    {
      name: "Events & Celebrations",
      id: "events",
      icon: Calendar,
      description: "Cultural festivals, science exhibitions, and gatherings",
    },
    {
      name: "Achievements & Awards",
      id: "achievements",
      icon: Trophy,
      description: "Celebrating student excellence and competition winners",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200/60 py-12 sm:py-16 text-slate-800">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-96 h-96 bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-4 shadow-xxs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Vibrant Campus Life
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 leading-tight">
          Life at{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Ideation Welfare Society
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
          Step inside our world of holistic development. We believe in nurturing talent,
          igniting curiosity, and creating lasting memories through academic excellence,
          sports, cultural events, and outdoor experiences.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-6xl mx-auto mt-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className="group relative flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 text-xs sm:text-sm">
                  {cat.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1.5 line-clamp-2">
                  {cat.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => scrollToSection("learning")}
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            aria-label="Scroll to Academics & Learning"
          >
            <ChevronDown className="w-5 h-5 text-blue-500 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
