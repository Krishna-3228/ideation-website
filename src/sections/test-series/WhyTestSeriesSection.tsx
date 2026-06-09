// sections/test-series/WhyTestSeriesSection.tsx

import {
  PencilLine,
  TimerReset,
  Target,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: PencilLine,
    title: "Improves Writing Accuracy",
    description:
      "Regular answer-writing practice reduces mistakes and improves presentation.",
  },
  {
    icon: TimerReset,
    title: "Builds Exam Confidence",
    description:
      "Students become comfortable with exam pressure, timing and question patterns.",
  },
  {
    icon: Target,
    title: "Identifies Weak Areas",
    description:
      "Frequent assessments highlight concepts that require additional attention.",
  },
  {
    icon: TrendingUp,
    title: "Boosts Performance",
    description:
      "Continuous evaluation and improvement lead to better board examination results.",
  },
];

export default function WhyTestSeriesSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Why Test Series Matters
          </p>

          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-blue-900">
            Regular Testing Creates Better Results
          </h2>

          <p className="text-lg text-slate-600">
            Consistent assessments help students transform knowledge into
            examination performance through practice, evaluation and
            improvement.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <div className="rounded-3xl bg-blue-900 p-8 text-white">
              <h3 className="mb-4 text-3xl font-bold">
                Practice Like The Real Exam
              </h3>

              <p className="mb-6 text-slate-300">
                Our structured test series familiarises students with board
                examination patterns, time management and answer-writing
                expectations.
              </p>

              <div className="space-y-3">
                {[
                  "Exam-oriented preparation",
                  "Board-style question papers",
                  "Detailed evaluation",
                  "Performance tracking",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-orange-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                "SSC Pattern Tests",
                "Chapter-wise Tests",
                "Revision Tests",
                "Performance Reports",
              ].map((item) => (
                <div
                  key={item}
                  className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-slate-200
        bg-slate-50
        px-4
        py-3
      "
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />

                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-orange-200 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                    <Icon
                      size={24}
                      className="text-orange-500"
                    />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-blue-900">
                    {benefit.title}
                  </h3>

                  <p className="text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}