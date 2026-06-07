import SectionHeading from "../components/SectionHeading";

import classroomImg from "../assets/about/classroom.jpg";
import activityImg from "../assets/about/activity.jpeg";
import studentsImg from "../assets/about/students.jpeg";

const stats = [
  { value: "15+", label: "Years" },
  { value: "5000+", label: "Students" },
  { value: "5", label: "Institutions" },
  { value: "100+", label: "Achievements" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-14 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          title="About Ideation Welfare Society"
          subtitle="Shaping Minds Since 2009"
        />

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">

          {/* Images */}

          <div className="grid grid-cols-2 gap-3">

            <div className="col-span-2">
              <img
                src={classroomImg}
                alt="Classroom"
                className="
                  h-[260px]
                  w-full
                  object-cover
                  rounded-2xl
                "
              />
            </div>

            <img
              src={activityImg}
              alt="Activity"
              className="
                h-40
                w-full
                object-cover
                rounded-2xl
              "
            />

            <img
              src={studentsImg}
              alt="Students"
              className="
                h-40
                w-full
                object-cover
                rounded-2xl
              "
            />

          </div>

          {/* Content */}

          {/* Content */}

          <div className="flex flex-col justify-start">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Story
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-900">
              Education Beyond Memorisation
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Since 2009, Ideation Welfare Society has nurtured young
              minds through concept-based learning, academic excellence,
              mentorship and practical education. Across our institutions,
              students develop confidence, curiosity and the skills
              needed for future success.
            </p>

            {/* Stats */}

            <div className="mt-8 grid grid-cols-2 gap-4">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="
          rounded-2xl
          bg-slate-50
          border
          border-slate-200
          p-4
          text-center
        "
                >
                  <div className="text-3xl font-bold text-blue-600">
                    {item.value}
                  </div>

                  <div className="mt-1 text-sm text-slate-600">
                    {item.label}
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}