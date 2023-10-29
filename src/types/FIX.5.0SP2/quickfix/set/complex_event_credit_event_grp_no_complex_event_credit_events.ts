import { IComplexEventCreditEventQualifierGrp } from './complex_event_credit_event_qualifier_grp'

export interface IComplexEventCreditEventGrpNoComplexEventCreditEvents {
  ComplexEventCreditEventType?: string// [1] 40998 (String)
  ComplexEventCreditEventValue?: string// [2] 40999 (String)
  ComplexEventCreditEventCurrency?: string// [3] 41000 (String)
  ComplexEventCreditEventPeriod?: number// [4] 41001 (Int)
  ComplexEventCreditEventUnit?: string// [5] 41002 (String)
  ComplexEventCreditEventDayType?: number// [6] 41003 (Int)
  ComplexEventCreditEventRateSource?: number// [7] 41004 (Int)
  ComplexEventCreditEventQualifierGrp?: IComplexEventCreditEventQualifierGrp// [8] NoComplexEventCreditEventQualifiers.41005, ComplexEventCreditEventQualifier.41006
}
