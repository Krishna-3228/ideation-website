type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-12">
      {subtitle && (
        <p className="text-blue-600 font-semibold uppercase tracking-wide">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold text-slate-900 mt-2">
        {title}
      </h2>
    </div>
  );
}