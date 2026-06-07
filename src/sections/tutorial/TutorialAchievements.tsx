import topper2024 from "../../assets/tutorial/achievements/topper-2024.jpeg";
import topper2023 from "../../assets/tutorial/achievements/topper-2023.jpeg";
import testSeries from "../../assets/tutorial/achievements/test-series.jpeg";

const highlights = [
  {
    value: "15+",
    title: "Years of Excellence",
    description: "Guiding students since 2009",
  },
  {
    value: "98%",
    title: "District Topper",
    description: "Academic Year 2023-24",
  },
  {
    value: "97%",
    title: "District Topper",
    description: "Academic Year 2022-23",
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

const TutorialAchievements = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="grid lg:grid-cols-2 gap-12 items-end">

          <div>
            <p className="uppercase tracking-[0.25em] text-blue-600 font-semibold">
              Academic Excellence
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Results That
              <br />
              Speak For Themselves
            </h2>
          </div>

          <div>
            <p className="text-lg text-slate-600 leading-relaxed">
              For more than 15 years, Ideation Tutorial has
              helped students achieve academic success through
              concept-based learning, continuous evaluation,
              and dedicated mentorship.
            </p>
          </div>

        </div>

        {/* Highlights */}

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {highlights.map((item) => (
            <div
              key={item.title}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-md
                border
                border-slate-100
              "
            >
              <h3 className="text-5xl font-black text-orange-500">
                {item.value}
              </h3>

              <h4 className="mt-4 text-xl font-bold text-slate-900">
                {item.title}
              </h4>

              <p className="mt-2 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* Posters */}

        <div className="mt-20">

          <h3 className="text-3xl font-bold text-center text-slate-900">
            Featured Student Achievements
          </h3>

          <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
            Celebrating outstanding academic performance and
            the dedication of our students.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-12">

            {posters.map((poster) => (
              <div
                key={poster.title}
                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-lg
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="w-full object-cover"
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

      </div>
    </section>
  );
};

export default TutorialAchievements;