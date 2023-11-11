import { IBaseTradingRules } from './base_trading_rules'
import { ITradingSessionRulesGrp } from './trading_session_rules_grp'
import { INestedInstrumentAttribute } from './nested_instrument_attribute'

export interface ISecurityTradingRules {
  BaseTradingRules?: IBaseTradingRules// [1] ExpirationCycle.827, TrdVolTyp.1786 .. QuotSideInd.2559
  TradingSessionRulesGrp?: ITradingSessionRulesGrp[]// [2] SesID.336, SesSub.625
  NestedInstrumentAttribute?: INestedInstrumentAttribute[]// [3] Typ.1210, Val.1211
}
