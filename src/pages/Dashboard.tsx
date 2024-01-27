import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import SalesGraph from "../components/feature/SalesGraph";
import StatsInfo from "../components/layout/StatsInfo";
import OrderTable from "../components/feature/OrderTable";
import TopPlatform from "../components/ui/TopPlatform";
import MobileHeader from "../components/layout/MobileHeader";

const Dashboard = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 bg-smokeGray dark:bg-darkBlue lg:grid-cols-10">
      <div className="hidden col-span-1 lg:block">
        <Sidebar />
      </div>
      <div className="col-span-9">
        <div className="block lg:hidden">
          <MobileHeader />
        </div>
        <div className="hidden lg:block">
          <Header />
        </div>

        <div className=" p-5 grid grid-cols-1 gap-5 lg:grid-cols-7">
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
