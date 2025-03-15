import {MenuLink} from '../../util/types/Locales.types';

type Props = {
  menuLinks: MenuLink[];
};

const MenuLinks = ({menuLinks}: Props) => {
  return (
    <div className="hidden w-[28%] justify-around font-light lg:flex">
      {menuLinks.map((item, i) => (
        <a key={i} href={`#${item.anchor}`}>
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default MenuLinks;
