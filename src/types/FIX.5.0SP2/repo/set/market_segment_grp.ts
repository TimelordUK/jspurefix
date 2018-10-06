import { ISecurityTradingRules } from './security_trading_rules'
import { IStrikeRules } from './strike_rules'

export interface IMarketSegmentGrp {
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  SecurityTradingRules?: ISecurityTradingRules
  StrikeRules?: IStrikeRules[]
}
