import Navbar from '../layout/Navbar';

const Hero = () => {
  return (
    <div className="relative h-[1000px] w-full">
      <Navbar />
      {/* Gradients top-left*/}
      <div className="gradient-basics rotate-169 radius[49rem] left-[-15%] top-[-8%] h-[19rem] w-[49rem]"></div>
      {/* Gradients center-right*/}
      <div className="gradient-basics rotate-169 radius[56rem] right-[-15%] top-[-8%] h-[55rem] w-[30rem]"></div>
      {/* Gradients center-bottom*/}
      <div className="gradient-basics rotate-82 radius[61rem] bottom-[0%] right-[35%] h-[20rem] w-[62rem]"></div>
    </div>
  );
};

export default Hero;
