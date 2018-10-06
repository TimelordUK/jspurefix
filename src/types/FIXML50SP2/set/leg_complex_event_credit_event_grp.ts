import { ILegComplexEventCreditEventQualifierGrp } from './leg_complex_event_credit_event_qualifier_grp'

export interface ILegComplexEventCreditEventGrp {
  LegComplexEventCreditEventType?: string// 41367
  LegComplexEventCreditEventValue?: string// 41368
  LegComplexEventCreditEventCurrency?: string// 41369
  LegComplexEventCreditEventPeriod?: number// 41370
  LegComplexEventCreditEventUnit?: string// 41371
  LegComplexEventCreditEventDayType?: number// 41372
  LegComplexEventCreditEventRateSource?: number// 41373
  LegComplexEventCreditEventQualifierGrp?: ILegComplexEventCreditEventQualifierGrp[]
}
