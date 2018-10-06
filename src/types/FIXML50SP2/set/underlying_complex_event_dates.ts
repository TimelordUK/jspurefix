import { IUnderlyingComplexEventTimes } from './underlying_complex_event_times'

export interface IUnderlyingComplexEventDates {
  UnderlyingComplexEventStartDate?: Date// 2054
  UnderlyingComplexEventEndDate?: Date// 2055
  UnderlyingComplexEventTimes?: IUnderlyingComplexEventTimes[]
}
