import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function LogoutButton({
  logout,
  darkMode,
}: {
  logout: () => void;
  darkMode: boolean;
}) {
  return (
    <button
      className={`transition-all duration-300 ${
        darkMode ? "hover:bg-GrayCardFond2" : "hover:bg-gray-200"
      } group flex items-center gap-5 p-3 rounded-lg text-xl cursor-pointer w-full`}
      onClick={logout}
    >
      <FontAwesomeIcon icon={faRightFromBracket} className="text-Red" />
      Logout
    </button>
  );
}

export default LogoutButton;
