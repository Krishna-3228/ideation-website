import PublicationCard from "../../components/PublicationCard";

import { publicationProcess } from "../../data/publicationProcess";

const PublicationProcess = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Publication Process
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Structured and Professional Publication Workflow
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Our publication process is designed
            to maintain academic quality,
            research integrity,
            and professional editorial standards.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {publicationProcess.map((step) => (
            <PublicationCard
              key={step.title}
              title={step.title}
              description={step.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default PublicationProcess;