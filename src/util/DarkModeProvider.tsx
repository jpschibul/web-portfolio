import {createContext, ReactNode, useState, useContext, useEffect} from 'react';

export type ThemeContextType = 'light' | 'dark' | string;

// Define the type for our context's value
interface DarkModeContextType {
  isDarkMode: boolean | undefined;
  toggleDarkMode: () => void;
}

// Create context
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

// Create a provider component
interface DarkModeProviderProps {
  children: ReactNode;
}

//detect user preference in browser
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

export const DarkModeProvider = ({children}: DarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(mediaQuery.matches);

  useEffect(() => {
    setIsDarkMode(mediaQuery.matches);
    if (mediaQuery.matches) {
      window.document.documentElement.classList.add('dark'); // Apply dark mode
    } else {
      window.document.documentElement.classList.remove('dark'); // Apply light mode
    }
  }, []);

  // Manually switch between dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to access the context
export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
