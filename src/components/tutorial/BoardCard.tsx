type BoardCardProps = {
  title: string;
  description: string;
};

const BoardCard = ({
  title,
  description,
}: BoardCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition duration-300">

      <h3 className="text-3xl font-bold text-orange-500">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default BoardCard;