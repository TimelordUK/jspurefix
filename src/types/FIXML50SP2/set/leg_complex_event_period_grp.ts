import { ILegComplexEventScheduleGrp } from './leg_complex_event_schedule_grp'
import { ILegComplexEventPeriodDateGrp } from './leg_complex_event_period_date_grp'
import { ILegComplexEventAveragingObservationGrp } from './leg_complex_event_averaging_observation_grp'

export interface ILegComplexEventPeriodGrp {
  LegComplexEventPeriodType?: number// 41380
  LegComplexEventBusinessCenter?: string// 41381
  LegComplexEventScheduleGrp?: ILegComplexEventScheduleGrp[]
  LegComplexEventPeriodDateGrp?: ILegComplexEventPeriodDateGrp[]
  LegComplexEventAveragingObservationGrp?: ILegComplexEventAveragingObservationGrp[]
}
