import { ILegComplexEventTimes } from './leg_complex_event_times'

export interface ILegComplexEventDates {
  LegComplexEventStartDate?: Date// [1] 2251 (UtcDateOnly)
  LegComplexEventEndDate?: Date// [1] 2252 (UtcDateOnly)
  LegComplexEventTimes?: ILegComplexEventTimes[]// [1] StartTm.2204, EndTm.2247
}
