type BenefitCardProps = {
  title: string;
  description: string;
};

const BenefitCard = ({
  title,
  description,
}: BenefitCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition duration-300">

      <h3 className="text-2xl font-bold text-blue-950">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default BenefitCard;