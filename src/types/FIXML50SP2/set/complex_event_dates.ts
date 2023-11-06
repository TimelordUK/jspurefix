import { IComplexEventTimes } from './complex_event_times'

export interface IComplexEventDates {
  ComplexEventStartDate?: Date// [1] 1492 (UtcDateOnly)
  ComplexEventEndDate?: Date// [1] 1493 (UtcDateOnly)
  ComplexEventTimes?: IComplexEventTimes[]// [1] StartTm.1495, EndTm.1496
}
