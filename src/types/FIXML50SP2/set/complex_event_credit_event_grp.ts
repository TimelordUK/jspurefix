import { IComplexEventCreditEventQualifierGrp } from './complex_event_credit_event_qualifier_grp'

export interface IComplexEventCreditEventGrp {
  ComplexEventCreditEventType?: string// [1] 40998 (String)
  ComplexEventCreditEventValue?: string// [1] 40999 (String)
  ComplexEventCreditEventCurrency?: string// [1] 41000 (String)
  ComplexEventCreditEventPeriod?: number// [1] 41001 (Int)
  ComplexEventCreditEventUnit?: string// [1] 41002 (String)
  ComplexEventCreditEventDayType?: number// [1] 41003 (Int)
  ComplexEventCreditEventRateSource?: number// [1] 41004 (Int)
  ComplexEventCreditEventQualifierGrp?: IComplexEventCreditEventQualifierGrp[]// [1] Qual.41006
}
