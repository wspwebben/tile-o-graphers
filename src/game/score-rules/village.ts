import { type ScoreRule, ScoreRuleType } from "./types";

const wildholds: ScoreRule<ScoreRuleType.Village> = {
  type: ScoreRuleType.Village,
  title: "Wildholds",
  description: "dummy description",
  calculateScore: () => 0,
};

const greatCity: ScoreRule<ScoreRuleType.Village> = {
  type: ScoreRuleType.Village,
  title: "Great City",
  description: "dummy description",
  calculateScore: () => 0,
};

const greengoldPlains: ScoreRule<ScoreRuleType.Village> = {
  type: ScoreRuleType.Village,
  title: "Greengold Plains",
  description: "dummy description",
  calculateScore: () => 0,
};

const shieldgate: ScoreRule<ScoreRuleType.Village> = {
  type: ScoreRuleType.Village,
  title: "shieldgate",
  description: "dummy description",
  calculateScore: () => 0,
};

export const rules = [
  wildholds,
  greatCity,
  greengoldPlains,
  shieldgate,
] as const;
