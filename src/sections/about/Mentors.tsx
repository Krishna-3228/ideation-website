const mentors = [
  {
    initials: "DS",
    name: "Dr. Dinesh S. Datar",
    designation: "Senior Academic Mentor",
    meta: "20+ Years Experience • 25 Publications",

    qualifications: [
      "Ph.D. Computer Science & Engineering",
      "M.Tech (CSE)",
      "M.B.A (HR)",
      "B.E (IT)",
      "LLB",
    ],

    highlights: [
      "GATE 2007 Qualified (93%)",
      "Assistant Professor",
      "7000+ Students Mentored",
      "CBSE & State Board Guidance",
    ],
  },

  {
    initials: "VV",
    name: "Dr. Vivek V. Paithankar",
    designation: "Senior Academic Mentor",
    meta: "20+ Years Experience • 200 Publications • 1 Patent",

    qualifications: [
      "Ph.D. (Pharmacology)",
      "M.Pharm (Pharmacology)",
      "B.Pharm",
      "LLB",
    ],

    highlights: [
      "Registered Ph.D Guide",
      "5000+ Students Mentored",
      "Medical Student Mentorship",
      "CBSE & State Board Guidance",
    ],
  },
];

export default function MentorsSection() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Academic Leadership
          </p>

          <h2 className="text-3xl font-bold text-blue-950">
            Guided By Experienced Mentors
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            Our mentors combine academic excellence, research,
            teaching experience and student guidance to help learners
            achieve their full potential.
          </p>
        </div>

        {/* BOTH CARDS IN ONE ROW */}

        <div className="grid gap-6 lg:grid-cols-2">

          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
              "
            >
              {/* HEADER */}

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-100
                    text-lg
                    font-bold
                    text-blue-950
                  "
                >
                  {mentor.initials}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-blue-950">
                    {mentor.name}
                  </h3>

                  <p className="text-orange-500 text-sm">
                    {mentor.designation}
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    {mentor.meta}
                  </p>
                </div>

              </div>

              {/* TWO COLUMN CONTENT */}

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* LEFT */}

                <div>
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-950">
                    Qualifications
                  </h4>

                  <ul className="space-y-1.5">
                    {mentor.qualifications.map((item) => (
                      <li
                        key={item}
                        className="
                          flex
                          gap-2
                          text-sm
                          leading-relaxed
                          text-slate-700
                        "
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT */}

                <div>
                  <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-950">
                    Highlights
                  </h4>

                  <ul className="space-y-1.5">
                    {mentor.highlights.map((item) => (
                      <li
                        key={item}
                        className="
                          flex
                          gap-2
                          text-sm
                          leading-relaxed
                          text-slate-700
                        "
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}