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
  ComplexEventStartDate?: Date// 1492
  ComplexEventEndDate?: Date// 1493
  ComplexEventTimes?: IComplexEventTimes[]
}
