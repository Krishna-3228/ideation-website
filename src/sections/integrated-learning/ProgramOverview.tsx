const ProgramOverview = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              About The Program
            </p>

            <h2 className="mt-4 text-4xl font-bold text-blue-950 leading-tight">

              A New Approach Towards
              Learning

            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">

              The Integrated Learning Program is designed
              for students from 5th to 7th standard
              studying in IB, IGCSE, ICSE, CBSE,
              and State Board schools.

            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              Instead of rote memorisation,
              students learn concepts through
              understanding, logic, practical orientation,
              and real academic foundations.

            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              The curriculum combines
              international-style conceptual learning
              with board exam readiness,
              helping students build strong academic confidence
              from an early stage.

            </p>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-slate-50 rounded-3xl p-10 border border-gray-100">

              <h3 className="text-3xl font-bold text-blue-950">
                Why This Program Matters
              </h3>

              <div className="mt-10 space-y-8">

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Strong Academic Foundations
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Students who develop conceptual clarity
                    in early standards perform significantly
                    better in higher classes and competitive learning environments.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Multi-Board Compatibility
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    The syllabus structure is designed to support
                    IB, IGCSE, ICSE, CBSE and State Board students
                    through one integrated academic approach.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Concept-Based Learning
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Every topic is taught from first principles
                    to improve understanding,
                    confidence, and long-term retention.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProgramOverview;