import { useEffect, useState } from 'react';

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const darkMode = localStorage.getItem('dark-mode');
    return darkMode === 'enabled' || (!darkMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    document.body.classList.add('transition');
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('dark-mode', newMode ? 'enabled' : 'disabled');
      return newMode;
    });

    const timeoutId = setTimeout(() => {
      document.body.classList.remove('transition');
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
};

export default useTheme;
