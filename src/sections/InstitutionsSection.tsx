import { Link } from "react-router-dom";

import institutionsBg from "../assets/institution-section-bg.jpeg";

const institutions = [
  {
    title: "Tutorial",
    subtitle: "8th–12th Standard",
    description: "Concept-based coaching",
    route: "/institutions/tutorial",
  },
  {
    title: "Integrated Learning",
    subtitle: "5th–7th Standard",
    description: "Strong academic foundations",
    route: "/institutions/integrated-learning",
  },
  {
    title: "Abhyasika",
    subtitle: "Study Environment",
    description: "Focused learning spaces",
    route: "/institutions/abhyasika",
  },
  {
    title: "Test Series",
    subtitle: "SSC Preparation",
    description: "Regular testing & evaluation",
    route: "/institutions/test-series",
  },
];

const InstitutionsSection = () => {
  return (
    <section
      id="institutions"
      className="relative overflow-hidden py-14"
      style={{
        backgroundImage: `url(${institutionsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Our Institutions
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Learning Pathways For Every Student
          </h2>

          <p className="mt-4 text-slate-300">
            From foundation programmes to coaching, study support and
            examination preparation.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">

          {institutions.map((institution) => (
            <Link
              key={institution.route}
              to={institution.route}
              className="
                group
                aspect-square
                rounded-2xl
                bg-white/95
                backdrop-blur-sm
                p-5
                flex
                flex-col
                justify-between
                border
                border-white/20
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              {/* Accent */}

              <div
                className="
                  h-1.5
                  w-12
                  rounded-full
                  bg-blue-600
                  transition-all
                  duration-300
                  group-hover:w-20
                "
              />

              {/* Content */}

              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-blue-600
                    font-semibold
                  "
                >
                  {institution.subtitle}
                </p>

                <h3
                  className="
                    mt-3
                    text-xl
                    font-bold
                    text-slate-900
                    leading-tight
                  "
                >
                  {institution.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    text-slate-600
                  "
                >
                  {institution.description}
                </p>
              </div>

              {/* CTA */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-blue-600
                  font-semibold
                  text-sm
                "
              >
                Explore

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default InstitutionsSection;