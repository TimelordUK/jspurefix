import { IBusinessCenterGrp } from './business_center_grp'

export interface IDateAdjustment {
  BusinessDayConvention?: number// [1] 40921 (Int)
  DateRollConvention?: string// [1] 40922 (String)
  BusinessCenterGrp?: IBusinessCenterGrp[]// [1] Ctr.40471
}
