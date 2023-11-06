import { IUnderlyingProtectionTermEventQualifierGrp } from './underlying_protection_term_event_qualifier_grp'

export interface IUnderlyingProtectionTermEventGrp {
  UnderlyingProtectionTermEventType?: string// [1] 42078 (String)
  UnderlyingProtectionTermEventValue?: string// [1] 42079 (String)
  UnderlyingProtectionTermEventCurrency?: string// [1] 42080 (String)
  UnderlyingProtectionTermEventPeriod?: number// [1] 42081 (Int)
  UnderlyingProtectionTermEventUnit?: string// [1] 42082 (String)
  UnderlyingProtectionTermEventDayType?: number// [1] 42083 (Int)
  UnderlyingProtectionTermEventRateSource?: string// [1] 42084 (String)
  UnderlyingProtectionTermEventQualifierGrp?: IUnderlyingProtectionTermEventQualifierGrp[]// [1] Qual.42086
}
