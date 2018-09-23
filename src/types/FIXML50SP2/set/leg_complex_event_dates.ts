import { ILegComplexEventTimes } from './leg_complex_event_times'

export interface ILegComplexEventDates {
  UnderlyingReturnRateValuationStartDateAdjusted?: Date// 43019
  UnderlyingReturnRateValuationEndDateAdjusted?: Date// 43025
  LegComplexEventTimes?: ILegComplexEventTimes[]
}
