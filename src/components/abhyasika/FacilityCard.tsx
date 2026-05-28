type FacilityCardProps = {
  title: string;
  description: string;
};

const FacilityCard = ({
  title,
  description,
}: FacilityCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition duration-300">

      <h3 className="text-2xl font-bold text-blue-950">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default FacilityCard;