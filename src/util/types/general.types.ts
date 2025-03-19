export type GradientSettings = {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  width: number | string;
  height: number | string;
  transform: number | string;
  borderRadius: number | string;
};

export type SectionType = {
  children: React.ReactElement;
  sectionId?: string;
};

export type SplineType = {
  title: string;
  dark: string;
  light: string;
};

export type ThemeButtonType = {
  btnLabel: string;
  href?: string;
  onClick?: () => void;
};
