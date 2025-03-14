import {useState, useEffect} from 'react';

type ThemeType = {
  darkMode?: boolean;
  toggleMode: () => void;
};

export function useTheme(): ThemeType {
  //   const [theme, setTheme] = useState<string>('');

  const [darkMode, setDarkMode] = useState<boolean>();

  useEffect(() => {
    //detect user's theme preference in browser
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    //set Theme for the site
    const checkDarkMode = () => {
      setDarkMode(mediaQuery.matches);
      if (mediaQuery.matches) {
        window.document.documentElement.classList.add('dark'); // Apply dark mode
      } else {
        window.document.documentElement.classList.remove('dark'); // Apply light mode
      }
    };
    checkDarkMode();
  }, []);

  // Manually switch between dark and light mode
  const toggleMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return {darkMode, toggleMode};
}
