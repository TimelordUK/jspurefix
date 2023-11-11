import { IComplexEventDateBusinessCenterGrp } from './complex_event_date_business_center_grp'

export interface IComplexEventRelativeDate {
  ComplexEventDateUnadjusted?: Date// [1] 41020 (LocalDate)
  ComplexEventDateRelativeTo?: number// [2] 41021 (Int)
  ComplexEventDateOffsetPeriod?: number// [3] 41022 (Int)
  ComplexEventDateOffsetUnit?: string// [4] 41023 (String)
  ComplexEventDateOffsetDayType?: number// [5] 41024 (Int)
  ComplexEventDateBusinessDayConvention?: number// [6] 41025 (Int)
  ComplexEventDateBusinessCenterGrp?: IComplexEventDateBusinessCenterGrp// [7] NoComplexEventDateBusinessCenters.41018, ComplexEventDateBusinessCenter.41019
  ComplexEventDateAdjusted?: Date// [8] 41026 (LocalDate)
  ComplexEventFixingTime?: string// [9] 41027 (String)
  ComplexEventFixingTimeBusinessCenter?: string// [10] 41028 (String)
}
