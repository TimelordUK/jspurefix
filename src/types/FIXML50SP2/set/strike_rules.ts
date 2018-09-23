import { IMaturityRules } from './maturity_rules'

export interface IStrikeRules {
  StrikeRuleID?: string// 1223
  StartStrikePxRange?: number// 1202
  EndStrikePxRange?: number// 1203
  StrikeIncrement?: string// 1204
  StrikeExerciseStyle?: number// 1304
  MaturityRules?: IMaturityRules[]
}
