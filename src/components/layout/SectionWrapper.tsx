import {SectionType} from '../../util/types/general.types';

const SectionWrapper = ({children, sectionId}: SectionType) => {
  return (
    <section id={sectionId} className="py-[3rem]">
      {children}
    </section>
  );
};

export default SectionWrapper;
