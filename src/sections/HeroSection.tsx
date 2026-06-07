import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";

export default function HeroSection() {
  const handleScrollToInstitutions = () => {
    const element = document.getElementById("institutions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden">
      <HeroCarousel />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-3xl text-white">

            <p className="uppercase tracking-widest font-semibold text-blue-300 text-sm md:text-base">
              Ideation Welfare Society
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 md:mt-4 leading-tight">
              Shaping Minds
              <br />
              Since 2009
            </h1>

            <p className="mt-4 md:mt-6 text-base md:text-xl text-gray-200">
              Education • Welfare • Development • Research
            </p>

            <div className="flex flex-wrap gap-3 mt-6 md:mt-10">
              <button
                onClick={handleScrollToInstitutions}
                className="px-5 py-2.5 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition text-sm md:text-base cursor-pointer"
              >
                Explore Institutions
              </button>

              <Link to="/contact" className="px-5 py-2.5 md:px-6 md:py-3 border border-white rounded-lg text-white hover:bg-white hover:text-blue-900 transition text-sm md:text-base font-semibold">
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}