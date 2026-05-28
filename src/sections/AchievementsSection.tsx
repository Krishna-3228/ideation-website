import AchievementCard from "../components/AchievementCard";

import { achievements } from "../data/achievements";

const AchievementsSection = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-orange-500 font-semibold uppercase tracking-wider">
            Achievements
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Building Academic Excellence
            Since 2009
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our students have consistently achieved
            excellence across board examinations,
            competitive programs, and higher education pathways.
          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.label}
              number={achievement.number}
              label={achievement.label}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default AchievementsSection;