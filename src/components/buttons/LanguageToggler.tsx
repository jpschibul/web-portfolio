import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import LanguageIcon from '../../assets/icons/LanguageIcon';

const LanguageToggler = () => {
  const {i18n} = useTranslation();
  const [lang, setLanguage] = useState<string>(i18n.language);

  const switchLanguage = () => {
    i18n.language === 'de' ? i18n.changeLanguage('en') : i18n.changeLanguage('de');
    setLanguage(i18n.language);
    // console.log(lang);
  };

  return (
    <button className="ml-4 flex items-center" onClick={switchLanguage}>
      <LanguageIcon />
      <p className="ml-1">{lang === 'de' ? 'EN' : 'DE'}</p>
    </button>
  );
};

export default LanguageToggler;
