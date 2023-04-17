import type { Grid } from "@/types";

export enum ScoreRuleType {
  Forest = "Forest",
  Farm = "Farm",
  Village = "Village",
  Layout = "Layout",
}

export interface ScoreRule<Type extends ScoreRuleType> {
  type: Type;
  title: string;
  description: string;
  image?: string;
  calculateScore: (field: Grid) => number;
}
