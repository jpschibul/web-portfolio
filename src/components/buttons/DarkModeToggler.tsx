import {useEffect, useState} from 'react';
import LightIcon from '../../assets/icons/lightMode.svg';
import DarkIcon from '../../assets/icons/darkMode.svg';

const DarkModeToggler = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    //detect user's browser preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    // console.log(mediaQuery ? true : false);

    const checkDarkMode = () => {
      setDarkMode(mediaQuery.matches);
      if (mediaQuery.matches) {
        document.documentElement.classList.add('dark'); // Apply dark mode
      } else {
        document.documentElement.classList.remove('dark'); // Apply light mode
      }
    };
    checkDarkMode();
  }, []);

  //Manually switch between dark and light mode
  const toggleMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      // console.log(newMode);
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };
  return (
    <button onClick={toggleMode}>
      <img src={darkMode ? LightIcon : DarkIcon} alt="icon" />
    </button>
  );
};

export default DarkModeToggler;
