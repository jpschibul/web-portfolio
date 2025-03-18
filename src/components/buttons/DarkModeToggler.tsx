import LightIcon from '../../assets/icons/lightMode.svg';
import DarkIcon from '../../assets/icons/darkMode.svg';
import {useDarkMode} from '../../hooks/useDarkMode';

const DarkModeToggler = () => {
  const {isDarkMode, toggleDarkMode} = useDarkMode();

  // console.log(isDarkMode);
  return (
    <button onClick={toggleDarkMode}>
      <img src={isDarkMode ? LightIcon : DarkIcon} alt="icon" />
    </button>
  );
};

export default DarkModeToggler;
