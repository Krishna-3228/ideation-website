import classroomImage from "../../assets/tutorial/classroom-1.jpeg";
import labImage from "../../assets/tutorial/lab.jpeg";
import studyCentreImage from "../../assets/tutorial/study-centre.jpg";

const facilities = [
  {
    image: classroomImage,
    title: "Interactive Classrooms",
    description:
      "Concept-based teaching in a focused learning environment.",
  },
  {
    image: labImage,
    title: "Experimental Lab",
    description:
      "Practical learning through hands-on experiments.",
  },
  {
    image: studyCentreImage,
    title: "Learning Resources Centre",
    description:
      "Dedicated study spaces that encourage focused learning.",
  },
];

const FacilitiesInfrastructure = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Facilities
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-blue-950">
            Facilities & Learning Environment
          </h2>

          <p className="mt-4 text-slate-600">
            Modern classrooms, practical laboratories and dedicated
            study spaces designed to support academic excellence.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="
                overflow-hidden
                rounded-2xl
                bg-slate-50
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
                src={facility.image}
                alt={facility.title}
                className="
                  h-44
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />

              <div className="p-5">

                <h3 className="text-lg font-semibold text-blue-950">
                  {facility.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {facility.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FacilitiesInfrastructure;