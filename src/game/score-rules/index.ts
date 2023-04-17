import { rules as forestRules } from "./forest";
import { rules as farmRules } from "./farm";
import { rules as villageRules } from "./village";
import { rules as layoutRules } from "./layout";

export { type ScoreRule, ScoreRuleType } from "./types";

export const rules = [
  forestRules,
  farmRules,
  villageRules,
  layoutRules,
] as const;
