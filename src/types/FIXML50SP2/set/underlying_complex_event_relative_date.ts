import { IUnderlyingComplexEventDateBusinessCenterGrp } from './underlying_complex_event_date_business_center_grp'

export interface IUnderlyingComplexEventRelativeDate {
  UnderlyingComplexEventDateUnadjusted?: Date// [1] 41739 (LocalDate)
  UnderlyingComplexEventDateRelativeTo?: number// [1] 41740 (Int)
  UnderlyingComplexEventDateOffsetPeriod?: number// [1] 41741 (Int)
  UnderlyingComplexEventDateOffsetUnit?: string// [1] 41742 (String)
  UnderlyingComplexEventDateOffsetDayType?: number// [1] 41743 (Int)
  UnderlyingComplexEventDateBusinessDayConvention?: number// [1] 41744 (Int)
  UnderlyingComplexEventDateAdjusted?: Date// [1] 41745 (LocalDate)
  UnderlyingComplexEventFixingTime?: string// [1] 41746 (String)
  UnderlyingComplexEventFixingTimeBusinessCenter?: string// [1] 41747 (String)
  UnderlyingComplexEventDateBusinessCenterGrp?: IUnderlyingComplexEventDateBusinessCenterGrp[]// [1] Ctr.41738
}
