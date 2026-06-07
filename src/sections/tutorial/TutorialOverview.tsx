import classroomImage from "../../assets/tutorial/classroom.jpeg";

const features = [
  "Concept-Based Learning",
  "Experienced Faculty",
  "Personal Mentorship",
  "Board-Oriented Preparation",
];

const TutorialOverview = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div>
            <img
              src={classroomImage}
              alt="Classroom Learning"
              className="
                w-full
                rounded-3xl
                shadow-xl
                object-cover
                h-[500px]
              "
            />
          </div>

          {/* Content */}

          <div>

            <p className="text-blue-600 uppercase tracking-[0.25em] font-semibold">
              About Ideation Tutorial
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Building Strong Academic Foundations
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              Ideation Tutorial provides structured
              coaching for students from 8th to 12th
              standard across IB, IGCSE, ICSE,
              CBSE and State Board curricula.
            </p>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Our focus is on conceptual clarity,
              critical thinking and long-term academic
              success rather than rote learning.
            </p>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Through experienced faculty,
              continuous guidance and regular
              evaluation, students develop confidence,
              discipline and strong examination readiness.
            </p>

            {/* Features */}

            <div className="mt-10 grid sm:grid-cols-2 gap-4">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-3
                    bg-slate-50
                    rounded-xl
                    px-4
                    py-4
                  "
                >
                  <span className="text-green-600 text-xl">
                    ✓
                  </span>

                  <span className="font-medium text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TutorialOverview;