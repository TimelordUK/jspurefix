import { IUnderlyingComplexEventTimes } from './underlying_complex_event_times'

export interface IUnderlyingComplexEventDates {
  UnderlyingComplexEventStartDate?: Date// [1] 2054 (UtcDateOnly)
  UnderlyingComplexEventEndDate?: Date// [1] 2055 (UtcDateOnly)
  UnderlyingComplexEventTimes?: IUnderlyingComplexEventTimes[]// [1] StartTm.2057, EndTm.2058
}
