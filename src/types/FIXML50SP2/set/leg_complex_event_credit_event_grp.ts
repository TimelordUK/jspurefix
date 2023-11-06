import { ILegComplexEventCreditEventQualifierGrp } from './leg_complex_event_credit_event_qualifier_grp'

export interface ILegComplexEventCreditEventGrp {
  LegComplexEventCreditEventType?: string// [1] 41367 (String)
  LegComplexEventCreditEventValue?: string// [1] 41368 (String)
  LegComplexEventCreditEventCurrency?: string// [1] 41369 (String)
  LegComplexEventCreditEventPeriod?: number// [1] 41370 (Int)
  LegComplexEventCreditEventUnit?: string// [1] 41371 (String)
  LegComplexEventCreditEventDayType?: number// [1] 41372 (Int)
  LegComplexEventCreditEventRateSource?: number// [1] 41373 (Int)
  LegComplexEventCreditEventQualifierGrp?: ILegComplexEventCreditEventQualifierGrp[]// [1] Qual.41375
}
