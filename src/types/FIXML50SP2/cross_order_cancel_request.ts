import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { ISideCrossOrdCxlGrp } from './set/side_cross_ord_cxl_grp'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'

/*
***********************************************************
* CrossOrderCancelRequest can be found in Volume 4 of the *
*                                                         *
* specification                                           *
***********************************************************
*/
export interface ICrossOrderCancelRequest {
  OrderID?: string// [2] 37 (String)
  OrderRequestID?: number// [2] 2422 (Int)
  CrossID: string// [2] 548 (String)
  OrigCrossID: string// [2] 551 (String)
  HostCrossID?: string// [2] 961 (String)
  CrossType: number// [2] 549 (Int)
  CrossPrioritization: number// [2] 550 (Int)
  MarketSegmentID?: string// [2] 1300 (String)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RootParties?: IRootParties[]// [2] ID.1117, Src.1118 .. Qual.2388
  SideCrossOrdCxlGrp?: ISideCrossOrdCxlGrp[]// [3] Side.54, OrigClOrdID.41 .. EncTxt.355
  Instrument?: IInstrument// [4] Sym.55, Sfx.65 .. ExchLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp[]// [5] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [6] Sym.600, Sfx.601 .. ExchLookAlike.2607
}
