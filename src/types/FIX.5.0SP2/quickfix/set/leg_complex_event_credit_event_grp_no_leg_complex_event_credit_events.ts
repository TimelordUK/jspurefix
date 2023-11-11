import { ILegComplexEventCreditEventQualifierGrp } from './leg_complex_event_credit_event_qualifier_grp'

export interface ILegComplexEventCreditEventGrpNoLegComplexEventCreditEvents {
  LegComplexEventCreditEventType?: string// [1] 41367 (String)
  LegComplexEventCreditEventValue?: string// [2] 41368 (String)
  LegComplexEventCreditEventCurrency?: string// [3] 41369 (String)
  LegComplexEventCreditEventPeriod?: number// [4] 41370 (Int)
  LegComplexEventCreditEventUnit?: string// [5] 41371 (String)
  LegComplexEventCreditEventDayType?: number// [6] 41372 (Int)
  LegComplexEventCreditEventRateSource?: number// [7] 41373 (Int)
  LegComplexEventCreditEventQualifierGrp?: ILegComplexEventCreditEventQualifierGrp// [8] NoLegComplexEventCreditEventQualifiers.41374, LegComplexEventCreditEventQualifier.41375
}
