import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function LogoutButton({ logout }: { logout: () => void }) {
  return (
    <button
      className="transition-all duration-300 hover:bg-gray-200 group flex items-center gap-5 p-3 rounded-lg text-xl cursor-pointer w-full"
      onClick={logout}
    >
      <FontAwesomeIcon icon={faRightFromBracket} className="text-Red" />
      Logout
    </button>
  );
}

export default LogoutButton;
