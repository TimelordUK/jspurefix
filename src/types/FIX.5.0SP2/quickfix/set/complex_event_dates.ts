import { IComplexEventTimes } from './complex_event_times'

/*
**************************************************************
* The ComplexEventDate and ComplexEventTime components are   *
* used to constrain a complex event to a specific date range *
* or time range. If specified the event is only effective on *
* or within the specified dates and times.                   *
**************************************************************
*/
export interface IComplexEventDates {
  ComplexEventStartDate?: Date// [1] 1492 (UtcTimestamp)
  ComplexEventEndDate?: Date// [2] 1493 (UtcTimestamp)
  ComplexEventTimes?: IComplexEventTimes[]// [3] ComplexEventStartTime.1495, ComplexEventEndTime.1496
}
