import SplineContainer from '../general/SplineContainer';
import Container from '../layout/Container';
import SectionWrapper from '../layout/SectionWrapper';
import ThemeButton from '../buttons/ThemeButton';

import {splineLinkList} from '../../assets/spline/SplineLinks';
import {useTranslation} from 'react-i18next';

const Hero = () => {
  const {t} = useTranslation();
  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col items-center justify-between md:flex-row-reverse md:py-[3rem]">
          <div className="mb-6 md:basis-1/4">
            <SplineContainer links={splineLinkList[0]} />
          </div>
          <div className="py-9 text-center md:basis-3/4 md:text-left">
            <h1 className="text-[#8172C6]">{t('hero.title')}</h1>
            <h1>
              <span className="text-[#6154A2] dark:text-secondary-dark">{t('hero.title2')}</span>
            </h1>
            <p className="lg:20 mb-10 py-5 text-medium font-normal leading-extra-loose">
              {t('hero.subtitle')}
            </p>
            <ThemeButton btnLabel={t('themebtn.label')} href="mailto:info@judith-pschibul.com" />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Hero;
