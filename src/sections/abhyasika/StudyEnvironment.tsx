import StudyEnvironmentCard from "../../components/abhyasika/StudyEnvironmentCard";

import { studyEnvironment } from "../../data/abhyasika/studyEnvironment";

const StudyEnvironment = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Study Environment
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Encouraging Discipline and Consistency
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

            A focused study environment helps students
            develop concentration,
            productive learning habits,
            and long-term academic discipline.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {studyEnvironment.map((item) => (
            <StudyEnvironmentCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default StudyEnvironment;