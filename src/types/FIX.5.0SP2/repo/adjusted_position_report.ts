import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IPositionQty } from './set/position_qty'
import { IInstrmtGrp } from './set/instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***********************************************************
* Used to report changes in position, primarily in equity *
* options, due to modifications to the underlying due to  *
* corporate actions                                       *
***********************************************************
*/
export interface IAdjustedPositionReport {
  StandardHeader: IStandardHeader
  PosMaintRptID: string// 721
  PosReqType?: number// 724
  ClearingBusinessDate: Date// 715
  SettlSessID?: string// 716
  PosMaintRptRefID?: string// 714
  Parties: IParties[]
  PositionQty: IPositionQty[]
  InstrmtGrp?: IInstrmtGrp[]
  SettlPrice?: number// 730
  PriorSettlPrice?: number// 734
  StandardTrailer: IStandardTrailer
}
