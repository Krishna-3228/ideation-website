const JournalOverview = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              About The Journal
            </p>

            <h2 className="mt-4 text-4xl font-bold text-blue-950 leading-tight">

              Promoting Research,
              Innovation, and Scholarly Contribution

            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">

              The International Journal of Research
              is an academic publication initiative
              established under Ideation Welfare Society
              to encourage research-oriented thinking
              and scholarly contribution.

            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              The journal aims to provide
              a platform for researchers,
              educators,
              academicians,
              and scholars
              to publish innovative and interdisciplinary research work.

            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              Through quality publications
              and academic collaboration,
              the journal promotes intellectual growth,
              knowledge sharing,
              and research excellence.

            </p>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-slate-50 rounded-3xl p-10 border border-gray-100">

              <h3 className="text-3xl font-bold text-blue-950">
                Journal Objectives
              </h3>

              <div className="mt-10 space-y-8">

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Encourage Research Culture
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Promote research-oriented thinking
                    and academic contribution across disciplines.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Support Knowledge Sharing
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Provide a platform for scholars and researchers
                    to share innovative ideas and findings.
                  </p>

                </div>

                <div>

                  <h4 className="text-xl font-semibold text-blue-950">
                    Promote Academic Excellence
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Encourage quality publications,
                    scholarly collaboration,
                    and interdisciplinary research initiatives.
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

export default JournalOverview;