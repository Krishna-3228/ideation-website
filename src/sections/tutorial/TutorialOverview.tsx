import classroomImage from "../../assets/tutorial/classroom.jpeg";

const features = [
  "Concept-Based Learning",
  "Experienced Faculty",
  "Personal Mentorship",
  "Board-Oriented Preparation",
];

const TutorialOverview = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Image */}

          <div>
            <img
              src={classroomImage}
              alt="Classroom Learning"
              className="
                w-full
                h-[380px]
                lg:h-[420px]
                object-cover
                rounded-3xl
                shadow-xl
              "
            />
          </div>

          {/* Content */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              About Ideation Tutorial
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Building Strong Academic Foundations
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Ideation Tutorial provides structured coaching for students
              from 8th to 12th standard across IB, IGCSE, ICSE, CBSE and
              State Board curricula. Through concept-based learning,
              experienced faculty and continuous mentorship, students
              develop confidence, discipline and examination readiness.
            </p>

            {/* Features */}

            <div className="mt-6 grid sm:grid-cols-2 gap-3">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-slate-50
                    px-3
                    py-3
                  "
                >
                  <span className="text-green-600 font-bold">
                    ✓
                  </span>

                  <span className="text-sm font-medium text-slate-700">
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