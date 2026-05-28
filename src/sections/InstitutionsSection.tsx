import InstitutionCard from "../components/InstitutionCard";

import { institutions } from "../data/institutions";

const InstitutionsSection = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Our Institutions
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Educational Programs Under
            Ideation Welfare Society
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Providing concept-based education,
            integrated learning, academic guidance,
            and student development initiatives
            across multiple educational domains.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {institutions.map((institution) => (
            <InstitutionCard
              key={institution.title}
              title={institution.title}
              description={institution.description}
              route={institution.route}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default InstitutionsSection;