import ResearchAreaCard from "../../components/ResearchAreaCard";

import { researchAreas } from "../../data/researchAreas";

const ResearchAreas = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Research Areas
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Encouraging Diverse Academic Contributions
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

            The journal welcomes scholarly contributions
            across multiple disciplines
            that promote innovation,
            intellectual growth,
            and research excellence.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {researchAreas.map((area) => (
            <ResearchAreaCard
              key={area.title}
              title={area.title}
              description={area.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default ResearchAreas;