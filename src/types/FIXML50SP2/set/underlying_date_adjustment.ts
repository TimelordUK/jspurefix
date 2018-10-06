import { IUnderlyingBusinessCenterGrp } from './underlying_business_center_grp'

export interface IUnderlyingDateAdjustment {
  UnderlyingBusinessDayConvention?: number// 40964
  UnderlyingDateRollConvention?: string// 40965
  UnderlyingBusinessCenterGrp?: IUnderlyingBusinessCenterGrp[]
}
