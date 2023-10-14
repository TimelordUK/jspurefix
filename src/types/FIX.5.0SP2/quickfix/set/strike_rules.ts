import { IMaturityRules } from './maturity_rules'

export interface IStrikeRules {
  StrikeRuleID?: string// [1] 1223 (String)
  StartStrikePxRange?: number// [2] 1202 (Float)
  EndStrikePxRange?: number// [3] 1203 (Float)
  StrikeIncrement?: number// [4] 1204 (Float)
  StrikeExerciseStyle?: number// [5] 1304 (Int)
  MaturityRules?: IMaturityRules[]// [6] MaturityRuleID.1222, MaturityMonthYearFormat.1303 .. MaturityMonthYearIncrement.1229
}
