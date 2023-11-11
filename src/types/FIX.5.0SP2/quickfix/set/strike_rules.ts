import { IStrikeRulesNoStrikeRules } from './strike_rules_no_strike_rules'

export interface IStrikeRules {
  NoStrikeRules?: IStrikeRulesNoStrikeRules[]// [1] StrikeRuleID.1223, StartStrikePxRange.1202 .. MaturityMonthYearIncrement.1229
}
