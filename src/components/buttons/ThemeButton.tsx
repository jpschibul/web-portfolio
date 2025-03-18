import {ThemeButtonType} from '../../util/types/general.types';

const ThemeButton = ({btnLabel, onClick, href}: ThemeButtonType) => {
  return (
    <a
      onClick={onClick}
      href={href}
      className="button rounded-3xl border-2 px-7 py-2 font-dmMono text-btn hover:bg-primary-dark hover:bg-opacity-60 dark:text-text-color-dark dark:hover:bg-btn">
      {btnLabel}
    </a>
  );
};

export default ThemeButton;
