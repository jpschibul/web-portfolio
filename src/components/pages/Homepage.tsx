import Hero from '../sections/Hero';
import Navbar from '../layout/Navbar';
import Motto from '../sections/Motto';
import SkillsGrid from '../sections/SkillsGrid';
import Process from '../sections/Process';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Motto />
      <SkillsGrid />
      <Process />
      {/* Gradients top-left*/}
      {/* <div
        aria-hidden="true"
        className="gradient-basics rotate-139 radius[49rem] left-[-25%] top-[-20%] h-[19rem] w-[49rem]"></div> */}
      {/* Gradients center-right*/}
      {/* <div
        aria-hidden="true"
        className="gradient-basics rotate-169 radius[56rem] right-[-20%] top-[-22%] h-[55rem] w-[30rem]"></div> */}
      {/* Gradients center-bottom*/}
      {/* <div
        aria-hidden="true"
        className="gradient-basics rotate-82 radius[61rem] bottom-[0%] right-[25%] h-[20rem] w-[62rem]"></div> */}
    </div>
  );
};

export default Homepage;
