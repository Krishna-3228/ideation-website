import { Link } from "react-router-dom";
import institutionsBg from "../assets/institution-section-bg.jpeg";

const institutions = [
  {
    id: "tutorial",
    title: "Ideation Tutorial",
    tagline: "8th – 12th Standard",
    description:
      "Concept-based coaching classes across IB, IGCSE, ICSE, CBSE and State Board.",
    route: "/institutions/tutorial",
  },
  {
    id: "integrated-learning",
    title: "Integrated Learning Program",
    tagline: "5th – 7th Standard",
    description:
      "Building strong foundations through curiosity, exploration, and concept-based learning.",
    route: "/institutions/integrated-learning",
  },
  {
    id: "abhyasika",
    title: "Ideation Abhyasika",
    tagline: "Structured Study Environment",
    description:
      "A disciplined academic environment focused on productive study habits and guidance.",
    route: "/institutions/abhyasika",
  },
];

export default function InstitutionsSection() {
  return (
    <section
      id="institutions"
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage: `url(${institutionsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-slate-950/80" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-blue-300 font-semibold">
            Our Institutions
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Educational Programs Under
            <br />
            Ideation Welfare Society
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
            A diverse ecosystem of educational initiatives dedicated to
            academic excellence, student development, concept-based
            learning, and lifelong growth.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {institutions.map((institution, index) => (
            <Link
              key={institution.id}
              to={institution.route}
              className="
                group
                bg-white/95
                backdrop-blur-sm
                rounded-3xl
                p-8
                hover:-translate-y-2
                transition-all
                duration-300
                shadow-xl
              "
            >
              {/* Number */}

              <div className="text-6xl font-black text-blue-100">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Tagline */}

              <p className="mt-6 text-sm uppercase tracking-widest text-blue-600 font-semibold">
                {institution.tagline}
              </p>

              {/* Title */}

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                {institution.title}
              </h3>

              {/* Description */}

              <p className="mt-4 text-slate-600 leading-relaxed">
                {institution.description}
              </p>

              {/* CTA */}

              <div
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-blue-600
                  font-semibold
                "
              >
                Explore Program
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="text-center mt-14">
          <Link
            to="/about"
            className="
              inline-flex
              items-center
              gap-2
              border
              border-white/30
              px-6
              py-3
              rounded-xl
              text-white
              font-semibold
              hover:bg-white
              hover:text-slate-900
              transition
            "
          >
            Learn More About The Society
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}