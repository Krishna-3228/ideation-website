const IntegratedHero = () => {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              Ideation Welfare Society
            </p>

            <h1 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight text-blue-950">

              Integrated Learning Program

            </h1>

            <p className="mt-8 text-lg leading-relaxed text-gray-600">

              A concept-based integrated academic
              program designed for students from
              5th to 7th standard across
              IB, IGCSE, ICSE, CBSE and State Boards.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="bg-blue-950 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition">
                Enquire Now
              </button>

              <button className="border border-blue-950 text-blue-950 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
                Download Brochure
              </button>

            </div>

            {/* STATS */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  5 Boards
                </h3>

                <p className="text-gray-600 mt-2">
                  Integrated Curriculum
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  5th–7th
                </h3>

                <p className="text-gray-600 mt-2">
                  Student Programs
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  Since 2009
                </h3>

                <p className="text-gray-600 mt-2">
                  Educational Excellence
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <div className="bg-blue-950 rounded-3xl p-8 text-white">

              <h2 className="text-3xl font-bold">
                One Course, Five Boards
              </h2>

              <p className="mt-6 text-gray-300 leading-relaxed">

                Our integrated approach combines
                conceptual understanding,
                academic excellence,
                and board-oriented preparation
                in a unified learning system.

              </p>

              <div className="mt-10 space-y-4">

                <div className="bg-white/10 rounded-xl p-4">
                  IB Curriculum Support
                </div>

                <div className="bg-white/10 rounded-xl p-4">
                  CBSE & ICSE Preparation
                </div>

                <div className="bg-white/10 rounded-xl p-4">
                  Concept-Based Learning
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default IntegratedHero;