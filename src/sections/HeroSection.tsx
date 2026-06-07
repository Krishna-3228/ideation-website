import HeroCarousel from "../components/HeroCarousel";
import logo from "../assets/logo/logo.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <HeroCarousel />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl text-white">


            <p className="uppercase tracking-widest font-semibold text-blue-300">
              Ideation Welfare Society
            </p>

            <h1 className="text-6xl font-bold mt-4">
              Shaping Minds
              <br />
              Since 2009
            </h1>

            <p className="mt-6 text-xl text-gray-200">
              Education • Welfare • Development • Research
            </p>

            <div className="flex gap-4 mt-10">
              <button className="px-6 py-3 bg-blue-600 rounded-lg">
                Explore Institutions
              </button>

              <button className="px-6 py-3 border border-white rounded-lg">
                Contact Us
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}