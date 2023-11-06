import { IComplexEventDateBusinessCenterGrp } from './complex_event_date_business_center_grp'

export interface IComplexEventRelativeDate {
  ComplexEventDateUnadjusted?: Date// [1] 41020 (LocalDate)
  ComplexEventDateRelativeTo?: number// [1] 41021 (Int)
  ComplexEventDateOffsetPeriod?: number// [1] 41022 (Int)
  ComplexEventDateOffsetUnit?: string// [1] 41023 (String)
  ComplexEventDateOffsetDayType?: number// [1] 41024 (Int)
  ComplexEventDateBusinessDayConvention?: number// [1] 41025 (Int)
  ComplexEventDateAdjusted?: Date// [1] 41026 (LocalDate)
  ComplexEventFixingTime?: string// [1] 41027 (String)
  ComplexEventFixingTimeBusinessCenter?: string// [1] 41028 (String)
  ComplexEventDateBusinessCenterGrp?: IComplexEventDateBusinessCenterGrp[]// [1] Ctr.41019
}
