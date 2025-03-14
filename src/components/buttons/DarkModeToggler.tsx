import LightIcon from '../../assets/icons/lightMode.svg';
import DarkIcon from '../../assets/icons/darkMode.svg';
import {useTheme} from '../../util/useTheme';

const DarkModeToggler = () => {
  const {darkMode, toggleMode} = useTheme();

  return (
    <button onClick={toggleMode}>
      <img src={darkMode ? LightIcon : DarkIcon} alt="icon" />
    </button>
  );
};

export default DarkModeToggler;
