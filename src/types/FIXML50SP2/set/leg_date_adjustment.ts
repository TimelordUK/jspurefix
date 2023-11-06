import { ILegBusinessCenterGrp } from './leg_business_center_grp'

export interface ILegDateAdjustment {
  LegBusinessDayConvention?: number// [1] 40925 (Int)
  LegDateRollConvention?: string// [1] 40926 (String)
  LegBusinessCenterGrp?: ILegBusinessCenterGrp[]// [1] Ctr.40924
}
