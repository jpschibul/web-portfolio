import {SkillsType} from '../../util/types/Locales.types';

type Props = {
  content: SkillsType;
};

const GridComponent = ({content}: Props) => {
  return (
    <div className="backdrop-blur-(100px) bg-opacity-3 flex grow flex-col justify-between rounded-2xl border-[1.6px] border-white bg-[rgb(255,255,255)]/[0.6] p-6 dark:border-[rgb(255,255,255)]/[0.04] dark:bg-[rgb(255,255,255)]/[0.04]">
      <div>
        {content.headingColor === 'dark-blue' ? (
          <h3 className="text-[#5F7CD3] dark:text-[##84A1F7]">{content.title}</h3>
        ) : (
          <h3 className="text-btn dark:text-secondary">{content.title}</h3>
        )}
        <p className="hidden py-5 pr-5 md:block">{content.desc}</p>
      </div>
      <div className="flex flex-wrap gap-2 pt-4">
        {content.facts.map(fact => (
          <p key={fact} className="rounded-3xl border px-5 py-1 font-hanken text-sm font-light">
            {fact}
          </p>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
