import classroomImage from "../../assets/integrated-learning/classroom.jpeg";
import labImage from "../../assets/integrated-learning/microscope.jpeg";
import studyCentreImage from "../../assets/integrated-learning/study-centre.jpeg";

const facilities = [
  {
    image: classroomImage,
    title: "Interactive Classrooms",
    description:
      "Concept-based teaching that encourages participation, discussion and deeper understanding.",
  },
  {
    image: labImage,
    title: "Experimental Lab",
    description:
      "Hands-on activities and experiments help students explore scientific concepts practically.",
  },
  {
    image: studyCentreImage,
    title: "Learning Resources Centre",
    description:
      "Dedicated study spaces designed to promote focus, consistency and independent learning.",
  },
];

export default function LearningEnvironmentSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-orange-500 text-sm font-semibold uppercase tracking-[0.25em]">
            Learning Environment
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-900">
            Spaces Designed For Learning
          </h2>

          <p className="mt-4 text-slate-600">
            A supportive environment where students learn,
            explore, experiment and grow with confidence.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-10 grid md:grid-cols-3 gap-6">

          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-sm
                border
                border-slate-200
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={facility.image}
                  alt={facility.title}
                  className="
                    h-52
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-xl font-bold text-blue-900">
                  {facility.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {facility.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}