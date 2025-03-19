export type MenuLink = {
  label: string;
  anchor: string;
};

export type SkillsType = {
  headingColor: string;
  title: string;
  desc?: string;
  facts: string[];
};

export type HeroType = {
  title: string;
  subtitle: string;
  btnLabel: string;
};

export type ProcessType = {
  title: string;
  steps: ProcessSteps[];
};

export type ProcessSteps = {
  title: string;
  desc: string;
};

export type TestimonialsType = {
  title: string;
  list: TestimonalList[];
};

export type TestimonalList = {
  desc: string;
  name: string;
  title: string;
};
