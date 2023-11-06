import { IStandardHeader } from './set/standard_header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IDerivativeInstrument } from './set/derivative_instrument'

/*
*************************************************************
* DerivativeSecurityListRequest can be found in Volume 3 of *
* the                                                       *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IDerivativeSecurityListRequest {
  SecurityReqID: string// [2] 320 (String)
  SecurityListRequestType: number// [2] 559 (Int)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  SecuritySubType?: string// [2] 762 (String)
  Currency?: string// [2] 15 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  SubscriptionRequestType?: string// [2] 263 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  UnderlyingInstrument?: IUnderlyingInstrument// [2] Sym.311, Sfx.312 .. XID.2631
  DerivativeInstrument?: IDerivativeInstrument// [3] Sym.1214, Sfx.1215 .. CSetMo.1285
}
