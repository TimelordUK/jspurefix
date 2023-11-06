import { IComplexEventScheduleGrp } from './complex_event_schedule_grp'
import { IComplexEventPeriodDateGrp } from './complex_event_period_date_grp'
import { IComplexEventAveragingObservationGrp } from './complex_event_averaging_observation_grp'

export interface IComplexEventPeriodGrp {
  ComplexEventPeriodType?: number// [1] 41011 (Int)
  ComplexEventBusinessCenter?: string// [1] 41012 (String)
  ComplexEventScheduleGrp?: IComplexEventScheduleGrp[]// [1] StartDt.41032, EndDt.41033 .. Roll.41036
  ComplexEventPeriodDateGrp?: IComplexEventPeriodDateGrp[]// [2] Dt.41008, Tm.41009
  ComplexEventAveragingObservationGrp?: IComplexEventAveragingObservationGrp[]// [3] ObsvtnNum.40995, Wt.40996
}
