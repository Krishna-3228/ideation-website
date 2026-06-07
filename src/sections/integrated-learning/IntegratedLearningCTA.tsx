import { ArrowRight, Phone } from "lucide-react";

import ctaImage from "../../assets/integrated-learning/cta.jpeg";

export default function IntegratedLearningCTA() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        backgroundImage: `url(${ctaImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-[#0f172a]/70" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="max-w-3xl">

          <p className="text-orange-400 font-semibold uppercase tracking-[0.25em]">
            Admissions Open
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
            Give Your Child
            <br />
            A Strong Academic Foundation
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
            The Integrated Learning Program is designed for students
            from 5th to 7th standard and combines concept-based
            learning, critical thinking, practical exploration and
            multi-board academic support.
          </p>

          {/* Highlights */}

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "5th–7th Standard",
              "One Course • Five Boards",
              "Concept-Based Learning",
            ].map((item) => (
              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/10
                  border
                  border-white/20
                  text-white
                  text-sm
                "
              >
                {item}
              </span>
            ))}

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <button
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-orange-500
                text-white
                font-semibold
                hover:bg-orange-600
                transition
              "
            >
              Enquire Now
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                border
                border-white/30
                text-white
                font-semibold
                hover:bg-white/10
                transition
              "
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}