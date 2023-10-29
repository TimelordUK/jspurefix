import { IBaseTradingRules } from './base_trading_rules'
import { ITradingSessionRulesGrp } from './trading_session_rules_grp'
import { INestedInstrumentAttribute } from './nested_instrument_attribute'

export interface ISecurityTradingRules {
  BaseTradingRules?: IBaseTradingRules// [1] TickRules.1205, StartTickPriceRange.1206 .. QuoteSideIndicator.2559
  TradingSessionRulesGrp?: ITradingSessionRulesGrp// [2] NoTradingSessionRules.1309, TradingSessionID.336 .. SecondaryServiceLocationID.2568
  NestedInstrumentAttribute?: INestedInstrumentAttribute// [3] NoNestedInstrAttrib.1312, NestedInstrAttribType.1210, NestedInstrAttribValue.1211
}
