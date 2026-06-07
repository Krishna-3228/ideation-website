import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const TutorialCTA = () => {
  return (
    <section className="bg-blue-950 py-14 text-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Admissions Open 2026
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Start Your Academic Journey
            <span className="block">
              With Ideation Tutorial
            </span>
          </h2>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Concept-based coaching for students from 8th to 12th
            standard across IB, IGCSE, ICSE, CBSE and State Board curricula.
          </p>

          {/* Buttons */}

          <div className="mt-6 flex flex-wrap justify-center gap-3">

            <Link
              to="/contact"
              className="
                rounded-xl
                bg-orange-500
                px-5
                py-3
                font-semibold
                text-white
                transition
                hover:bg-orange-600
              "
            >
              Enquire Now
            </Link>

            <a
              href="tel:9657778471"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/20
                bg-white/10
                px-5
                py-3
                font-semibold
                backdrop-blur-sm
                transition
                hover:bg-white/20
              "
            >
              <Phone size={18} />
              Call Us
            </a>

          </div>

          {/* Contact Info */}

          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              gap-3
              text-slate-300
            "
          >
            <div className="flex flex-wrap justify-center gap-4">
              <span>+91 96577 78471</span>
              <span>•</span>
              <span>+91 90224 43373</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>
                Ashok Colony, Morshi Road, Amravati
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TutorialCTA;