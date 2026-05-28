const TestSeriesOverview = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              About The Test Series
            </p>

            <h2 className="mt-4 text-4xl font-bold text-blue-950 leading-tight">

              Structured Assessment
              for Better Academic Performance

            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">

              Ideation Test Series is designed to help students
              improve examination confidence,
              academic discipline,
              and subject understanding
              through regular structured assessments.

            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              Our board-oriented testing system helps students
              identify weak areas,
              strengthen conceptual clarity,
              and improve performance gradually
              through continuous evaluation.

            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              Regular practice tests,
              performance analysis,
              and revision-oriented assessments
              prepare students effectively
              for school and board examinations.

            </p>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-slate-50 rounded-3xl p-10 border border-gray-100">

              <h3 className="text-3xl font-bold text-blue-950">
                Why Regular Testing Matters
              </h3>

              <div className="mt-10 space-y-8">

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Improves Exam Confidence
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Frequent testing helps students become comfortable
                    with examination environments and question patterns.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Identifies Weak Areas
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Performance analysis helps students focus on
                    concepts and subjects that require improvement.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Builds Academic Discipline
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Consistent testing encourages revision habits,
                    time management,
                    and structured preparation.
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

export default TestSeriesOverview;