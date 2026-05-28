import FacilityCard from "../../components/abhyasika/FacilityCard";

import { abhyasikaFacilities } from "../../data/abhyasika/abhyasikaFacilities";

const FacilitiesSection = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Facilities
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Designed for Focused Study
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Our study environment is carefully designed
            to help students maintain concentration,
            academic discipline,
            and productive learning habits.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {abhyasikaFacilities.map((facility) => (
            <FacilityCard
              key={facility.title}
              title={facility.title}
              description={facility.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default FacilitiesSection;