import {
  Lightbulb,
  BookOpen,
  PenTool,
  ClipboardCheck,
  Trophy,
} from "lucide-react";

const philosophy = [
  {
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "Learning begins with asking questions and exploring ideas.",
  },
  {
    icon: BookOpen,
    title: "Understanding",
    description:
      "Strong concepts create the foundation for long-term success.",
  },
  {
    icon: PenTool,
    title: "Practice",
    description:
      "Consistent effort transforms knowledge into ability.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluation",
    description:
      "Regular feedback helps students identify and improve weaknesses.",
  },
  {
    icon: Trophy,
    title: "Confidence",
    description:
      "Preparation and improvement lead to academic confidence.",
  },
];

export default function EducationalPhilosophySection() {
  return (
    <section className="bg-slate-50 py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}

        <div className="mb-10 max-w-3xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Our Philosophy
          </p>

          <h2 className="text-3xl font-bold text-blue-950 md:text-4xl">
            How Learning Happens At Ideation
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We believe meaningful learning is a journey. Students
            progress from curiosity to confidence through a structured
            process of understanding, practice and continuous improvement.
          </p>

        </div>

        {/* Desktop Journey */}

        <div className="hidden lg:flex items-center justify-between">

          {philosophy.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center"
              >
                <div className="w-44 text-center">

                  <div
                    className="
                      mx-auto
                      mb-4
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      shadow-sm
                    "
                  >
                    <Icon
                      size={28}
                      className="text-orange-500"
                    />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-blue-950">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                </div>

                {index < philosophy.length - 1 && (
                  <div
                    className="
                      mx-2
                      h-[2px]
                      w-12
                      bg-slate-300
                    "
                  />
                )}
              </div>
            );
          })}

        </div>

        {/* Mobile/Tablet Vertical Timeline */}

        <div className="flex flex-col items-center lg:hidden">
          {philosophy.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center w-full max-w-xs text-center"
              >
                {/* Circular Badge */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-sm
                  "
                >
                  <Icon
                    size={28}
                    className="text-orange-500"
                  />
                </div>

                <h3 className="mt-3 text-lg font-semibold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                {/* Connector Line */}
                {index < philosophy.length - 1 && (
                  <div
                    className="
                      my-4
                      h-8
                      w-[2px]
                      bg-slate-300
                    "
                  />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}