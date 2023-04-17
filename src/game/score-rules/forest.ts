import { type ScoreRule, ScoreRuleType } from "./types";

const sentinelWood: ScoreRule<ScoreRuleType.Forest> = {
  type: ScoreRuleType.Forest,
  title: "Sentinel Wood",
  description: "dummy description",
  calculateScore: () => 0,
};

const greenbough: ScoreRule<ScoreRuleType.Forest> = {
  type: ScoreRuleType.Forest,
  title: "Greenbough",
  description: "dummy description",
  calculateScore: () => 0,
};

const treetower: ScoreRule<ScoreRuleType.Forest> = {
  type: ScoreRuleType.Forest,
  title: "Treetower",
  description: "dummy description",
  calculateScore: () => 0,
};

const stonesideForest: ScoreRule<ScoreRuleType.Forest> = {
  type: ScoreRuleType.Forest,
  title: "Stoneside Forest",
  description: "dummy description",
  calculateScore: () => 0,
};

export const rules = [
  sentinelWood,
  greenbough,
  treetower,
  stonesideForest,
] as const;
