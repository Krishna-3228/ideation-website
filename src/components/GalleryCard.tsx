type GalleryCardProps = {
  caption: string;
  category: string;
  bgColor?: string;
};

const GalleryCard = ({
  caption,
  category,
  bgColor = "#e2e8f0",
}: GalleryCardProps) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Placeholder image area */}
      <div
        className="w-full h-52 flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <span className="text-gray-400 text-sm font-medium">Photo</span>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
          {category}
        </span>
        <p className="text-white font-semibold text-sm mt-1">{caption}</p>
      </div>

      {/* Always-visible caption */}
      <div className="bg-white px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-orange-500">
          {category}
        </span>
        <p className="text-gray-700 text-sm font-medium mt-0.5">{caption}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
