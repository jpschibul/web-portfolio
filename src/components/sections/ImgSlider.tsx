import {useRef} from 'react';
import {useScroll} from 'motion/react';
import SectionWrapper from '../layout/SectionWrapper';
import HorizontalScroll from '../general/HorizontalScroll';

const slides = new Array(9).fill('').map((_, index) => `src/assets/img/0${index + 1}.png`);

const ImgSlider = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: targetRef
  });

  return (
    <SectionWrapper>
      <section ref={targetRef} className="p relative h-[250vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div>
            <HorizontalScroll
              slides={slides}
              scrollYProgress={scrollYProgress}
              outPutRange={['0%', '-48%']}
            />
            <HorizontalScroll
              slides={slides}
              scrollYProgress={scrollYProgress}
              outPutRange={['-48%', '0%']}
            />
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default ImgSlider;
