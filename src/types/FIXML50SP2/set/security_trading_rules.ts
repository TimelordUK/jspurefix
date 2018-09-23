import { IBaseTradingRules } from './base_trading_rules'
import { ITradingSessionRulesGrp } from './trading_session_rules_grp'
import { INestedInstrumentAttribute } from './nested_instrument_attribute'

export interface ISecurityTradingRules {
  BaseTradingRules?: IBaseTradingRules
  TradingSessionRulesGrp?: ITradingSessionRulesGrp[]
  NestedInstrumentAttribute?: INestedInstrumentAttribute[]
}
