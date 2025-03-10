import {MenuLink} from '../../types/Locales.types';

type Props = {
  menuLinks: MenuLink[];
};

const MenuLinks = ({menuLinks}: Props) => {
  return (
    <div className="hidden lg:flex w-[28%] font-light  justify-around">
      {menuLinks.map((item, i) => (
        <a key={i} href={`#${item.anchor}`}>
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default MenuLinks;
