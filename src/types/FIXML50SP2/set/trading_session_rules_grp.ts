import { ITradingSessionRules } from './trading_session_rules'

export interface ITradingSessionRulesGrp {
  TradingSessionID?: string// [1] 336 (String)
  TradingSessionSubID?: string// [1] 625 (String)
  TradingSessionRules?: ITradingSessionRules// [1] 
}
