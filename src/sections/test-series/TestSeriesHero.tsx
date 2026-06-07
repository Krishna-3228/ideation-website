// sections/test-series/HeroSection.tsx

import { Link } from "react-router-dom";
import heroImage from "../../assets/test-series/test-series-hero.jpeg";

export default function HeroSection() {
  const handleScrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/75" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex min-h-[75vh] items-center py-20">
          <div className="max-w-3xl text-white">
            {/* Label */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Ideation Test Series
            </p>

            {/* Heading */}
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Practice Like The
              <span className="block text-orange-400">
                Final Exam.
              </span>
              Perform Like A Topper.
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
              Structured test series for Class 10 students designed to improve
              accuracy, confidence, time management and board examination
              performance.
            </p>

            {/* Badges */}
            <div className="mb-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-sm">
                Class 10th
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-sm">
                CBSE Board
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-sm">
                State Board
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleScrollToHowItWorks}
                className="rounded-xl bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600 cursor-pointer"
              >
                View Schedule
              </button>

              <Link
                to="/contact"
                className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative border-t border-white/10 bg-blue-950/95 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 md:grid-cols-4 lg:px-8">
          <div>
            <p className="text-2xl font-bold text-orange-400">4</p>
            <p className="text-sm text-slate-300">
              Unit Tests
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-orange-400">2</p>
            <p className="text-sm text-slate-300">
              Full Syllabus Tests
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-orange-400">
              Expert
            </p>
            <p className="text-sm text-slate-300">
              Evaluation
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-orange-400">
              Detailed
            </p>
            <p className="text-sm text-slate-300">
              Error Analysis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}