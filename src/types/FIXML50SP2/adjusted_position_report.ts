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
  PosMaintRptID: string// 721
  PosReqType?: number// 724
  ClearingBusinessDate: Date// 715
  SettlSessID?: string// 716
  PosMaintRptRefID?: string// 714
  SettlPrice?: number// 730
  PriorSettlPrice?: number// 734
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  PositionQty?: IPositionQty[]
  InstrmtGrp?: IInstrmtGrp[]
}
