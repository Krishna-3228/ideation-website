type AchievementCardProps = {
  number: string;
  label: string;
};

const AchievementCard = ({
  number,
  label,
}: AchievementCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center hover:shadow-xl transition duration-300">

      <h3 className="text-4xl font-bold text-orange-500">
        {number}
      </h3>

      <p className="mt-4 text-gray-700 font-medium leading-relaxed">
        {label}
      </p>

    </div>
  );
};

export default AchievementCard;