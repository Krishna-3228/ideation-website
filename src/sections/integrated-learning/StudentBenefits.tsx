import {
  BookOpen,
  GraduationCap,
  Target,
  Sparkles,
} from "lucide-react";

import benefitsBg from "../../assets/integrated-learning/benefits-bg-image.jpeg";

const benefits = [
  {
    number: "01",
    icon: BookOpen,
    title: "Understand Concepts, Not Memorise Answers",
    description:
      "Students learn from first principles so they can solve unfamiliar problems with confidence.",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Aligned With All Major Boards",
    description:
      "Supports IB, IGCSE, ICSE, CBSE and State Board students through a unified curriculum.",
  },
  {
    number: "03",
    icon: Target,
    title: "Strong Foundation For Future Classes",
    description:
      "Building conceptual clarity during 5th–7th standard makes higher classes significantly easier.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Confidence & Love For Learning",
    description:
      "Understanding concepts deeply encourages participation, confidence and curiosity.",
  },
];

export default function StudentBenefitsSection() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${benefitsBg})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-[0.25em]">
            Student Benefits
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Benefits Your Child Gains
          </h2>

          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Designed to strengthen academic foundations, critical thinking,
            confidence and long-term learning success.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 max-w-4xl mx-auto space-y-5">
          {/* Card 01 */}
          <div className="flex justify-center">
            <BenefitCard benefit={benefits[0]} />
          </div>

          {/* Card 02 + 03 */}
          <div className="grid md:grid-cols-2 gap-5">
            <BenefitCard benefit={benefits[1]} />
            <BenefitCard benefit={benefits[2]} />
          </div>

          {/* Card 04 */}
          <div className="flex justify-center">
            <BenefitCard benefit={benefits[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

type Benefit = {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
};

function BenefitCard({ benefit }: { benefit: Benefit }) {
  const Icon = benefit.icon;

  return (
    <div className="w-full md:w-[55%] md:min-w-[380px] max-w-full">
      <div className="backdrop-blur-md bg-white/90 rounded-2xl p-5 border border-white/20 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="text-3xl font-bold text-orange-200">
              {benefit.number}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-5 h-5 text-blue-900" />

              <h3 className="text-lg font-bold text-blue-900">
                {benefit.title}
              </h3>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {benefit.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}