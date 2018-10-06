import { ILegBusinessCenterGrp } from './leg_business_center_grp'

export interface ILegDateAdjustment {
  LegBusinessDayConvention?: number// 40925
  LegDateRollConvention?: string// 40926
  LegBusinessCenterGrp?: ILegBusinessCenterGrp[]
}
