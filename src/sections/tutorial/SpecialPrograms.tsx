import classroomImage from "../../assets/tutorial/classroom.jpeg";
import { specialPrograms } from "../../data/tutorial/specialPrograms";

const SpecialPrograms = () => {
  return (
    <section className="relative overflow-hidden py-14 bg-slate-50">
      {/* Background Image */}

      <img
        src={classroomImage}
        alt=""
        aria-hidden="true"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-[0.5]
        "
      />

      {/* Optional Gradient Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-white/60
          to-slate-50/80
        "
      />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Special Programmes
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-950">
            Beyond Traditional Coaching
          </h2>

          <p className="mt-4 text-slate-600">
            Concept-based learning, competitive examination preparation,
            skill development and continuous academic support.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {specialPrograms.map((program) => (
            <div
              key={program.title}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white/90
                backdrop-blur-sm
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-orange-200
                hover:shadow-lg
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-orange-100
                  text-xl
                "
              >
                {program.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-blue-950">
                {program.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {program.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SpecialPrograms;