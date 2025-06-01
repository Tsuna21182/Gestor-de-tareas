type DarkModeProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

function DarkMode({ setDarkMode, darkMode }: DarkModeProps) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`cursor-pointer w-16 h-8 flex items-center rounded-full px-1 transition-colors duration-300 ${
        darkMode ? "bg-gray-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full  shadow-md transform transition-transform duration-300 ${
          darkMode ? "translate-x-8 bg-gray-400" : "translate-x-0 bg-white"
        }`}
      />
    </button>
  );
}

export default DarkMode;
