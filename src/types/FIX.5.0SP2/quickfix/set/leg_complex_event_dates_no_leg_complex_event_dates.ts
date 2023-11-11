import { ILegComplexEventTimes } from './leg_complex_event_times'

export interface ILegComplexEventDatesNoLegComplexEventDates {
  LegComplexEventStartDate?: Date// [1] 2251 (UtcDateOnly)
  LegComplexEventEndDate?: Date// [2] 2252 (UtcDateOnly)
  LegComplexEventTimes?: ILegComplexEventTimes// [3] NoLegComplexEventTimes.2253, LegComplexEventStartTime.2204, LegComplexEventEndTime.2247
}
