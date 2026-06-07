import { ArrowRight, Phone } from "lucide-react";

import ctaBg from "../../assets/test-series/cta-bg.jpg";

export default function TestSeriesCTASection() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            backgroundImage: `url(${ctaBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900/85" />

          {/* Content */}
          <div className="relative z-10 px-8 py-10 md:px-12 md:py-12">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              {/* Left */}
              <div className="max-w-2xl">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                  Admissions Open
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                  Enroll For Test Series 2026–27
                </h2>

                <p className="mt-4 text-slate-300">
                  Structured preparation for Class 10 students with
                  board-pattern tests, detailed evaluation and
                  performance improvement support.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                    Class 10th
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                    CBSE Board
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                    State Board
                  </span>

                </div>

              </div>

              {/* Right */}
              <div className="flex flex-col gap-4">

                <a
                  href="tel:9657778471"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-orange-500
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-orange-600
                  "
                >
                  <Phone size={18} />
                  96577 78471
                </a>

                <a
                  href="tel:9022443373"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/20
                    bg-white/10
                    px-6
                    py-3
                    font-semibold
                    text-white
                    backdrop-blur-sm
                    transition
                    hover:bg-white/20
                  "
                >
                  <ArrowRight size={18} />
                  90224 43373
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}