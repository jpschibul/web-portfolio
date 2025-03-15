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
  links: {
    dark: string;
    light: string;
  };
};
