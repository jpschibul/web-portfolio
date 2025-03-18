import {SectionType} from '../../util/types/general.types';

const SectionWrapper = ({children, sectionId}: SectionType) => {
  return (
    <section id={sectionId} className="py-9 lg:py-12">
      {children}
    </section>
  );
};

export default SectionWrapper;
