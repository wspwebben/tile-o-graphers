export enum SeasonRule {
  first = "A",
  second = "B",
  third = "C",
  fourth = "D",
}

export interface Season {
  title: string;
  duration: number;
  rules: readonly [SeasonRule, SeasonRule];
  image?: string;
}
