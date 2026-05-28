import ProgramCard from "../../components/ProgramCard";

import { academicPrograms } from "../../data/academicPrograms";

const AcademicPrograms = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Academic Programme Offered
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Building Strong Subject Foundations
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Our curriculum combines conceptual understanding,
            practical learning, and board-oriented preparation
            to help students excel academically.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {academicPrograms.map((program) => (
            <ProgramCard
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

export default AcademicPrograms;