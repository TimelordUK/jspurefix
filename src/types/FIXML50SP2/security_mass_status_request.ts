import { IStandardHeader } from './set/standard_header'
import { IInstrumentScope } from './set/instrument_scope'

/*
*************************************************************
* SecurityMassStatusRequest can be found in Volume 3 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface ISecurityMassStatusRequest {
  SecurityStatusReqID: string// [2] 324 (String)
  SubscriptionRequestType: string// [2] 263 (String)
  SecurityListID?: string// [2] 1465 (String)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  InstrumentScope?: IInstrumentScope// [2] Sym.1536, Sfx.1537 .. SettlTyp.63
}
