import { IBusinessCenterGrp } from './business_center_grp'

export interface IDateAdjustment {
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingReturnRateValuationFrequencyRollConvention?: string// 43028
  BusinessCenterGrp?: IBusinessCenterGrp[]
}
