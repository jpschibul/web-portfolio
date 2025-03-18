import SplineContainer from '../general/SplineContainer';
import Container from '../layout/Container';
import SectionWrapper from '../layout/SectionWrapper';
import {splineLinkList} from '../../assets/spline/SplineLinks';
import {useTranslation} from 'react-i18next';

const Motto = () => {
  const {t} = useTranslation();
  return (
    <SectionWrapper>
      <Container>
        <div className="flex-row justify-between lg:flex">
          <div className="basis-[52%]">
            <p className="font-spline text-medium font-semibold leading-extra-loose tracking-minus text-[#6154A2] lg:text-2xl dark:text-[#8172C6]">
              {t('motto.pt1')}
            </p>
          </div>
          <div className="basis-[42%]">
            <p className="text-normal font-medium leading-7">{t('motto.pt2')}</p>
          </div>
        </div>
        <div className="justify-center lg:flex">
          <div className="lg:w-1/4">
            <SplineContainer links={splineLinkList[1]} />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Motto;
