import { IMaturityRules } from './maturity_rules'

export interface IStrikeRules {
  StrikeRuleID?: string// [1] 1223 (String)
  StartStrikePxRange?: number// [1] 1202 (Float)
  EndStrikePxRange?: number// [1] 1203 (Float)
  StrikeIncrement?: number// [1] 1204 (Float)
  StrikeExerciseStyle?: number// [1] 1304 (Int)
  MaturityRules?: IMaturityRules[]// [1] MatRuleID.1222, MMYFmt.1303 .. MMYIncr.1229
}
