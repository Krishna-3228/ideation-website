import SpecialProgramCard from "../../components/tutorial/SpecialProgramCard";

import { specialPrograms } from "../../data/tutorial/specialPrograms";

const SpecialPrograms = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Special Programs
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Academic Support Beyond Regular Coaching
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Our specialised academic programs help students
            strengthen conceptual understanding,
            competitive readiness,
            and examination performance.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {specialPrograms.map((program) => (
            <SpecialProgramCard
              key={program.title}
              title={program.title}
              description={program.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default SpecialPrograms;