import { ISecurityTradingRules } from './security_trading_rules'
import { IStrikeRules } from './strike_rules'

export interface IMarketSegmentGrp {
  MarketID?: string// [1] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  SecurityTradingRules?: ISecurityTradingRules// [3] BaseTradingRules.1205, StartTickPriceRange.1206 .. NestedInstrAttribValue.1211
  StrikeRules?: IStrikeRules[]// [4] StrikeRuleID.1223, StartStrikePxRange.1202 .. MaturityMonthYearIncrement.1229
}
