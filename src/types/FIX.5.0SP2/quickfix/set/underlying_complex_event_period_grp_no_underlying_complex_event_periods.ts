import { IUnderlyingComplexEventPeriodDateGrp } from './underlying_complex_event_period_date_grp'
import { IUnderlyingComplexEventAveragingObservationGrp } from './underlying_complex_event_averaging_observation_grp'

export interface IUnderlyingComplexEventPeriodGrpNoUnderlyingComplexEventPeriods {
  UnderlyingComplexEventPeriodType?: number// [1] 41730 (Int)
  UnderlyingComplexEventBusinessCenter?: string// [2] 41731 (String)
  UnderlyingComplexEventPeriodDateGrp?: IUnderlyingComplexEventPeriodDateGrp// [3] NoUnderlyingComplexEventPeriodDateTimes.41726, UnderlyingComplexEventPeriodDate.41727, UnderlyingComplexEventPeriodTime.41728
  UnderlyingComplexEventAveragingObservationGrp?: IUnderlyingComplexEventAveragingObservationGrp// [4] NoUnderlyingComplexEventAveragingObservations.41713, UnderlyingComplexEventAveragingObservationNumber.41714, UnderlyingComplexEventAveragingWeight.41715
}
