import { ILegComplexEventScheduleGrp } from './leg_complex_event_schedule_grp'
import { ILegComplexEventPeriodDateGrp } from './leg_complex_event_period_date_grp'
import { ILegComplexEventAveragingObservationGrp } from './leg_complex_event_averaging_observation_grp'

export interface ILegComplexEventPeriodGrp {
  LegComplexEventPeriodType?: number// [1] 41380 (Int)
  LegComplexEventBusinessCenter?: string// [1] 41381 (String)
  LegComplexEventScheduleGrp?: ILegComplexEventScheduleGrp[]// [1] StartDt.41401, EndDt.41402 .. Roll.41405
  LegComplexEventPeriodDateGrp?: ILegComplexEventPeriodDateGrp[]// [2] Dt.41377, Tm.41378
  LegComplexEventAveragingObservationGrp?: ILegComplexEventAveragingObservationGrp[]// [3] ObsvtnNum.41364, Wt.41365
}
