import { IComplexEventDateBusinessCenterGrp } from './complex_event_date_business_center_grp'

export interface IComplexEventRelativeDate {
  UnderlyingSettlMethodElectionDateUnadjusted?: Date// 43076
  UnderlyingSettlMethodElectionDateRelativeTo?: number// 43078
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// 43079
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// 43080
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// 43081
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingSettlMethodElectionDateAdjusted?: Date// 43082
  UnderlyingComplexEventFixingTime?: string// 41746
  UnderlyingComplexEventFixingTimeBusinessCenter?: string// 41747
  ComplexEventDateBusinessCenterGrp?: IComplexEventDateBusinessCenterGrp[]
}
