import { IUnderlyingComplexEventDateBusinessCenterGrp } from './underlying_complex_event_date_business_center_grp'

export interface IUnderlyingComplexEventRelativeDate {
  UnderlyingComplexEventDateUnadjusted?: Date// 41739
  UnderlyingComplexEventDateRelativeTo?: number// 41740
  UnderlyingComplexEventDateOffsetPeriod?: number// 41741
  UnderlyingComplexEventDateOffsetUnit?: string// 41742
  UnderlyingComplexEventDateOffsetDayType?: number// 41743
  UnderlyingComplexEventDateBusinessDayConvention?: number// 41744
  UnderlyingComplexEventDateAdjusted?: Date// 41745
  UnderlyingComplexEventFixingTime?: string// 41746
  UnderlyingComplexEventFixingTimeBusinessCenter?: string// 41747
  UnderlyingComplexEventDateBusinessCenterGrp?: IUnderlyingComplexEventDateBusinessCenterGrp[]
}
