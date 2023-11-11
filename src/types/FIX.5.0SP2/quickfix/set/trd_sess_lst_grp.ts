import { ITrdSessLstGrpNoTradingSessions } from './trd_sess_lst_grp_no_trading_sessions'

export interface ITrdSessLstGrp {
  NoTradingSessions?: ITrdSessLstGrpNoTradingSessions[]// [1] TradingSessionID.336, TradingSessionSubID.625 .. EncodedText.355
}
