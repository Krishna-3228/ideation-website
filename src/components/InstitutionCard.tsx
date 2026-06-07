import { Link } from "react-router-dom";

type InstitutionCardProps = {
  title: string;
  tagline: string;
  description: string;
  route: string;
  icon: string;
  color: string;
  image: string;
};

const InstitutionCard = ({
  title,
  tagline,
  description,
  route,
  icon,
  color,
  image,
}: InstitutionCardProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src={institution.image}
          alt={institution.title}
          className="w-full h-[400px] object-cover rounded-3xl"
        />
      </div>

      <div>
        <p className="text-blue-600 font-semibold uppercase">
          {institution.tagline}
        </p>

        <h3 className="text-4xl font-bold mt-2">
          {institution.title}
        </h3>

        <p className="mt-6 text-slate-600 leading-relaxed">
          {institution.description}
        </p>

        <Link
          to={institution.route}
          className="inline-block mt-8"
        >
          Explore Program →
        </Link>
      </div>
    </div>
  );
};

export default InstitutionCard;