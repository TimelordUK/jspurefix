import { ILegBusinessCenterGrp } from './leg_business_center_grp'

export interface ILegDateAdjustment {
  LegBusinessDayConvention?: number// [1] 40925 (Int)
  LegBusinessCenterGrp?: ILegBusinessCenterGrp// [2] NoLegBusinessCenters.40923, LegBusinessCenter.40924
  LegDateRollConvention?: string// [3] 40926 (String)
}
