import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'

/*
******************************************************
* OrderStatusRequest can be found in Volume 4 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface IOrderStatusRequest {
  OrderID?: string// [2] 37 (String)
  ClOrdID?: string// [2] 11 (String)
  SecondaryClOrdID?: string// [2] 526 (String)
  ClOrdLinkID?: string// [2] 583 (String)
  OrdStatusReqID?: string// [2] 790 (String)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  MarketSegmentID?: string// [2] 1300 (String)
  Side: string// [2] 54 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  Instrument?: IInstrument// [3] Sym.55, Sfx.65 .. ExchLookAlike.2603
  FinancingDetails?: IFinancingDetails// [4] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [5] Sym.311, Sfx.312 .. XID.2631
}
