type StudyEnvironmentCardProps = {
  title: string;
  description: string;
};

const StudyEnvironmentCard = ({
  title,
  description,
}: StudyEnvironmentCardProps) => {
  return (
    <div className="bg-blue-950 text-white rounded-2xl p-8 hover:-translate-y-1 transition duration-300">

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-gray-300 leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default StudyEnvironmentCard;