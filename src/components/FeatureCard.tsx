type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard = ({
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300">

      <h3 className="text-2xl font-bold text-blue-950">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default FeatureCard;