import SectionHeading from "../components/SectionHeading";

import topper2023 from "../assets/achievements/topper-2023.jpeg";
import topper2024 from "../assets/achievements/topper-2024.jpeg";
import testSeries from "../assets/achievements/test-series-results.jpeg";

const highlights = [
  {
    value: "98%",
    title: "District Topper",
    description: "CBSE 2023-24",
  },
  {
    value: "97%",
    title: "District Topper",
    description: "CBSE 2022-23",
  },
  {
    value: "98.60%",
    title: "Test Series",
    description: "Highest Score",
  },
  {
    value: "15+",
    title: "Years",
    description: "Since 2009",
  },
];

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

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="bg-slate-50 py-14"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          eyebrow="Achievements"
          title="Building Academic Excellence Since 2009"
          subtitle="Consistent academic success across board examinations, test series programmes and student development initiatives."
        />

        {/* Posters */}

        <div className="mt-10 grid gap-5 lg:grid-cols-3 items-start">

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
                className="
                  w-full
                  h-auto
                  block
                "
              />
            </div>
          ))}

        </div>

        {/* Stats */}

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">

          {highlights.map((item) => (
            <div
              key={item.title}
              className="
                rounded-xl
                border
                border-slate-200
                bg-white
                p-4
                text-center
                shadow-sm
              "
            >
              <div className="text-2xl font-bold text-blue-600">
                {item.value}
              </div>

              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}