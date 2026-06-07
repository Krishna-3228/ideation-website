import SectionHeading from "../components/SectionHeading";
import { galleryItems } from "../data/gallery";

const LifeAtIdeationSection = () => {
  const [classroom, lab, study, community] = galleryItems;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          eyebrow="Life at Ideation"
          title="More Than Just a Classroom"
          subtitle="We believe in holistic development. From interactive classes and lab sessions to focused study environments and community activities, learning at Ideation extends far beyond textbooks."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-6">

          {/* Left Column */}

          <div className="space-y-6">

            <GalleryBlock
              image={classroom.image}
              title={classroom.title}
              category={classroom.category}
              height="h-[420px]"
            />

            <GalleryBlock
              image={study.image}
              title={study.title}
              category={study.category}
              height="h-[280px]"
            />

          </div>

          {/* Center Column */}

          <GalleryBlock
            image={lab.image}
            title={lab.title}
            category={lab.category}
            height="h-[720px]"
          />

          {/* Right Column */}

          <GalleryBlock
            image={community.image}
            title={community.title}
            category={community.category}
            height="h-[720px]"
          />

        </div>

      </div>
    </section>
  );
};

type GalleryBlockProps = {
  image: string;
  title: string;
  category: string;
  height: string;
};

function GalleryBlock({
  image,
  title,
  category,
  height,
}: GalleryBlockProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        group
        ${height}
      `}
    >
      <img
        src={image}
        alt={title}
        className="
          w-full
          h-full
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
          via-black/30
          to-transparent
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          p-8
          text-white
        "
      >
        <p
          className="
            uppercase
            tracking-[0.2em]
            text-sm
            text-blue-300
            font-semibold
          "
        >
          {category}
        </p>

        <h3
          className="
            mt-2
            text-2xl
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