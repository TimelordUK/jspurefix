import { IBusinessCenterGrp } from './business_center_grp'

export interface IDateAdjustment {
  BusinessDayConvention?: number// 40921
  DateRollConvention?: string// 40922
  BusinessCenterGrp?: IBusinessCenterGrp[]
}
