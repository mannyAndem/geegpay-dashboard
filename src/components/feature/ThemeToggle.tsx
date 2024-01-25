import lightIcon from "../../assets/icons/brightness 1.svg";
import darkIcon from "../../assets/icons/moon 1.svg";

const ThemeToggle = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 items-center bg-white rounded-[28px]">
        <button className="p-3 rounded-full bg-green">
          <img src={lightIcon} className="w-6 h-6" />
        </button>
        <button className="p-3 rounded-full">
          <img src={darkIcon} className="w-6 h-6 object-cover" />
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
