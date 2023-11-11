import { IUnderlyingComplexEventTimes } from './underlying_complex_event_times'

export interface IUnderlyingComplexEventDatesNoUnderlyingComplexEventDates {
  UnderlyingComplexEventStartDate?: Date// [1] 2054 (UtcDateOnly)
  UnderlyingComplexEventEndDate?: Date// [2] 2055 (UtcDateOnly)
  UnderlyingComplexEventTimes?: IUnderlyingComplexEventTimes// [3] NoUnderlyingComplexEventTimes.2056, UnderlyingComplexEventStartTime.2057, UnderlyingComplexEventEndTime.2058
}
