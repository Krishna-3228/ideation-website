type StatCardProps = {
  number: string;
  label: string;
  sublabel?: string;
};

const StatCard = ({ number, label, sublabel }: StatCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-3xl font-extrabold text-orange-500 leading-tight">
        {number}
      </h3>
      <p className="mt-3 text-blue-950 font-semibold text-base leading-snug">
        {label}
      </p>
      {sublabel && (
        <p className="mt-1 text-gray-400 text-xs font-medium tracking-wide uppercase">
          {sublabel}
        </p>
      )}
    </div>
  );
};

export default StatCard;
