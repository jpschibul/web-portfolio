import {useContext} from 'react';
import {DarkModeContextType, DarkModeContext} from '../util/DarkModeProvider';

import {} from '../util/DarkModeProvider';
export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
