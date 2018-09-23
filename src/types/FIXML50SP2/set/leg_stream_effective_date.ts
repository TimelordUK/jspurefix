import { ILegStreamEffectiveDateBusinessCenterGrp } from './leg_stream_effective_date_business_center_grp'

export interface ILegStreamEffectiveDate {
  UnderlyingSettlMethodElectionDateUnadjusted?: Date// 43076
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingSettlMethodElectionDateRelativeTo?: number// 43078
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// 43079
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// 43080
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// 43081
  UnderlyingSettlMethodElectionDateAdjusted?: Date// 43082
  LegStreamEffectiveDateBusinessCenterGrp?: ILegStreamEffectiveDateBusinessCenterGrp[]
}
