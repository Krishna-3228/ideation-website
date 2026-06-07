// sections/abhyasika/StudyEnvironmentSection.tsx

import backgroundImage from "../../assets/abhyasika/study-hall.jpeg";
import galleryOne from "../../assets/abhyasika/gallery-1.jpg";
import galleryTwo from "../../assets/abhyasika/gallery-2.jpeg";
import galleryThree from "../../assets/abhyasika/gallery-3.jpg";

const features = [
  {
    number: "01",
    title: "Quiet Study Hall",
    description:
      "A distraction-free environment that helps students maintain focus for extended study sessions.",
  },
  {
    number: "02",
    title: "Daily Monitoring",
    description:
      "Regular supervision ensures consistency, discipline and productive study habits.",
  },
  {
    number: "03",
    title: "Teacher Guidance",
    description:
      "Academic support is available whenever students need help with planning or doubts.",
  },
  {
    number: "04",
    title: "Learning Resources",
    description:
      "Access to study materials and reference resources that support independent learning.",
  },
];

const supportItems = [
  "Progress Monitoring",
  "Teacher Guidance",
  "Parent Communication",
  "Safe Environment",
];

const gallery = [
  {
    image: galleryOne,
    alt: "Study Cubicles",
  },
  {
    image: galleryTwo,
    alt: "Students Studying",
  },
  {
    image: galleryThree,
    alt: "Learning Environment",
  },
];

export default function StudyEnvironmentSection() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Panel */}

        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}

          <div className="absolute inset-0 bg-blue-900/85" />

          <div className="relative z-10 px-6 py-10 md:px-10 md:py-12">
            {/* Heading */}

            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Study Environment
              </p>

              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Designed For Focused Learning
              </h2>

              <p className="mt-4 text-slate-200">
                A structured environment that encourages discipline,
                concentration and consistent academic progress.
              </p>
            </div>

            {/* Features */}

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                    p-5
                    backdrop-blur-sm
                  "
                >
                  <div className="mb-3 text-3xl font-bold text-orange-300/80">
                    {feature.number}
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-200">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}

        <div className="mt-8">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-blue-900">
              Inside Ideation Abhyasika
            </h3>

            <p className="mt-2 text-slate-600">
              Spaces created to support disciplined and productive study.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {gallery.map((item) => (
              <div
                key={item.alt}
                className="
                  overflow-hidden
                  rounded-2xl
                  shadow-md
                "
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="
                    h-56
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Support Strip */}

        <div
          className="
            mt-8
            rounded-2xl
            bg-slate-50
            p-5
            border
            border-slate-200
          "
        >
          <div className="grid gap-3 md:grid-cols-4">
            {supportItems.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-4
                  py-3
                  text-center
                  shadow-sm
                "
              >
                <span className="h-2 w-2 rounded-full bg-orange-500" />

                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}