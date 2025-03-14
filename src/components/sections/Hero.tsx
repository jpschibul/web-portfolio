import Navbar from '../layout/Navbar';
// import Spline from '@splinetool/react-spline';
// import {useTheme} from '../../util/useTheme';
const Hero = () => {
  return (
    <div className="relative h-[1000px] w-full">
      <Navbar />
      Test
      {/* Gradients top-left*/}
      <div className="gradient-basics rotate-169 radius[49rem] left-[-15%] top-[-8%] h-[19rem] w-[49rem]"></div>
      {/* Gradients center-right*/}
      <div className="gradient-basics rotate-169 radius[56rem] right-[-15%] top-[-8%] h-[55rem] w-[30rem]"></div>
      {/* Gradients center-bottom*/}
      <div className="gradient-basics rotate-82 radius[61rem] bottom-[0%] right-[35%] h-[20rem] w-[62rem]"></div>
      {/* <div>{darkMode ? 'Dark' : 'Light'}</div> */}
      <div className="block dark:hidden">Test Light</div>
      <div className="hidden dark:block">Test Dark</div>
    </div>
  );
};

export default Hero;
