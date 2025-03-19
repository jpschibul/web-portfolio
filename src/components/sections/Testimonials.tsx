import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';

import {useTranslation} from 'react-i18next';
import {TestimonialsType} from '../../util/types/Locales.types';

const Testimonials = () => {
  const {t} = useTranslation();

  const testimonials = t<string, {returnObjects: true}, TestimonialsType>('testimonials', {
    returnObjects: true
  });

  return (
    <SectionWrapper>
      <Container>
        <h3 className="mb-10 md:mb-12">{t('testimonials.title')}</h3>
        <div className="flex flex-row flex-wrap justify-between">
          {testimonials.list.map((item, i) => (
            <div key={i} className="mb-12 w-full md:basis-[45%]">
              <p className="mb-10 text-lg font-normal leading-7">{item.desc}</p>
              <p>
                <span className="underline">{item.name}</span>
                &nbsp;-&nbsp;{item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Testimonials;
