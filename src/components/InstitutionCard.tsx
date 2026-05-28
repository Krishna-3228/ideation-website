import { Link } from "react-router-dom";

type InstitutionCardProps = {
  title: string;
  description: string;
  route: string;
};

const InstitutionCard = ({
  title,
  description,
  route,
}: InstitutionCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition duration-300">

      <h3 className="text-2xl font-bold text-blue-950">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

      <Link
        to={route}
        className="inline-block mt-6 text-orange-500 font-semibold hover:text-orange-600"
      >
        Learn More →
      </Link>

    </div>
  );
};

export default InstitutionCard;