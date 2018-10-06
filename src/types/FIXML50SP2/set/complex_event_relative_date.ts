import { IComplexEventDateBusinessCenterGrp } from './complex_event_date_business_center_grp'

export interface IComplexEventRelativeDate {
  ComplexEventDateUnadjusted?: Date// 41020
  ComplexEventDateRelativeTo?: number// 41021
  ComplexEventDateOffsetPeriod?: number// 41022
  ComplexEventDateOffsetUnit?: string// 41023
  ComplexEventDateOffsetDayType?: number// 41024
  ComplexEventDateBusinessDayConvention?: number// 41025
  ComplexEventDateAdjusted?: Date// 41026
  ComplexEventFixingTime?: string// 41027
  ComplexEventFixingTimeBusinessCenter?: string// 41028
  ComplexEventDateBusinessCenterGrp?: IComplexEventDateBusinessCenterGrp[]
}
