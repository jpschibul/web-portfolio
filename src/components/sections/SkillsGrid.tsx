import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import GridComponent from '../general/GridComponent';
import {SkillsType} from '../../util/types/Locales.types';
import {useTranslation} from 'react-i18next';

const SkillsGrid = () => {
  const {t} = useTranslation();
  const skills = t<string, {returnObjects: true}, SkillsType[]>('bentoBox', {returnObjects: true});

  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex basis-2/3 flex-col gap-3">
            <GridComponent content={skills[0]} />
            <GridComponent content={skills[2]} />
            <div className="flex flex-row gap-3">
              <div className="basis-1/2">
                <GridComponent content={skills[4]} />
              </div>
              <div className="basis-1/2">
                <GridComponent content={skills[5]} />
              </div>
            </div>
          </div>
          <div className="flex basis-1/3 flex-col justify-between gap-3">
            <GridComponent content={skills[1]} />
            <GridComponent content={skills[3]} />
          </div>
        </div>

        {/* <div className="grid auto-rows-[192px] grid-cols-4 gap-4">
          {bentoSize.map((item, i) => (
            <div key={i} className={`bg-[rgb(24 col-span-${item.cols} row-span-${item.rows}`}>
              <GridComponent content={skills[i]} />
            </div>
          ))}
        </div>
        <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 row-span-1 rounded-xl border-2 p-4 ${
                i === 3 || i === 6 ? 'col-span-2' : ''
              }`}></div>
          ))}
        </div> */}
        {/* <div className="grid h-[1000px] auto-rows-max grid-cols-4 grid-rows-6 gap-7"> */}

        {/* {skills.map((item, i) => (
            <div
              classNameName={`backdrop-blur-(100px) border-white bg-opacity-3 dark:border-[rgb(255,255,255)]/[0.04]px-8 rounded-2xl border-[1.6px] bg-[rgb(255,255,255)]/[0.6] py-7 dark:bg-[rgb(255,255,255)]/[0.04] col-span-${item.col} row-span-${item.rows}`}
              key={i}>
              <div>
                {item.headingColor === 'dark-blue' ? (
                  <h3 classNameName="text-[#5F7CD3] dark:text-[##84A1F7]">{item.title}</h3>
                ) : (
                  <h3 classNameName="text-btn dark:text-secondary">{item.title}</h3>
                )}
                <p classNameName="py-3 pr-5">{item.desc}</p>
              </div>
              <div classNameName="flex flex-wrap gap-2 pt-6">
                {item.facts.map(fact => (
                  <p classNameName="rounded-3xl border px-5 py-1 font-hanken font-light">{fact}</p>
                ))}
              </div>
            </div>
          ))}
          {/* <div classNameName="bg-red-500 col-span-3 row-span-2">1</div>
          <div classNameName="bg-red-500 col-span-1 row-span-3">2</div>
          <div classNameName="bg-red-500 col-span-3 row-span-2">3</div>
          <div classNameName="bg-red-500 col-span-1 row-span-3">4</div>
          <div classNameName="bg-red-500 col-span-2 row-span-2">5</div>
     
     
        {/* <div classNameNameNameNameNameNameName="flex gap-4">
          {[
            [24, 32, 32, 16, 16],
            [32, 40, 56],
            [64, 32, 32]
          ].map((card, index) => (
            <div classNameNameNameNameNameNameName="flex-1" key={index}>
              {card.map((height, index) => (
                <div
                  classNameNameNameNameNameNameName={`mb-4 h-${height} border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 rounded-xl border-2 p-4`}
                  key={index}></div>
              ))}
            </div>
          ))}
        </div> */}
        {/* <div classNameNameNameNameNameName="mx-auto max-w-screen-xl px-2 py-4 sm:py-4 lg:px-6">
          <div classNameNameNameNameNameName="grid h-full grid-cols-2 gap-4 md:grid-cols-4">
            <div classNameNameNameNameNameName="bg-gray-50 col-span-1 flex h-[200px] flex-col md:col-span-3"></div>
            
            <div classNameNameNameNameNameName="bg-gray-50 col-span-1 flex h-[200px] flex-col md:col-span-3"></div> */}

        {/* <div classNameNameNameNameNameName="bg-stone-50 col-span-2 sm:col-span-1 md:col-span-2">
              <a
                href=""
                classNameNameNameNameNameName="group relative mb-4 flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img
                  src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  classNameNameNameNameNameName="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div classNameNameNameNameNameName="from-gray-900/25 to-gray-900/5 absolute inset-0 bg-gradient-to-b"></div>
                <h3 classNameNameNameNameNameName="text-white xs:text-xl absolute left-0 top-0 z-10 p-4 text-2xl font-medium md:text-3xl">
                  Gin
                </h3>
              </a>
              <div classNameNameNameNameNameName="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  classNameNameNameNameNameName="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                  <img
                    src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    classNameNameNameNameNameName="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div classNameNameNameNameNameName="from-gray-900/25 to-gray-900/5 absolute inset-0 bg-gradient-to-b"></div>
                  <h3 classNameNameNameNameNameName="text-white xs:text-xl absolute left-0 top-0 z-10 p-4 text-2xl font-medium md:text-3xl">
                    Whiskey
                  </h3>
                </a>
                <a
                  href=""
                  classNameNameNameNameNameName="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                  <img
                    src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    classNameNameNameNameNameName="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div classNameNameNameNameNameName="from-gray-900/25 to-gray-900/5 absolute inset-0 bg-gradient-to-b"></div>
                  <h3 classNameNameNameNameNameName="text-white xs:text-xl absolute left-0 top-0 z-10 p-4 text-2xl font-medium md:text-3xl">
                    Vodka
                  </h3>
                </a>
              </div>
            </div> */}
        {/* <div classNameNameNameNameNameName="bg-sky-50 col-span-2 flex h-auto flex-col sm:col-span-1 md:col-span-1 md:h-full">
              <a
                href=""
                classNameNameNameNameNameName="group relative flex flex-grow flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img
                  src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  classNameNameNameNameNameName="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div classNameNameNameNameNameName="from-gray-900/25 to-gray-900/5 absolute inset-0 bg-gradient-to-b"></div>
                <h3 classNameNameNameNameNameName="text-white xs:text-xl absolute left-0 top-0 z-10 p-4 text-2xl font-medium md:text-3xl">
                  Brandy
                </h3>
              </a>
            </div> */}
        {/* </div> */}
        {/* </div> */}
      </Container>
    </SectionWrapper>
  );
};

export default SkillsGrid;
