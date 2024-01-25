import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import SalesGraph from "../components/feature/SalesGraph";
import StatsInfo from "../components/layout/StatsInfo";
import OrderTable from "../components/feature/OrderTable";
import TopPlatform from "../components/ui/TopPlatform";

const Dashboard = () => {
  return (
    <div className="min-h-screen grid grid-cols-10 bg-smokeGray">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-9">
        <Header />
        <div className=" p-5 grid grid-cols-7 grid-rows-2 gap-5">
          <div className="col-span-4">
            <SalesGraph />
          </div>
          <div className="col-span-3 row-span-1">
            <StatsInfo />
          </div>
          <div className="col-span-4">
            <OrderTable />
          </div>
          <div className="col-span-3">
            <TopPlatform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
