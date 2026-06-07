import { specialPrograms } from "../../data/tutorial/specialPrograms";

const SpecialPrograms = () => {
  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%)",
      }}
    >      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-orange-500 font-semibold uppercase tracking-[0.2em]">
            Special Programmes
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-blue-950">
            Beyond Traditional Coaching
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Ideation focuses on building strong academic foundations through
            concept-based learning, competitive examination preparation,
            skill-development programmes, and continuous academic support.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {specialPrograms.map((program) => (
            <div
              key={program.title}
              className="
                bg-white
                border border-slate-200
                rounded-3xl
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
                {program.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-blue-950">
                {program.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
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