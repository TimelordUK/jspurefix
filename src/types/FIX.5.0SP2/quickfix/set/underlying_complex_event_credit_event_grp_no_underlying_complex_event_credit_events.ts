import { IUnderlyingComplexEventCreditEventQualifierGrp } from './underlying_complex_event_credit_event_qualifier_grp'

export interface IUnderlyingComplexEventCreditEventGrpNoUnderlyingComplexEventCreditEvents {
  UnderlyingComplexEventCreditEventType?: string// [1] 41717 (String)
  UnderlyingComplexEventCreditEventValue?: string// [2] 41718 (String)
  UnderlyingComplexEventCreditEventCurrency?: string// [3] 41719 (String)
  UnderlyingComplexEventCreditEventPeriod?: number// [4] 41720 (Int)
  UnderlyingComplexEventCreditEventUnit?: string// [5] 41721 (String)
  UnderlyingComplexEventCreditEventDayType?: number// [6] 41722 (Int)
  UnderlyingComplexEventCreditEventRateSource?: number// [7] 41723 (Int)
  UnderlyingComplexEventCreditEventQualifierGrp?: IUnderlyingComplexEventCreditEventQualifierGrp// [8] NoUnderlyingComplexEventCreditEventQualifiers.41724, UnderlyingComplexEventCreditEventQualifier.41725
}
