import { IComplexEventTimes } from './complex_event_times'

export interface IComplexEventDatesNoComplexEventDates {
  ComplexEventStartDate?: Date// [1] 1492 (UtcDateOnly)
  ComplexEventEndDate?: Date// [2] 1493 (UtcDateOnly)
  ComplexEventTimes?: IComplexEventTimes// [3] NoComplexEventTimes.1494, ComplexEventStartTime.1495, ComplexEventEndTime.1496
}
