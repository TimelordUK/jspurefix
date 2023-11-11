import { IUnderlyingComplexEventDateBusinessCenterGrp } from './underlying_complex_event_date_business_center_grp'

export interface IUnderlyingComplexEventRelativeDate {
  UnderlyingComplexEventDateUnadjusted?: Date// [1] 41739 (LocalDate)
  UnderlyingComplexEventDateRelativeTo?: number// [2] 41740 (Int)
  UnderlyingComplexEventDateOffsetPeriod?: number// [3] 41741 (Int)
  UnderlyingComplexEventDateOffsetUnit?: string// [4] 41742 (String)
  UnderlyingComplexEventDateOffsetDayType?: number// [5] 41743 (Int)
  UnderlyingComplexEventDateBusinessDayConvention?: number// [6] 41744 (Int)
  UnderlyingComplexEventDateBusinessCenterGrp?: IUnderlyingComplexEventDateBusinessCenterGrp// [7] NoUnderlyingComplexEventDateBusinessCenters.41737, UnderlyingComplexEventDateBusinessCenter.41738
  UnderlyingComplexEventDateAdjusted?: Date// [8] 41745 (LocalDate)
  UnderlyingComplexEventFixingTime?: string// [9] 41746 (String)
  UnderlyingComplexEventFixingTimeBusinessCenter?: string// [10] 41747 (String)
}
