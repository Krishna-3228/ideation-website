import hemangiTopper from "../../assets/tutorial/hemangi-topper-2024.jpeg";

const TutorialHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[0.25em] text-blue-600 font-semibold">
              Ideation Welfare Society
            </p>

            <h1 className="mt-6 text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Ideation
              <span className="block text-blue-700">
                Tutorial
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-700 font-medium">
              Concept-Based Coaching for
              8th–12th Standard Students
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">
              Supporting students across
              IB, IGCSE, ICSE, CBSE and
              State Board curricula through
              structured academic guidance,
              mentorship and examination preparation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800">
                IB
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800">
                IGCSE
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800">
                ICSE
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800">
                CBSE
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800">
                State Board
              </span>
            </div>

            <div className="mt-10 flex gap-4">
              <button>
                Enquire Now
              </button>

              <button>
                Contact Us
              </button>
            </div>

          </div>

          {/* Right */}

          <div>
            <img
              src={hemangiTopper}
              alt="District Topper"
              className="
            rounded-3xl
            shadow-2xl
            w-full
          "
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default TutorialHero;