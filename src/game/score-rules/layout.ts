import { type ScoreRule, ScoreRuleType } from "./types";

const borderlands: ScoreRule<ScoreRuleType.Layout> = {
  type: ScoreRuleType.Layout,
  title: "Borderlands",
  description: "dummy description",
  calculateScore: () => 0,
};

const lostBarony: ScoreRule<ScoreRuleType.Layout> = {
  type: ScoreRuleType.Layout,
  title: "Lost Barony",
  description: "dummy description",
  calculateScore: () => 0,
};

const brokenRoad: ScoreRule<ScoreRuleType.Layout> = {
  type: ScoreRuleType.Layout,
  title: "The Broken Road",
  description: "dummy description",
  calculateScore: () => 0,
};

const cauldrons: ScoreRule<ScoreRuleType.Layout> = {
  type: ScoreRuleType.Layout,
  title: "The Cauldrons",
  description: "dummy description",
  calculateScore: () => 0,
};

export const rules = [borderlands, lostBarony, brokenRoad, cauldrons] as const;
