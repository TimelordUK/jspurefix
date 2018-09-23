import { ILegBusinessCenterGrp } from './leg_business_center_grp'

export interface ILegDateAdjustment {
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingReturnRateValuationFrequencyRollConvention?: string// 43028
  LegBusinessCenterGrp?: ILegBusinessCenterGrp[]
}
