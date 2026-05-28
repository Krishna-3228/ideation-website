import EvaluationCard from "../../components/EvaluationCard";

import { evaluationFeatures } from "../../data/evaluationFeatures";

const EvaluationSection = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Evaluation & Analysis
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Continuous Academic Performance Monitoring
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

            Our structured evaluation system helps students
            improve performance through continuous testing,
            analysis,
            revision,
            and academic feedback.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {evaluationFeatures.map((item) => (
            <EvaluationCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default EvaluationSection;