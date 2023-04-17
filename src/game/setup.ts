import { pickRandom } from "@/helpers/structure";
import {
  type ScoreRule,
  ScoreRuleType,
  rules as scoreRuleVariants,
} from "./score-rules";

const chooseScoreRule = <Type extends ScoreRuleType>(
  rules: readonly ScoreRule<Type>[]
): ScoreRule<Type> => {
  return pickRandom(rules);
};

export const setup = () => {
  const scoreRules = scoreRuleVariants.map(chooseScoreRule);

  console.log(scoreRules.map((r) => r.title));
};
