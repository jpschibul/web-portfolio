import Navbar from '../layout/Navbar';
import SplineContainer from '../general/SplineContainer';
import Container from '../general/Container';
import SectionWrapper from '../layout/SectionWrapper';
import {splineLinkList} from '../../assets/spline/SplineLinks';
import {useTranslation} from 'react-i18next';

const Hero = () => {
  const {t} = useTranslation();
  return (
    <div className="relative h-[1000px] w-full">
      <Navbar />
      <SectionWrapper>
        <Container>
          <div className="flex flex-col justify-between md:flex-row-reverse md:py-[5rem]">
            <div className="mb-6 md:basis-1/4">
              <SplineContainer links={splineLinkList[0]} />
            </div>
            <div className="py-9 text-center md:basis-3/4 md:text-left">
              <h1 className="text-[#8172C6]">{t('hero.title')}</h1>
              <h1>
                <span className="text-[#6154A2] dark:text-secondary-dark">{t('hero.title2')}</span>
              </h1>
              <p className="py-5 text-medium font-normal leading-[147%]">{t('hero.subtitle')}</p>
            </div>
          </div>
        </Container>
      </SectionWrapper>
      {/* Gradients top-left*/}
      <div
        aria-hidden="true"
        className="gradient-basics rotate-139 radius[49rem] left-[-15%] top-[-20%] h-[19rem] w-[49rem]"></div>
      {/* Gradients center-right*/}
      <div
        aria-hidden="true"
        className="gradient-basics rotate-169 radius[56rem] right-[-15%] top-[-8%] h-[55rem] w-[30rem]"></div>
      {/* Gradients center-bottom*/}
      <div
        aria-hidden="true"
        className="gradient-basics rotate-82 radius[61rem] bottom-[0%] right-[35%] h-[20rem] w-[62rem]"></div>
    </div>
  );
};

export default Hero;
