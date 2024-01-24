import calendarIcon from "../../assets/icons/calendar-icon.png";

const DateView = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={calendarIcon} />
      <span className="text-sm font-medium">November 15, 2023</span>
    </div>
  );
};

export default DateView;
