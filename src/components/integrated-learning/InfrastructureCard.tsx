type InfrastructureCardProps = {
  title: string;
  description: string;
};

const InfrastructureCard = ({
  title,
  description,
}: InfrastructureCardProps) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition duration-300">

      {/* IMAGE PLACEHOLDER */}
      <div className="h-56 bg-slate-200 flex items-center justify-center">

        <p className="text-gray-500 font-medium">
          Image Placeholder
        </p>

      </div>

      {/* CONTENT */}
      <div className="p-8">

        <h3 className="text-2xl font-bold text-blue-950">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          {description}
        </p>

      </div>

    </div>
  );
};

export default InfrastructureCard;