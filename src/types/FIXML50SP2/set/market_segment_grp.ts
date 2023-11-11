import { ISecurityTradingRules } from './security_trading_rules'
import { IStrikeRules } from './strike_rules'

export interface IMarketSegmentGrp {
  MarketID?: string// [1] 1301 (String)
  MarketSegmentID?: string// [1] 1300 (String)
  SecurityTradingRules?: ISecurityTradingRules// [1] 
  StrikeRules?: IStrikeRules[]// [2] StrkRule.1223, StartStrkPxRng.1202 .. StrkExrStyle.1304
}
