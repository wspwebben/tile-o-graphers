import { type Season, SeasonRule } from "./types";

export const spring: Season = {
  title: "Spring",
  duration: 8,
  rules: [SeasonRule.first, SeasonRule.second],
} as const;

export const summer: Season = {
  title: "Summer",
  duration: 8,
  rules: [SeasonRule.second, SeasonRule.third],
} as const;

export const autumn: Season = {
  title: "Autumn",
  duration: 7,
  rules: [SeasonRule.third, SeasonRule.fourth],
} as const;

export const winter: Season = {
  title: "Winter",
  duration: 6,
  rules: [SeasonRule.fourth, SeasonRule.first],
} as const;
