import StatCard from "../feature/StatCard";
import totalIcon from "../../assets/icons/icon-total.svg";
import graphUp from "../../assets/images/graph-up.svg";
import graphDown from "../../assets/images/graph-down.png";
import performanceGraphGood from "../../assets/images/Up.svg";
import performanceGraphBad from "../../assets/images/Down.svg";
import refundIcon from "../../assets/icons/icon-refund.svg";
import salesIcon from "../../assets/icons/icon-sales.svg";
import incomeIcon from "../../assets/icons/icon-income.svg";

const StatsInfo = () => {
  return (
    <div className="h-full w-full flex flex-col items-center gap-4 lg:grid lg:grid-cols-2">
      <StatCard
        label="Total Order"
        amount={350}
        icon={totalIcon}
        graph={graphUp}
        performanceGraph={performanceGraphGood}
      />
      <StatCard
        label="Total Refund"
        amount={270}
        icon={refundIcon}
        graph={graphDown}
        performanceGraph={performanceGraphBad}
      />
      <StatCard
        label="Average Sales"
        amount={1567}
        icon={salesIcon}
        graph={graphDown}
        performanceGraph={performanceGraphBad}
      />
      <StatCard
        label="Total Income"
        amount="$350,000"
        icon={incomeIcon}
        graph={graphUp}
        performanceGraph={performanceGraphGood}
      />
    </div>
  );
};

export default StatsInfo;
