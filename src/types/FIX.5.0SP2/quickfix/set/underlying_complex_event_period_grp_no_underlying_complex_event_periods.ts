import { IUnderlyingComplexEventScheduleGrp } from './underlying_complex_event_schedule_grp'
import { IUnderlyingComplexEventPeriodDateGrp } from './underlying_complex_event_period_date_grp'
import { IUnderlyingComplexEventAveragingObservationGrp } from './underlying_complex_event_averaging_observation_grp'

export interface IUnderlyingComplexEventPeriodGrpNoUnderlyingComplexEventPeriods {
  UnderlyingComplexEventPeriodType?: number// [1] 41730 (Int)
  UnderlyingComplexEventBusinessCenter?: string// [2] 41731 (String)
  UnderlyingComplexEventScheduleGrp?: IUnderlyingComplexEventScheduleGrp// [3] NoUnderlyingComplexEventSchedules.41750, UnderlyingComplexEventScheduleStartDate.41751 .. UnderlyingComplexEventScheduleRollConvention.41755
  UnderlyingComplexEventPeriodDateGrp?: IUnderlyingComplexEventPeriodDateGrp// [4] NoUnderlyingComplexEventPeriodDateTimes.41726, UnderlyingComplexEventPeriodDate.41727, UnderlyingComplexEventPeriodTime.41728
  UnderlyingComplexEventAveragingObservationGrp?: IUnderlyingComplexEventAveragingObservationGrp// [5] NoUnderlyingComplexEventAveragingObservations.41713, UnderlyingComplexEventAveragingObservationNumber.41714, UnderlyingComplexEventAveragingWeight.41715
}
