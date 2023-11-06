import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IPositionQty } from './set/position_qty'
import { IInstrmtGrp } from './set/instrmt_grp'

/*
**********************************************************
* AdjustedPositionReport can be found in Volume 5 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IAdjustedPositionReport {
  PosMaintRptID: string// [2] 721 (String)
  PosReqType?: number// [2] 724 (Int)
  ClearingBusinessDate: Date// [2] 715 (LocalDate)
  SettlSessID?: string// [2] 716 (String)
  PosMaintRptRefID?: string// [2] 714 (String)
  SettlPrice?: number// [2] 730 (Float)
  PriorSettlPrice?: number// [2] 734 (Float)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  PositionQty?: IPositionQty[]// [3] Typ.703, Long.704 .. UOMCcy.1835
  InstrmtGrp?: IInstrmtGrp[]// [4] 
}
