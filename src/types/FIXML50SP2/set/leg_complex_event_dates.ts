import { ILegComplexEventTimes } from './leg_complex_event_times'

export interface ILegComplexEventDates {
  LegComplexEventStartDate?: Date// 2251
  LegComplexEventEndDate?: Date// 2252
  LegComplexEventTimes?: ILegComplexEventTimes[]
}
