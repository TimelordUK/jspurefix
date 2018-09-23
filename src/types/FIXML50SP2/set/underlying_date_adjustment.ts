import { IUnderlyingBusinessCenterGrp } from './underlying_business_center_grp'

export interface IUnderlyingDateAdjustment {
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingReturnRateValuationFrequencyRollConvention?: string// 43028
  UnderlyingBusinessCenterGrp?: IUnderlyingBusinessCenterGrp[]
}
