import {useState} from 'react';
import Container from '../general/Container';
import DarkModeToggler from '../buttons/DarkModeToggler';
import LanguageToggler from '../buttons/LanguageToggler';
import MenuLinks from './MenuLinks';
import {useTranslation} from 'react-i18next';
import {MenuLink} from '../../types/Locales.types';

const Navbar = () => {
  const {t} = useTranslation();

  const menuLinks = t<string, {returnObjects: true}, MenuLink[]>('menu', {returnObjects: true});

  // console.log(menuLinks);
  const [openMenu, setMenuOpen] = useState<boolean>(false);

  //Toggle function to open and close Menu
  const toggleMenu = () => setMenuOpen(prevState => !prevState);
  return (
    <div className=" text-text-color dark:text-text-color-dark">
      <nav className="bg-bgcolor border-b dark:bg-bgcolor-dark  border-text-color dark:border-[#D8DBFD] ">
        <Container>
          <div className="pt-6 pb-4 flex justify-between items-center font-dmMono ">
            <p className="text-xl font-normal leading-nav">Judith Pschibul</p>
            <MenuLinks menuLinks={menuLinks} />
            <div className="hidden lg:flex  font-light  justify-end">
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
        className={`absolute top-0 bg-bgcolor dark:bg-bgcolor-dark w-full text-5xl text-text-color dark:text-text-color-dark flex-col justify-center origin-right animate-open-menu ${openMenu ? 'flex' : 'hidden'}`}>
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
