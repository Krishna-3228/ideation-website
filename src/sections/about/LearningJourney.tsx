import {
  BookOpen,
  GraduationCap,
  Library,
  ClipboardCheck,
} from "lucide-react";

const journey = [
  {
    icon: BookOpen,
    title: "Integrated Learning",
    subtitle: "5th – 7th Standard",
    description:
      "Building curiosity, strong fundamentals and concept-based understanding.",
  },
  {
    icon: GraduationCap,
    title: "Ideation Tutorial",
    subtitle: "8th – 12th Standard",
    description:
      "Academic guidance, board preparation and subject mastery.",
  },
  {
    icon: Library,
    title: "Ideation Abhyasika",
    subtitle: "Study Support",
    description:
      "Disciplined study environment with focus and consistency.",
  },
  {
    icon: ClipboardCheck,
    title: "Ideation Test Series",
    subtitle: "Board Preparation",
    description:
      "Regular assessments, evaluation and performance improvement.",
  },
];

export default function LearningJourneySection() {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}

        <div className="mb-10 max-w-3xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Student Journey
          </p>

          <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">
            A Complete Learning Ecosystem
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Our institutions are designed to support students at
            different stages of their academic journey, creating a
            structured pathway from foundational learning to board
            examination success.
          </p>

        </div>

        {/* Desktop Timeline */}

        <div className="hidden lg:flex items-start justify-between gap-4">

          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative flex-1"
              >
                {/* Connector */}

                {index < journey.length - 1 && (
                  <div
                    className="
                      absolute
                      top-8
                      left-[60%]
                      right-[-40%]
                      h-[2px]
                      bg-slate-300
                    "
                  />
                )}

                <div
                  className="
                    relative
                    z-10
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                  "
                >
                  <div
                    className="
                      mb-4
                      inline-flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-orange-100
                    "
                  >
                    <Icon
                      size={22}
                      className="text-orange-500"
                    />
                  </div>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-orange-500">
                    {item.subtitle}
                  </p>

                  <h3 className="mb-3 text-lg font-semibold text-blue-950">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet Stack */}

        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {journey.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                "
              >
                <div
                  className="
                    mb-4
                    inline-flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-100
                  "
                >
                  <Icon
                    size={22}
                    className="text-orange-500"
                  />
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-orange-500">
                  {item.subtitle}
                </p>

                <h3 className="mb-2 text-lg font-semibold text-blue-950">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}