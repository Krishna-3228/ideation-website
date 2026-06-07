import resultsPoster from "../../assets/test-series/result-poster.jpeg";

export default function StudentResultsSection() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Student Results
          </p>

          <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">
            Consistent Performance Through Structured Practice
          </h2>

          <p className="text-base text-slate-600">
            Regular testing, detailed evaluation and disciplined preparation
            help students translate effort into measurable academic results.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <img
              src={resultsPoster}
              alt="Ideation Test Series Student Results"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="mb-2 text-lg font-semibold text-blue-900">
                  Performance Tracking
                </h3>

                <p className="text-slate-600">
                  Regular assessments help students understand strengths,
                  identify weak areas and improve consistently throughout the
                  academic year.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="mb-2 text-lg font-semibold text-blue-900">
                  Exam Confidence
                </h3>

                <p className="text-slate-600">
                  Repeated exposure to board-style examinations builds
                  familiarity with exam patterns, time management and answer
                  writing discipline.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="mb-2 text-lg font-semibold text-blue-900">
                  Real Academic Outcomes
                </h3>

                <p className="text-slate-600">
                  Student achievements reflect the effectiveness of structured
                  preparation, continuous feedback and focused revision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}