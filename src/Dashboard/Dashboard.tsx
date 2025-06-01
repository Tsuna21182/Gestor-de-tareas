import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faChartBar,
  faFilter,
  faGear,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "../components/LogoutButton";
import useAuth from "../Hooks/useAuth";

type DashboardProps = {
  darkMode: boolean;
};

function Dashboard({ darkMode }: DashboardProps) {
  const activities = [
    { name: "Dashboard", icon: faDashboard, color: "text-blue-500" },
    { name: "Reports", icon: faChartBar, color: "text-green-500" },
    { name: "Filters", icon: faFilter, color: "text-purple-500" },
    { name: "Settings", icon: faGear, color: "text-yellow-500" },
  ];

  const { logout, usuario } = useAuth();

  return (
    <div
      className={`p-15 grid md:grid-cols-3 gap-10 ${
        darkMode ? "dark:bg-BlackBackground dark:text-white" : ""
      }`}
    >
      <div
        className={`${
          darkMode ? "bg-GrayCardFond" : "bg-white/80"
        } rounded-xl p-5 flex flex-col`}
      >
        <h4 className="flex justify-between items-center text-2xl font-bold">
          initech
        </h4>
        <nav className="mt-10">
          {activities.map((activity, index) => (
            <button
              key={index}
              className={`transition-all duration-300 ${
                darkMode ? "hover:bg-GrayCardFond2" : "hover:bg-gray-200"
              } group flex items-center gap-5 p-3 rounded-lg text-xl cursor-pointer w-full`}
            >
              <FontAwesomeIcon
                icon={activity.icon}
                className={`${activity.color} transition-all duration-300 `}
              />
              {activity.name}
            </button>
          ))}
          <LogoutButton logout={logout} darkMode={darkMode} />
        </nav>
      </div>
      <div className="col-span-2 ">
        <div
          className={`${
            darkMode ? "bg-GrayCardFond" : "bg-white/80"
          } p-5 rounded-xl flex justify-between items-center`}
        >
          <h4 className="text-2xl font-bold">Dashboard</h4>
          <div className="flex items-center gap-5">
            <FontAwesomeIcon icon={faBell} className="text-4xl" />
            <img
              src="/images/person.png"
              alt="imagen usuario"
              className="w-15"
            />
          </div>
        </div>
        <div
          className={`mt-10 p-5 rounded-xl ${
            darkMode ? "bg-GrayCardFond" : "bg-white/80"
          }`}
        >
          <h4 className="text-2xl font-bold">Welcome {usuario?.displayName}</h4>
          <p className="mt-20">espacio para referencias</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
