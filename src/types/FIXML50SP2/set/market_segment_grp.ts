import { ISecurityTradingRules } from './security_trading_rules'
import { IStrikeRules } from './strike_rules'

export interface IMarketSegmentGrp {
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  SecurityTradingRules?: ISecurityTradingRules
  StrikeRules?: IStrikeRules[]
}
