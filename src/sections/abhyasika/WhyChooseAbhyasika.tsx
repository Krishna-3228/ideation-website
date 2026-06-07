import {
  BookOpen,
  ClipboardCheck,
  Clock3,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Disciplined Environment",
    description:
      "Fixed study schedules and a distraction-free atmosphere help students stay focused every day.",
  },
  {
    icon: ClipboardCheck,
    title: "Academic Supervision",
    description:
      "Regular monitoring and guidance ensure consistency, accountability and better study habits.",
  },
  {
    icon: BookOpen,
    title: "Focused Self-Study",
    description:
      "Students develop independent learning skills through structured and uninterrupted study time.",
  },
  {
    icon: Users,
    title: "Personal Guidance",
    description:
      "Support is available whenever students need help with planning, doubts or academic challenges.",
  },
];

export default function WhyChooseAbhyasikaSection() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Why Students Choose Abhyasika
          </p>

          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            A Structured Space For Consistent Learning
          </h2>

          <p className="mt-4 text-base text-slate-600">
            Abhyasika provides the discipline, supervision and study
            environment that students often need to stay focused and
            make steady academic progress.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    mb-4
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-50
                  "
                >
                  <Icon
                    size={22}
                    className="text-orange-500"
                  />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-blue-900">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}