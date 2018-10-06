import { IUnderlyingComplexEventScheduleGrp } from './underlying_complex_event_schedule_grp'
import { IUnderlyingComplexEventPeriodDateGrp } from './underlying_complex_event_period_date_grp'
import { IUnderlyingComplexEventAveragingObservationGrp } from './underlying_complex_event_averaging_observation_grp'

export interface IUnderlyingComplexEventPeriodGrp {
  UnderlyingComplexEventPeriodType?: number// 41730
  UnderlyingComplexEventBusinessCenter?: string// 41731
  UnderlyingComplexEventScheduleGrp?: IUnderlyingComplexEventScheduleGrp[]
  UnderlyingComplexEventPeriodDateGrp?: IUnderlyingComplexEventPeriodDateGrp[]
  UnderlyingComplexEventAveragingObservationGrp?: IUnderlyingComplexEventAveragingObservationGrp[]
}
