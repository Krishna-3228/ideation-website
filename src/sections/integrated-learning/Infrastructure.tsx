import InfrastructureCard from "../../components/integrated-learning/InfrastructureCard";

import { infrastructure } from "../../data/integrated-learning/infrastructure";

const Infrastructure = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Infrastructure
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Creating the Right Learning Environment
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Our infrastructure is designed to support
            conceptual learning, practical understanding,
            and focused academic development.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {infrastructure.map((item) => (
            <InfrastructureCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Infrastructure;