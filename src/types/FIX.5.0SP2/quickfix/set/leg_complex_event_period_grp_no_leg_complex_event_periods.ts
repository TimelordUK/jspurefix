import { ILegComplexEventScheduleGrp } from './leg_complex_event_schedule_grp'
import { ILegComplexEventPeriodDateGrp } from './leg_complex_event_period_date_grp'
import { ILegComplexEventAveragingObservationGrp } from './leg_complex_event_averaging_observation_grp'

export interface ILegComplexEventPeriodGrpNoLegComplexEventPeriods {
  LegComplexEventPeriodType?: number// [1] 41380 (Int)
  LegComplexEventBusinessCenter?: string// [2] 41381 (String)
  LegComplexEventScheduleGrp?: ILegComplexEventScheduleGrp// [3] NoLegComplexEventSchedules.41400, LegComplexEventScheduleStartDate.41401 .. LegComplexEventScheduleRollConvention.41405
  LegComplexEventPeriodDateGrp?: ILegComplexEventPeriodDateGrp// [4] NoLegComplexEventPeriodDateTimes.41376, LegComplexEventPeriodDate.41377, LegComplexEventPeriodTime.41378
  LegComplexEventAveragingObservationGrp?: ILegComplexEventAveragingObservationGrp// [5] NoLegComplexEventAveragingObservations.41363, LegComplexEventAveragingObservationNumber.41364, LegComplexEventAveragingWeight.41365
}
