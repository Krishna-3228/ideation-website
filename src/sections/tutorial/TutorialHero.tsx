import { Link } from "react-router-dom";
import hemangiTopper from "../../assets/tutorial/hemangi-topper-2024.jpeg";

const TutorialHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Left */}

          <div>
            <p className="uppercase tracking-[0.25em] text-blue-900 font-semibold text-sm">
              Ideation Welfare Society
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
              Ideation
              <span className="block text-orange-600">
                Tutorial
              </span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-slate-700 font-medium">
              Concept-Based Coaching for 8th–12th Standard Students
            </p>

            <p className="mt-3 text-slate-600 leading-relaxed max-w-xl">
              Supporting students across IB, IGCSE, ICSE, CBSE and
              State Board curricula through structured academic guidance,
              mentorship and examination preparation.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "IB",
                "IGCSE",
                "ICSE",
                "CBSE",
                "State Board",
              ].map((board) => (
                <span
                  key={board}
                  className="
                    px-3
                    py-1.5
                    rounded-full
                    bg-sky-100
                    text-blue-900
                    text-sm
                    font-medium
                  "
                >
                  {board}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="
                  px-5
                  py-2.5
                  bg-blue-900
                  text-white
                  rounded-lg
                  font-semibold
                  hover:bg-blue-800
                  transition
                "
              >
                Enquire Now
              </Link>

              <Link
                to="/contact"
                className="
                  px-5
                  py-2.5
                  border
                  border-blue-900
                  text-blue-900
                  rounded-lg
                  font-semibold
                  hover:bg-blue-50
                  transition
                "
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right */}

          <div>
            <img
              src={hemangiTopper}
              alt="District Topper"
              className="
                w-full
                max-h-[500px]
                object-cover
                rounded-3xl
                shadow-xl
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TutorialHero;