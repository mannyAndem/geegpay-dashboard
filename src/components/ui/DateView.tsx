import calendarIcon from "../../assets/icons/calendar-icon.png";
import calendarIconDark from "../../assets/icons/calendar-icon-dark.svg";
import { useThemeContext } from "../../contexts/ThemeContext";
import { parseDate } from "../../utils/parseDate";

const DateView = () => {
  const { theme } = useThemeContext();

  const date = new Date();

  return (
    <div className="flex items-center gap-2">
      {theme === "light" ? (
        <img src={calendarIcon} />
      ) : (
        <img src={calendarIconDark} />
      )}
      <span className="text-sm font-medium font-inter">{parseDate(date)}</span>
    </div>
  );
};

export default DateView;
