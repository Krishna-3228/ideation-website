import FeatureCard from "../components/FeatureCard";

import { features } from "../data/features";

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Why Choose Ideation
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Focused on Academic Excellence
            and Student Development
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our integrated approach combines
            conceptual understanding, practical learning,
            and continuous academic support
            to help students achieve their full potential.
          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturesSection;