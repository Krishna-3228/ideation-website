const TestSeriesHero = () => {
  return (
    <section className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              Ideation Welfare Society
            </p>

            <h1 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight text-blue-950">

              Ideation Test Series

            </h1>

            <p className="mt-8 text-lg leading-relaxed text-gray-600">

              Structured board-oriented test programs
              designed to improve performance,
              examination confidence,
              and academic discipline.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="bg-blue-950 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition">
                Enquire Now
              </button>

              <button className="border border-blue-950 text-blue-950 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
                View Schedule
              </button>

            </div>

            {/* STATS */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  Weekly
                </h3>

                <p className="text-gray-600 mt-2">
                  Assessments
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  Analysis
                </h3>

                <p className="text-gray-600 mt-2">
                  Performance Reports
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  Board Prep
                </h3>

                <p className="text-gray-600 mt-2">
                  Structured Testing
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">

            <div className="w-full max-w-md h-[500px] rounded-3xl border-2 border-dashed border-slate-300 bg-white flex items-center justify-center">

              <p className="text-slate-400 text-lg font-medium">
                Test Series Image Placeholder
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TestSeriesHero;