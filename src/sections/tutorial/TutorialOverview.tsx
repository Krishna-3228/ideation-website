const TutorialOverview = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              About Ideation Tutorial
            </p>

            <h2 className="mt-4 text-4xl font-bold text-blue-950 leading-tight">

              Concept-Based Coaching
              for Academic Excellence

            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">

              Ideation Tutorial provides structured academic coaching
              for students from 8th to 12th standard
              across IB, IGCSE, ICSE, CBSE,
              and State Board curricula.

            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              Our teaching approach focuses on
              conceptual understanding,
              logical thinking,
              and strong academic foundations
              instead of rote memorisation.

            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              With experienced faculty,
              student-focused mentorship,
              and continuous academic guidance,
              we help students improve confidence,
              performance,
              and examination readiness.

            </p>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-slate-50 rounded-3xl p-10 border border-gray-100">

              <h3 className="text-3xl font-bold text-blue-950">
                What Makes Us Different
              </h3>

              <div className="mt-10 space-y-8">

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Concept-Based Learning
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Students understand concepts deeply
                    through logic, explanation,
                    and practical understanding.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Experienced Faculty
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Qualified teachers provide academic guidance,
                    mentoring,
                    and continuous student support.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Board-Oriented Preparation
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Students are prepared effectively
                    for school academics,
                    board examinations,
                    and scholarship-oriented learning.
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

export default TutorialOverview;    