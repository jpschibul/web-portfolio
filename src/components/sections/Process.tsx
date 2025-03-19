import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SplineContainer from '../general/SplineContainer';

import {splineProcess} from '../../assets/spline/SplineLinks';
import {ProcessType} from '../../util/types/Locales.types';
import {useTranslation} from 'react-i18next';

const Process = () => {
  const {t} = useTranslation();
  const processCopy = t<string, {returnObjects: true}, ProcessType>('process', {
    returnObjects: true
  });

  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="basis-1/3">
            <h3 className="mb-3">{t('process.title')}</h3>
          </div>
          <div className="flex basis-2/3 flex-row pt-4">
            <div>
              {processCopy.steps.map((item, i) => (
                <div key={item.title} className="flex flex-col items-center md:flex-row">
                  <div>
                    <SplineContainer links={splineProcess[i]} />
                  </div>
                  <div className="mb-5 md:mb-8 md:pt-12">
                    <h4
                      className={`${i % 2 === 0 ? 'heading-purple' : 'heading-blue'} mb-4 leading-5 md:leading-10`}>
                      {item.title}
                    </h4>
                    <p className="font-normal leading-6">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>{/* <SplineContainer links={splineLinkList[6]} /> */}</div>
      </Container>
    </SectionWrapper>
  );
};

export default Process;
