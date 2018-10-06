import { IBaseTradingRules } from './base_trading_rules'
import { ITradingSessionRulesGrp } from './trading_session_rules_grp'
import { INestedInstrumentAttribute } from './nested_instrument_attribute'

/*
***************************************************************
* Ths SecurityTradingRules component block is used as part of *
* security definition to specify the specific security's      *
* standard trading parameters such as trading session         *
* eligibility and other attributes of the security.           *
***************************************************************
*/
export interface ISecurityTradingRules {
  BaseTradingRules?: IBaseTradingRules
  TradingSessionRulesGrp?: ITradingSessionRulesGrp[]
  NestedInstrumentAttribute?: INestedInstrumentAttribute[]
}
