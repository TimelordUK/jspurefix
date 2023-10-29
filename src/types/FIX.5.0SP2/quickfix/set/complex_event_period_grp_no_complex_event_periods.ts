import { IComplexEventScheduleGrp } from './complex_event_schedule_grp'
import { IComplexEventPeriodDateGrp } from './complex_event_period_date_grp'
import { IComplexEventAveragingObservationGrp } from './complex_event_averaging_observation_grp'

export interface IComplexEventPeriodGrpNoComplexEventPeriods {
  ComplexEventPeriodType?: number// [1] 41011 (Int)
  ComplexEventBusinessCenter?: string// [2] 41012 (String)
  ComplexEventScheduleGrp?: IComplexEventScheduleGrp// [3] NoComplexEventSchedules.41031, ComplexEventScheduleStartDate.41032 .. ComplexEventScheduleRollConvention.41036
  ComplexEventPeriodDateGrp?: IComplexEventPeriodDateGrp// [4] NoComplexEventPeriodDateTimes.41007, ComplexEventPeriodDate.41008, ComplexEventPeriodTime.41009
  ComplexEventAveragingObservationGrp?: IComplexEventAveragingObservationGrp// [5] NoComplexEventAveragingObservations.40994, ComplexEventAveragingObservationNumber.40995, ComplexEventAveragingWeight.40996
}
