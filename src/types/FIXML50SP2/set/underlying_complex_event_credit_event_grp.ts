import { IUnderlyingComplexEventCreditEventQualifierGrp } from './underlying_complex_event_credit_event_qualifier_grp'

export interface IUnderlyingComplexEventCreditEventGrp {
  UnderlyingComplexEventCreditEventType?: string// 41717
  UnderlyingComplexEventCreditEventValue?: string// 41718
  UnderlyingComplexEventCreditEventCurrency?: string// 41719
  UnderlyingComplexEventCreditEventPeriod?: number// 41720
  UnderlyingComplexEventCreditEventUnit?: string// 41721
  UnderlyingComplexEventCreditEventDayType?: number// 41722
  UnderlyingComplexEventCreditEventRateSource?: number// 41723
  UnderlyingComplexEventCreditEventQualifierGrp?: IUnderlyingComplexEventCreditEventQualifierGrp[]
}
