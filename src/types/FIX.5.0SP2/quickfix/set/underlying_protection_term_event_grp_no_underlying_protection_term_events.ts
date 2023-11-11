import { IUnderlyingProtectionTermEventQualifierGrp } from './underlying_protection_term_event_qualifier_grp'

export interface IUnderlyingProtectionTermEventGrpNoUnderlyingProtectionTermEvents {
  UnderlyingProtectionTermEventType?: string// [1] 42078 (String)
  UnderlyingProtectionTermEventValue?: string// [2] 42079 (String)
  UnderlyingProtectionTermEventCurrency?: string// [3] 42080 (String)
  UnderlyingProtectionTermEventPeriod?: number// [4] 42081 (Int)
  UnderlyingProtectionTermEventUnit?: string// [5] 42082 (String)
  UnderlyingProtectionTermEventDayType?: number// [6] 42083 (Int)
  UnderlyingProtectionTermEventRateSource?: string// [7] 42084 (String)
  UnderlyingProtectionTermEventQualifierGrp?: IUnderlyingProtectionTermEventQualifierGrp// [8] NoUnderlyingProtectionTermEventQualifiers.42085, UnderlyingProtectionTermEventQualifier.42086
}
