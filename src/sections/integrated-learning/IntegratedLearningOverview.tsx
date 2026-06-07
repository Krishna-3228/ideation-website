const features = [
  "Concept-Based Learning",
  "Critical Thinking",
  "Multi-Board Curriculum",
  "Practical Understanding",
];

const IntegratedLearningOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-[0.2em]">
            About The Program
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-950">
            A New Approach Towards Learning
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 leading-relaxed">
            Designed for students from 5th to 7th standard, the
            Integrated Learning Program focuses on conceptual
            understanding, curiosity, practical exploration and
            strong academic foundations across multiple boards.
          </p>

        </div>

        {/* Features */}

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {features.map((feature) => (
            <div
              key={feature}
              className="
                px-5
                py-3
                rounded-full
                bg-orange-50
                border
                border-orange-100
                text-slate-700
                font-medium
              "
            >
              {feature}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default IntegratedLearningOverview;