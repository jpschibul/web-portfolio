import {useState} from 'react';
import Container from '../general/Container';
import DarkModeToggler from '../buttons/DarkModeToggler';
import LanguageToggler from '../buttons/LanguageToggler';
import MenuLinks from './MenuLinks';
import {useTranslation} from 'react-i18next';
import {MenuLink} from '../../util/types/Locales.types';

const Navbar = () => {
  const {t} = useTranslation();

  const menuLinks = t<string, {returnObjects: true}, MenuLink[]>('menu', {returnObjects: true});

  // console.log(menuLinks);
  const [openMenu, setMenuOpen] = useState<boolean>(false);

  //Toggle function to open and close Menu
  const toggleMenu = () => setMenuOpen(prevState => !prevState);
  return (
    <div className="w-full text-text-color dark:text-text-color-dark">
      <nav className="border-b border-text-color dark:border-[#D8DBFD]">
        <Container>
          <div className="flex items-center justify-between pb-4 pt-4 font-dmMono">
            <p className="font-dmMono text-xl font-normal leading-nav">Judith Pschibul</p>
            <MenuLinks menuLinks={menuLinks} />
            <div className="hidden justify-end font-light lg:flex">
              <DarkModeToggler />
              <LanguageToggler />
            </div>
            <button onClick={toggleMenu} className="block text-4xl lg:hidden">
              &#9776;
            </button>
          </div>
        </Container>
      </nav>
      <section
        onClick={toggleMenu}
        id="mobile-menu"
        className={`absolute top-0 w-full origin-right animate-open-menu flex-col justify-center bg-bgcolor text-5xl text-text-color dark:bg-bgcolor-dark dark:text-text-color-dark ${openMenu ? 'flex' : 'hidden'}`}>
        <nav className="flex min-h-screen flex-col items-center py-8" aria-label="mobile">
          {menuLinks.map((item, i) => (
            <a key={i} href={`#${item.anchor}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
