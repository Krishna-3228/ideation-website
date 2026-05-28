import TestBenefitCard from "../../components/TestBenefitCard";

import { testSeriesBenefits } from "../../data/testSeriesBenefits";

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Student Benefits
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Building Confidence Through Regular Practice
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Our structured test series helps students
            improve confidence,
            academic discipline,
            examination readiness,
            and long-term performance.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testSeriesBenefits.map((benefit) => (
            <TestBenefitCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default BenefitsSection;