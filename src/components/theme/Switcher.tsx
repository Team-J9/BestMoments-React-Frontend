import useTheme from '../../hooks/useTheme';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeSwitcher = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode} className="focus:outline-none">
      {isDarkMode ? (
        <FiMoon className="w-8 h-8 text-yellow-500 transition-transform transform rotate-40" />
      ) : (
        <FiSun className="w-8 h-8 text-yellow-500 transition-transform transform rotate-45" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
