// sections/abhyasika/AbhyasikaCTASection.tsx

import { MapPin, Phone, ArrowRight } from "lucide-react";

import ctaImage from "../../assets/abhyasika/cta-bg.jpeg";

export default function AbhyasikaCTASection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            backgroundImage: `url(${ctaImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900/90" />

          {/* Content */}
          <div className="relative z-10 px-8 py-10 md:px-12 md:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Left */}
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                  Admissions Open
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                  Join Ideation Abhyasika
                </h2>

                <p className="mt-4 text-slate-300">
                  A disciplined study environment designed to help students
                  develop consistency, concentration and strong academic habits.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                    Structured Study Hours
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                    Daily Monitoring
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                    Academic Guidance
                  </span>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-4">
                <a
                  href="tel:9657778471"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-orange-500
                    px-6
                    py-4
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
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/20
                    bg-white/10
                    px-6
                    py-4
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

            {/* Address */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} className="text-orange-300" />

                <span>
                  Ashok Colony, Morshi Road, Amravati
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}