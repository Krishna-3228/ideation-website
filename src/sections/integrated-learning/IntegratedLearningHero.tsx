import heroImage from "../../assets/integrated-learning/microscope.jpeg";

const boards = [
  "IB",
  "IGCSE",
  "ICSE",
  "CBSE",
  "State Board",
];

const stats = [
  {
    value: "5",
    label: "Boards",
  },
  {
    value: "5–7",
    label: "Standards",
  },
  {
    value: "100%",
    label: "Concept Based",
  },
];

const IntegratedLearningHero = () => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Content */}

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-[0.2em]">
              Ideation Welfare Society
            </p>

            <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
              Integrated
              <span className="block text-orange-500">
                Learning Program
              </span>
            </h1>

            <p className="mt-4 text-xl font-medium text-slate-700">
              5th • 6th • 7th Standard
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">
              One Course • Five Boards
            </p>

            <p className="mt-2 text-slate-600 leading-relaxed max-w-xl">
              Building strong foundations through concept-based
              learning, critical thinking, practical exploration,
              and academic confidence.
            </p>

            {/* Boards */}

            <div className="mt-5 flex flex-wrap gap-2">

              {boards.map((board) => (
                <span
                  key={board}
                  className="
                    px-3
                    py-1.5
                    rounded-full
                    bg-orange-100
                    text-orange-700
                    text-sm
                    font-medium
                  "
                >
                  {board}
                </span>
              ))}

            </div>

            {/* Stats */}

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">

              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-2xl font-black text-blue-950">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-3">

              <button
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-orange-500
                  text-white
                  font-semibold
                  hover:bg-orange-600
                  transition
                "
              >
                Enquire Now
              </button>

              <button
                className="
                  px-6
                  py-3
                  rounded-xl
                  border
                  border-slate-300
                  text-slate-700
                  font-semibold
                  hover:bg-white
                  transition
                "
              >
                Learn More
              </button>

            </div>

          </div>

          {/* Image */}

          <div>

            <img
              src={heroImage}
              alt="Integrated Learning Program"
              className="
                w-full
                h-[420px]
                object-cover
                rounded-3xl
                shadow-xl
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default IntegratedLearningHero;