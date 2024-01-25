interface StatCardProps {
  icon: string;
  graph: string;
  label: string;
  amount: number | string;
  performanceGraph: string;
}

const StatCard = ({
  icon,
  graph,
  label,
  amount,
  performanceGraph,
}: StatCardProps) => {
  return (
    <div className="p-4 w-full h-full flex flex-col gap-3 justify-between bg-white rounded-xl font-jakarta">
      <div className="flex items-center justify-between">
        <img src={icon} />
        <img src={graph} />
      </div>
      <span className="mb-1 block text-lg font-medium">{label}</span>
      <span className="text-2xl font-semibold">{amount}</span>
      <div className="flex items-center justify-between">
        <img src={performanceGraph} />
        <span className="text-sm font-inter">vs previous amount</span>
      </div>
    </div>
  );
};

export default StatCard;
