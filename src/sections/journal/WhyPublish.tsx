import WhyPublishCard from "../../components/journal/WhyPublishCard";

import { whyPublish } from "../../data/journal/whyPublish";

const WhyPublish = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Why Publish With Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Encouraging Meaningful Scholarly Contribution
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">

            The journal provides a platform
            for researchers and scholars
            to share innovative ideas,
            contribute to academic growth,
            and promote interdisciplinary knowledge exchange.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {whyPublish.map((item) => (
            <WhyPublishCard
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

export default WhyPublish;