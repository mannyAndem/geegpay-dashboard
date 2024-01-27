import lightIcon from "../../assets/icons/brightness 1.svg";
import darkIcon from "../../assets/icons/moon 1.svg";
import { useThemeContext } from "../../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div className="flex justify-center">
      <button
        onClick={toggleTheme}
        className="flex flex-col gap-4 items-center bg-white rounded-[28px] dark:bg-paleGreen"
      >
        <div
          className={`${theme === "light" ? "bg-green" : ""} p-3 rounded-full`}
        >
          <img src={lightIcon} className="w-6 h-6" />
        </div>
        <div
          className={`${theme === "dark" ? "bg-green" : ""} p-3 rounded-full`}
        >
          <img src={darkIcon} className="w-6 h-6 object-cover" />
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
