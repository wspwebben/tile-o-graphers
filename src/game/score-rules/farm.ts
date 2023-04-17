import { type ScoreRule, ScoreRuleType } from "./types";

const canalCake: ScoreRule<ScoreRuleType.Farm> = {
  type: ScoreRuleType.Farm,
  title: "Canal Cake",
  description: "dummy description",
  calculateScore: () => 0,
};

const magesValley: ScoreRule<ScoreRuleType.Farm> = {
  type: ScoreRuleType.Farm,
  title: "Mages Valley",
  description: "dummy description",
  calculateScore: () => 0,
};

const goldenCranary: ScoreRule<ScoreRuleType.Farm> = {
  type: ScoreRuleType.Farm,
  title: "The Golden Cranary",
  description: "dummy description",
  calculateScore: () => 0,
};

const shoresideExpanse: ScoreRule<ScoreRuleType.Farm> = {
  type: ScoreRuleType.Farm,
  title: "Shoreside Expanse",
  description: "dummy description",
  calculateScore: () => 0,
};

export const rules = [
  canalCake,
  magesValley,
  goldenCranary,
  shoresideExpanse,
] as const;
