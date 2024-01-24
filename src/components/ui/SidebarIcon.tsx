import { NavLink } from "react-router-dom";

type SidebarIconProps = {
  icon: string;
  to?: string;
};

const SidebarIcon = ({ icon, to }: SidebarIconProps) => {
  return (
    <div className="py-3">
      {to ? (
        <NavLink
          to={to}
          className={({ isActive }) =>
            `w-full px-3 flex justify-center border-r-4 transition-all duration-150 ease-out ${
              isActive ? "border-r-black " : "border-r-transparent"
            }`
          }
        >
          <img src={icon} className="w-6 h-6" />
        </NavLink>
      ) : (
        <button className="px-3 w-full flex justify-center ">
          <img src={icon} className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default SidebarIcon;
