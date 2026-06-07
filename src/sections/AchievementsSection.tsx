import SectionHeading from "../components/SectionHeading";

import topper2023 from "../assets/achievements/topper-2023.jpeg";
import topper2024 from "../assets/achievements/topper-2024.jpeg";
import testSeries from "../assets/achievements/test-series-results.jpeg";

const highlights = [
  {
    value: "98%",
    title: "District Topper",
    description: "CBSE Class 10 • 2023-24",
  },
  {
    value: "97%",
    title: "District Topper",
    description: "CBSE Class 10 • 2022-23",
  },
  {
    value: "98.60%",
    title: "Highest Test Series Score",
    description: "SSC Test Series 2026",
  },
  {
    value: "15+",
    title: "Years of Excellence",
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
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          eyebrow="Achievements"
          title="Building Academic Excellence Since 2009"
          subtitle="Our students consistently excel in board examinations, test series programs, and academic competitions."
        />

        {/* Achievement Highlights */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-md
                border border-slate-100
                text-center
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
              "
            >
              <div className="text-4xl font-black text-orange-500">
                {item.value}
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Results */}

        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            Featured Student Success Stories
          </h3>

          <p className="mt-3 text-slate-600">
            Celebrating the achievements of our students across various programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {posters.map((poster) => (
            <div
              key={poster.title}
              className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
              "
            >
              <img
                src={poster.image}
                alt={poster.title}
                className="w-full h-auto object-cover"
              />

              <div className="p-5">
                <h4 className="font-semibold text-slate-900">
                  {poster.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}