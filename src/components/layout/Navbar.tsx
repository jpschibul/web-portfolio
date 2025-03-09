import Container from '../general/Container';
import DarkModeToggler from '../buttons/DarkModeToggler';
import LanguageToggler from '../buttons/LanguageToggler';
import {useTranslation} from 'react-i18next';
import {MenuLinks} from '../../types/Locales.types';

const Navbar = () => {
  const {t} = useTranslation();

  const menuLinks = t<string, {returnObjects: true}, MenuLinks[]>('menu', {returnObjects: true});

  // console.log(menuLinks);
  return (
    <nav className="bg-bgcolorborder-b dark:bg-bgcolor-dark  border-text-color dark:border-[#D8DBFD] text-primary-dark">
      <Container>
        <div className="pt-6 pb-4 flex justify-between font-dmMono  text-text-color dark:text-text-color-dark">
          <p className="text-xl font-normal leading-nav">Judith Pschibul</p>
          <div className="hidden lg:flex w-[28%] font-light  justify-around">
            {menuLinks.map((item, i) => (
              <a key={i} href={`#${item.anchor}`}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex w-[20%] justify-end">
            <DarkModeToggler />
            <LanguageToggler />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
