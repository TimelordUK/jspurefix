import { IComplexEventTimes } from './complex_event_times'

export interface IComplexEventDates {
  UnderlyingReturnRateValuationStartDateAdjusted?: Date// 43019
  UnderlyingReturnRateValuationEndDateAdjusted?: Date// 43025
  ComplexEventTimes?: IComplexEventTimes[]
}
