import {
  Trophy,
  Brain,
  Calculator,
  Sigma,
  FlaskConical,
  Atom,
} from "lucide-react";

const programmes = [
  {
    icon: Trophy,
    title: "Scholarship Exams",
  },
  {
    icon: Brain,
    title: "Olympiad Training",
  },
  {
    icon: Calculator,
    title: "Abacus",
  },
  {
    icon: Sigma,
    title: "Vedic Maths",
  },
  {
    icon: FlaskConical,
    title: "Science Activities",
  },
  {
    icon: Atom,
    title: "ISO / IMO",
  },
];

export default function SpecialProgrammesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-[0.25em]">
            Beyond The Classroom
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-900">
            Special Programmes Included
          </h2>

          <p className="mt-4 text-slate-600">
            Every student benefits from enrichment programmes designed to
            strengthen logical thinking, mathematical ability, scientific
            curiosity and competitive readiness.
          </p>
        </div>

        {/* Programme Cards */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {programmes.map((programme) => {
            const Icon = programme.icon;

            return (
              <div
                key={programme.title}
                className="
                  group
                  bg-slate-50
                  border border-slate-200
                  rounded-2xl
                  p-5
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-200
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    w-12 h-12
                    mx-auto
                    rounded-xl
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-blue-900 leading-snug">
                  {programme.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}