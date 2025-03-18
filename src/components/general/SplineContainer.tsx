import Spline from '@splinetool/react-spline';
import {SplineType} from '../../util/types/general.types';
import {useDarkMode} from '../../hooks/useDarkMode';

const SplineContainer = ({links}: SplineType) => {
  const {isDarkMode} = useDarkMode();
  return <Spline aria-hidden="true" scene={isDarkMode ? links.dark : links.light} />;
};

export default SplineContainer;
