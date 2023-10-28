import { ILegComplexEventsNoLegComplexEvents } from './leg_complex_events_no_leg_complex_events'

export interface ILegComplexEvents {
  NoLegComplexEvents?: ILegComplexEventsNoLegComplexEvents[]// [1] LegComplexEventType.2219, LegComplexOptPayoutPaySide.2220 .. LegComplexEventXIDRef.2249
}
