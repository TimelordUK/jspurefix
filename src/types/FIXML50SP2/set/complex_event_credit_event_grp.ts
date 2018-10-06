import { IComplexEventCreditEventQualifierGrp } from './complex_event_credit_event_qualifier_grp'

export interface IComplexEventCreditEventGrp {
  ComplexEventCreditEventType?: string// 40998
  ComplexEventCreditEventValue?: string// 40999
  ComplexEventCreditEventCurrency?: string// 41000
  ComplexEventCreditEventPeriod?: number// 41001
  ComplexEventCreditEventUnit?: string// 41002
  ComplexEventCreditEventDayType?: number// 41003
  ComplexEventCreditEventRateSource?: number// 41004
  ComplexEventCreditEventQualifierGrp?: IComplexEventCreditEventQualifierGrp[]
}
