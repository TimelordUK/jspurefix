import { IUnderlyingComplexEventTimes } from './underlying_complex_event_times'

export interface IUnderlyingComplexEventDates {
  UnderlyingReturnRateValuationStartDateAdjusted?: Date// 43019
  UnderlyingReturnRateValuationEndDateAdjusted?: Date// 43025
  UnderlyingComplexEventTimes?: IUnderlyingComplexEventTimes[]
}
