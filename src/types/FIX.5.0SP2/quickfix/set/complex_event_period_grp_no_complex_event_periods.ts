import { IComplexEventPeriodDateGrp } from './complex_event_period_date_grp'
import { IComplexEventAveragingObservationGrp } from './complex_event_averaging_observation_grp'

export interface IComplexEventPeriodGrpNoComplexEventPeriods {
  ComplexEventPeriodType?: number// [1] 41011 (Int)
  ComplexEventBusinessCenter?: string// [2] 41012 (String)
  ComplexEventPeriodDateGrp?: IComplexEventPeriodDateGrp// [3] NoComplexEventPeriodDateTimes.41007, ComplexEventPeriodDate.41008, ComplexEventPeriodTime.41009
  ComplexEventAveragingObservationGrp?: IComplexEventAveragingObservationGrp// [4] NoComplexEventAveragingObservations.40994, ComplexEventAveragingObservationNumber.40995, ComplexEventAveragingWeight.40996
}
