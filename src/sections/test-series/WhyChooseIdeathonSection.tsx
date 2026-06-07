const features = [
  {
    title: "Board Exam Focus",
    description:
      "Designed around SSC board patterns with regular practice and exam-oriented preparation.",
  },
  {
    title: "Detailed Evaluation",
    description:
      "Every paper is checked carefully with feedback to help students improve continuously.",
  },
  {
    title: "Error Analysis",
    description:
      "Students identify mistakes and strengthen weak areas before final examinations.",
  },
  {
    title: "Exam Discipline",
    description:
      "Regular timed tests develop confidence, speed, accuracy and exam temperament.",
  },
];

export default function WhyChooseIdeationSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            What Makes Ideation Different
          </p>

          <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">
            Structured Practice With Real Results
          </h2>

          <p className="text-base text-slate-600">
            A systematic test series that helps students improve performance,
            confidence and board examination readiness.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                transition-all
                hover:-translate-y-1
                hover:border-orange-200
                hover:shadow-lg
              "
            >
              <h3 className="mb-2 text-lg font-semibold text-blue-900">
                {feature.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Coverage Strip */}
        <div className="mt-8 rounded-3xl bg-blue-900 p-6 text-white">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-orange-300">
                Coverage
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Complete Academic Support
              </h3>

              <p className="mt-2 max-w-xl text-sm text-slate-300">
                Regular tests, performance tracking and guided revision
                throughout the academic year.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
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
                    gap-2
                    rounded-xl
                    bg-white/10
                    px-3
                    py-2
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-orange-400" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}