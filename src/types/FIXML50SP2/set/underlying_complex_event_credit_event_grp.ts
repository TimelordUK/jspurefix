import { IUnderlyingComplexEventCreditEventQualifierGrp } from './underlying_complex_event_credit_event_qualifier_grp'

export interface IUnderlyingComplexEventCreditEventGrp {
  UnderlyingComplexEventCreditEventType?: string// [1] 41717 (String)
  UnderlyingComplexEventCreditEventValue?: string// [1] 41718 (String)
  UnderlyingComplexEventCreditEventCurrency?: string// [1] 41719 (String)
  UnderlyingComplexEventCreditEventPeriod?: number// [1] 41720 (Int)
  UnderlyingComplexEventCreditEventUnit?: string// [1] 41721 (String)
  UnderlyingComplexEventCreditEventDayType?: number// [1] 41722 (Int)
  UnderlyingComplexEventCreditEventRateSource?: number// [1] 41723 (Int)
  UnderlyingComplexEventCreditEventQualifierGrp?: IUnderlyingComplexEventCreditEventQualifierGrp[]// [1] Qual.41725
}
