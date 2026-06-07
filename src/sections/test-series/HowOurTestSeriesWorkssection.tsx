import {
  FileText,
  CheckCircle2,
  MessageSquareMore,
  TrendingUp,
} from "lucide-react";

import processBg from "../../assets/test-series/process-bg.jpeg";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Unit Tests",
    description:
      "Students regularly attempt structured tests based on completed portions and board exam patterns.",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "Expert Evaluation",
    description:
      "Answer sheets are carefully reviewed by experienced faculty with detailed scoring and feedback.",
  },
  {
    number: "03",
    icon: MessageSquareMore,
    title: "Mistake Discussion",
    description:
      "Common mistakes and weak areas are discussed after every test to improve understanding.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Performance Improvement",
    description:
      "Students refine their preparation strategy and steadily improve confidence and performance.",
  },
];

export default function HowOurTestSeriesWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-16 lg:py-20"
      style={{
        backgroundImage: `url(${processBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/75 to-[#0f172a]/90" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto mb-12 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Our Process
          </p>

          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">
            How Our Test Series Works
          </h2>

          <p className="text-lg text-slate-300">
            A structured cycle of testing, evaluation and improvement
            designed to prepare students for board examinations.
          </p>

        </div>

        {/* Desktop Timeline */}

        <div className="hidden lg:block">

          <div
            className="
              rounded-3xl
              border
              border-white/20
              bg-white/10
              backdrop-blur-md
              p-10
            "
          >
            <div className="relative">

              {/* Timeline Line */}

              <div className="absolute left-0 right-0 top-16 h-1 bg-white/20" />

              <div className="relative grid grid-cols-4 gap-8">

                {steps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="text-center"
                    >
                      {/* Circle */}

                      <div
                        className="
                          relative
                          mx-auto
                          mb-6
                          flex
                          h-32
                          w-32
                          items-center
                          justify-center
                          rounded-full
                          bg-white/95
                          shadow-xl
                        "
                      >
                        <Icon
                          size={36}
                          className="text-orange-500"
                        />

                        <span
                          className="
                            absolute
                            -right-2
                            -top-2
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-900
                            text-sm
                            font-bold
                            text-white
                          "
                        >
                          {step.number}
                        </span>
                      </div>

                      <h3 className="mb-3 text-xl font-semibold text-white">
                        {step.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {step.description}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

        {/* Mobile Layout */}

        <div className="space-y-4 lg:hidden">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-md
                  p-5
                "
              >
                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/90
                    "
                  >
                    <Icon
                      size={24}
                      className="text-orange-500"
                    />
                  </div>

                  <div>

                    <span className="text-sm font-semibold text-orange-400">
                      STEP {step.number}
                    </span>

                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>

                  </div>

                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}