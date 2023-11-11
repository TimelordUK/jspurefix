import { IBusinessCenterGrp } from './business_center_grp'

export interface IDateAdjustment {
  BusinessDayConvention?: number// [1] 40921 (Int)
  BusinessCenterGrp?: IBusinessCenterGrp// [2] NoBusinessCenters.40278, BusinessCenter.40471
  DateRollConvention?: string// [3] 40922 (String)
}
