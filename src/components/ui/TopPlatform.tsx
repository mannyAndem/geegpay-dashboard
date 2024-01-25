import progressBar1 from "../../assets/images/progress bar.svg";
import progressBar2 from "../../assets/images/progress bar (1).svg";
import progressBar3 from "../../assets/images/progress bar (2).svg";

const TopPlatform = () => {
  return (
    <div className="w-full bg-white rounded-xl p-5 font-jakarta">
      <div className="flex items-center justify-between mb-5">
        <span className="text-lg font-semibold">Top Platform</span>
        <button className="text-lg text-green font-medium">See All</button>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <span>Book Bazaar</span>
          <img src={progressBar1} className="w-full" />
          <div className="flex items-center justify-between">
            <span className="text-lg text-[#525252]">$2.500,000</span>
            <span className="text-lg text-[#525252]">+15%</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span>Artisian Aisle</span>
          <img src={progressBar2} className="w-full" />
          <div className="flex items-center justify-between">
            <span className="text-lg text-[#525252]">$1.800,000</span>
            <span className="text-lg text-[#525252]">+10%</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span>Toy Troop</span>
          <img src={progressBar3} className="w-full" />
          <div className="flex items-center justify-between">
            <span className="text-lg text-[#525252]">$1,200,000</span>
            <span className="text-lg text-[#525252]">+8%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlatform;
