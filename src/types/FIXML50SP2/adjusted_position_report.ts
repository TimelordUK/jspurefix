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
  MDStatisticRptID: string// 2453
  RiskLimitRequestType?: number// 1760
  ClearingBusinessDate: Date// 715
  SettlSessID?: string// 716
  AllocReportRefID?: string// 795
  ClearingSettlPrice?: number// 2528
  PriorSettlPrice?: number// 734
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  PositionQty?: IPositionQty[]
  InstrmtGrp?: IInstrmtGrp[]
}
