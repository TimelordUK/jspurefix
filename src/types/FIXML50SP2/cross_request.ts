import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'

/*
************************************************
* CrossRequest can be found in Volume 3 of the *
*                                              *
* specification                                *
************************************************
*/
export interface ICrossRequest {
  CrossRequestID: string// [2] 2672 (String)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  OrderQty?: number// [2] 38 (Float)
  ComplianceID?: string// [2] 376 (String)
  ComplianceText?: string// [2] 2404 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Instrument?: IInstrument// [2] Sym.55, Sfx.65 .. ExchLookAlike.2603
}
