import { IUnderlyingComplexEventScheduleGrp } from './underlying_complex_event_schedule_grp'
import { IUnderlyingComplexEventPeriodDateGrp } from './underlying_complex_event_period_date_grp'
import { IUnderlyingComplexEventAveragingObservationGrp } from './underlying_complex_event_averaging_observation_grp'

export interface IUnderlyingComplexEventPeriodGrp {
  UnderlyingComplexEventPeriodType?: number// [1] 41730 (Int)
  UnderlyingComplexEventBusinessCenter?: string// [1] 41731 (String)
  UnderlyingComplexEventScheduleGrp?: IUnderlyingComplexEventScheduleGrp[]// [1] StartDt.41751, EndDt.41752 .. Roll.41755
  UnderlyingComplexEventPeriodDateGrp?: IUnderlyingComplexEventPeriodDateGrp[]// [2] Dt.41727, Tm.41728
  UnderlyingComplexEventAveragingObservationGrp?: IUnderlyingComplexEventAveragingObservationGrp[]// [3] ObsvtnNum.41714, Wt.41715
}
