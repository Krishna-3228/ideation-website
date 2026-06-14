import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Compass } from "lucide-react";

export default function TripsGallery() {
  // Eagerly load all trips images from the assets folder
  const images = Object.values(
    import.meta.glob("../../assets/life/trips/*.{png,jpg,jpeg}", {
      eager: true,
      import: "default",
    })
  ) as string[];

  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, images]);

  const handlePrev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="trips" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 mb-4">
              <Compass className="w-3.5 h-3.5" />
              Excursions & Trips
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Educational Tours & Field Trips
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600 text-sm sm:text-base">
              Expanding horizons beyond the campus. We organize field trips, museum tours, nature camps, and educational excursions to make learning real-world.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedIdx(index)}
              className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <img
                src={src}
                alt={`Educational tour ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white scale-75 group-hover:scale-100 transition-transform duration-300 border border-white/20">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors duration-200 z-50 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content */}
            <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
              <img
                src={images[selectedIdx]}
                alt={`Educational tour detail ${selectedIdx + 1}`}
                className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Counter */}
              <div className="mt-4 text-sm text-slate-400 font-medium bg-slate-900/60 px-4 py-1.5 rounded-full border border-slate-800">
                Photo {selectedIdx + 1} of {images.length}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
