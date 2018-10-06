import { IUnderlyingProtectionTermEventQualifierGrp } from './underlying_protection_term_event_qualifier_grp'

export interface IUnderlyingProtectionTermEventGrp {
  UnderlyingProtectionTermEventType?: string// 42078
  UnderlyingProtectionTermEventValue?: string// 42079
  UnderlyingProtectionTermEventCurrency?: string// 42080
  UnderlyingProtectionTermEventPeriod?: number// 42081
  UnderlyingProtectionTermEventUnit?: string// 42082
  UnderlyingProtectionTermEventDayType?: number// 42083
  UnderlyingProtectionTermEventRateSource?: string// 42084
  UnderlyingProtectionTermEventQualifierGrp?: IUnderlyingProtectionTermEventQualifierGrp[]
}
