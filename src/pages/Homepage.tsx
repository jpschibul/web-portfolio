import Navbar from '../components/layout/Navbar';
import {useTranslation} from 'react-i18next';

const Homepage = () => {
  const {t} = useTranslation();
  return (
    <div>
      <Navbar />
      Homepage
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {t('description.part2')}
      </a>
    </div>
  );
};

export default Homepage;
