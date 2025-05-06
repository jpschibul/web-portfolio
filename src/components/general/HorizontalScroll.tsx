import {useTransform, motion, easeInOut} from 'motion/react';

const HorizontalScroll = ({
  slides,
  outPutRange,
  scrollYProgress
}: {
  slides: string[];
  outPutRange: string[];
  scrollYProgress: any;
}) => {
  const x = useTransform(scrollYProgress, [0, 1], outPutRange, {ease: easeInOut});

  return (
    <motion.div style={{x}} className="mb-2 flex gap-2">
      {slides.map(item => (
        <div key={item}>
          <img className="max-w-[400px]" src={item} alt="Test" />
        </div>
      ))}
    </motion.div>
  );
};

export default HorizontalScroll;
