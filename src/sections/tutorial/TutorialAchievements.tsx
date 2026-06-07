import topper2024 from "../../assets/tutorial/achievements/topper-2024.jpeg";
import topper2023 from "../../assets/tutorial/achievements/topper-2023.jpeg";
import testSeries from "../../assets/tutorial/achievements/test-series.jpeg";

const posters = [
  {
    image: topper2024,
    title: "District Topper 2023-24",
  },
  {
    image: topper2023,
    title: "District Topper 2022-23",
  },
  {
    image: testSeries,
    title: "SSC Test Series Results",
  },
];

const TutorialAchievements = () => {
  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Academic Excellence
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Results That Speak For Themselves
          </h2>

          <p className="mt-4 text-slate-600">
            For more than 15 years, Ideation Tutorial has helped
            students achieve academic success through concept-based
            learning, continuous evaluation and dedicated mentorship.
          </p>

        </div>

        {/* Posters */}

        <div className="mt-10 grid gap-5 lg:grid-cols-3">

          {posters.map((poster) => (
            <div
              key={poster.title}
              className="
                overflow-hidden
                rounded-2xl
                bg-white
                border
                border-slate-200
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <img
                src={poster.image}
                alt={poster.title}
                className="w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-slate-900">
                  {poster.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TutorialAchievements;