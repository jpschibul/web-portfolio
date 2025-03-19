import Spline from '@splinetool/react-spline';
import {SplineType} from '../../util/types/general.types';
import {useDarkMode} from '../../hooks/useDarkMode';

type Props = {
  links: SplineType;
};

const SplineContainer = ({links}: Props) => {
  const {isDarkMode} = useDarkMode();
  return <Spline aria-hidden="true" scene={isDarkMode ? links.dark : links.light} />;
};

export default SplineContainer;
