import SectionHeading from "../components/SectionHeading";
import { galleryItems } from "../data/gallery";

const LifeAtIdeationSection = () => {
  return (
    <section
      id="life"
      className="py-14 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          eyebrow="Life at Ideation"
          title="More Than Just a Classroom"
          subtitle="Interactive learning, practical experiences, focused study and a supportive community environment."
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {galleryItems.map((item) => (
            <GalleryCard
              key={item.title}
              image={item.image}
              title={item.title}
              category={item.category}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

type GalleryCardProps = {
  image: string;
  title: string;
  category: string;
};

function GalleryCard({
  image,
  title,
  category,
}: GalleryCardProps) {
  return (
    <div
      className="
        relative
        h-72
        overflow-hidden
        rounded-2xl
        group
      "
    >
      <img
        src={image}
        alt={title}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          p-5
          text-white
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-blue-300
            font-semibold
          "
        >
          {category}
        </p>

        <h3
          className="
            mt-2
            text-xl
            font-bold
            leading-tight
          "
        >
          {title}
        </h3>
      </div>

    </div>
  );
}

export default LifeAtIdeationSection;