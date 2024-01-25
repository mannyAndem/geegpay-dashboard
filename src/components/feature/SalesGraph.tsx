import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { svgRectWithBorderRadius } from "../../utils/svgRectWithBorderRadius";

const SalesGraph = () => {
  const data = [
    { name: "Jan", sales: 20000 },
    { name: "Feb", sales: 27000 },
    { name: "Mar", sales: 19000 },
    { name: "Apr", sales: 34000 },
    { name: "May", sales: 40000 },
    { name: "Jun", sales: 45000 },
    { name: "Jul", sales: 29000 },
    { name: "Aug", sales: 32000 },
    { name: "Sep", sales: 34000 },
    { name: "Oct", sales: 23000 },
    { name: "Nov", sales: 15000 },
    { name: "Dec", sales: 28000 },
  ];

  return (
    <div className="w-full h-full bg-white p-5 rounded-xl">
      <div className="flex justify-between items-center font-jakarta">
        <h2 className="text-lg font-semibold">Sales Trends</h2>
        <div className="flex gap-3 items-center">
          <span className="text-sm font-medium">Sort by:</span>
          <select className="text-xs font-jakarta px-3 py-1 border border-gray rounded-3xl">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>
      <div className="mt-8 font-jakarta">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart width={600} height={600} data={data}>
            <Bar dataKey="sales" shape={<RoundedBar />} />
            <XAxis dataKey="name" axisLine={false} />
            <YAxis axisLine={false} />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

interface RoundedBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

const RoundedBar = ({ x, y, width, height }: RoundedBarProps) => {
  return (
    <path
      d={svgRectWithBorderRadius(x!, y!, width!, height!, 24, 24, 0, 0)}
      fill="#34CAA5"
      fill-opacity="0.1"
    />
  );
};

interface ToolTipProps {
  active: boolean;
  payload: any;
  label: string;
}
const Tooltip = ({ active, payload, label }: ToolTipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <div>
          {payload.map((pld) => (
            <div style={{ display: "inline-block", padding: 10 }}>
              <div style={{ color: pld.fill }}>{pld.value}</div>
              <div>{pld.dataKey}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default SalesGraph;
