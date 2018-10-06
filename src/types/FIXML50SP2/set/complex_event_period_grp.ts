import { IComplexEventScheduleGrp } from './complex_event_schedule_grp'
import { IComplexEventPeriodDateGrp } from './complex_event_period_date_grp'
import { IComplexEventAveragingObservationGrp } from './complex_event_averaging_observation_grp'

export interface IComplexEventPeriodGrp {
  ComplexEventPeriodType?: number// 41011
  ComplexEventBusinessCenter?: string// 41012
  ComplexEventScheduleGrp?: IComplexEventScheduleGrp[]
  ComplexEventPeriodDateGrp?: IComplexEventPeriodDateGrp[]
  ComplexEventAveragingObservationGrp?: IComplexEventAveragingObservationGrp[]
}
