import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-wider">
              Admissions Open 2026
            </p>

            <h1 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight text-blue-950">

              Ideation Welfare Society

            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-gray-800">
              Integrated Learning Program
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              Concept-based education for
              IB, IGCSE, ICSE, CBSE and
              State Board students.

            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="bg-blue-950 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition"
              >
                Enquire Now
              </Link>

              <Link
                to="/about"
                className="border border-blue-950 text-blue-950 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
              >
                Learn More
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-700">

              <div>
                <p className="font-bold text-blue-950">
                  5th - 12th
                </p>
                <p>Academic Programs</p>
              </div>

              <div>
                <p className="font-bold text-blue-950">
                  Multi Board
                </p>
                <p>IB • CBSE • ICSE</p>
              </div>

              <div>
                <p className="font-bold text-blue-950">
                  Since 2009
                </p>
                <p>Shaping Minds</p>
              </div>

            </div>

          </div>

          {/* RIGHT PLACEHOLDER */}
          <div className="flex justify-center">

            <div className="w-full max-w-md h-[500px] rounded-3xl border-2 border-dashed border-slate-300 bg-white flex items-center justify-center">

              <p className="text-slate-400 text-lg font-medium">
                Hero Image Placeholder
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;