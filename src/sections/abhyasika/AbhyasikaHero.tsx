import {
  BookOpen,
  Clock3,
  ShieldCheck,
  Users,
} from "lucide-react";

import heroImage from "../../assets/abhyasika/hero.jpg";

const highlights = [
  {
    icon: Clock3,
    text: "Structured Study Hours",
  },
  {
    icon: ShieldCheck,
    text: "Academic Supervision",
  },
  {
    icon: BookOpen,
    text: "Focused Self-Study",
  },
  {
    icon: Users,
    text: "Regular Guidance",
  },
];

export default function AbhyasikaHeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ideation Abhyasika"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-blue-900/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Ideation Abhyasika
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Structured Study.
            <br />
            Focused Learning.
            <br />
            Better Results.
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            A disciplined and supportive study environment designed
            to help students stay consistent, improve concentration
            and achieve their academic goals.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/10
                    px-4
                    py-3
                    backdrop-blur-sm
                  "
                >
                  <Icon
                    size={18}
                    className="text-orange-400"
                  />

                  <span className="text-sm font-medium text-white">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Small Info Strip */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
              Silent Study Environment
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
              Daily Monitoring
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
              Academic Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}