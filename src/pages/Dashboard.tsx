import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import SalesGraph from "../components/feature/SalesGraph";

const Dashboard = () => {
  return (
    <div className="min-h-screen grid grid-cols-10 bg-lightGray">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-9">
        <Header />
        <div className=" p-5 grid grid-cols-6 grid-rows-2 gap-5">
          <div className="col-span-4">
            <SalesGraph />
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
