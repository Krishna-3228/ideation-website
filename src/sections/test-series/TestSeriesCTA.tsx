import { Link } from "react-router-dom";

const TestSeriesCTA = () => {
  return (
    <section className="py-24 bg-blue-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-orange-400 font-semibold uppercase tracking-wider">
            Admissions Open 2026
          </p>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">

            Improve Academic Performance
            Through Structured Testing

          </h2>

          <p className="mt-8 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">

            Join Ideation Test Series
            designed to strengthen examination confidence,
            improve performance,
            and build academic discipline
            through continuous evaluation.

          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-lg font-semibold text-white"
            >
              Enquire Now
            </Link>

            <Link
              to="/contact"
              className="border border-white hover:bg-white hover:text-blue-950 transition px-8 py-4 rounded-lg font-semibold"
            >
              Contact Us
            </Link>

          </div>

          {/* Contact Grid */}
          <div className="mt-14 grid sm:grid-cols-3 gap-8">

            <div>

              <h3 className="text-2xl font-bold text-orange-400">
                Weekly Tests
              </h3>

              <p className="mt-3 text-gray-300">
                Regular Assessment Programs
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold text-orange-400">
                Contact
              </h3>

              <p className="mt-3 text-gray-300">
                +91 9657778471
              </p>

              <p className="text-gray-300">
                +91 9022443373
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold text-orange-400">
                Location
              </h3>

              <p className="mt-3 text-gray-300">
                Ashok Colony,
                Morshi Road,
                Amravati
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TestSeriesCTA;