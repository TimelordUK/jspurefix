import { IProtectionTermEventQualifierGrp } from './protection_term_event_qualifier_grp'

export interface IProtectionTermEventGrpNoProtectionTermEvents {
  ProtectionTermEventType?: string// [1] 40192 (String)
  ProtectionTermEventValue?: string// [2] 40193 (String)
  ProtectionTermEventCurrency?: string// [3] 40194 (String)
  ProtectionTermEventPeriod?: number// [4] 40195 (Int)
  ProtectionTermEventUnit?: string// [5] 40196 (String)
  ProtectionTermEventDayType?: number// [6] 40197 (Int)
  ProtectionTermEventRateSource?: string// [7] 40198 (String)
  ProtectionTermEventQualifierGrp?: IProtectionTermEventQualifierGrp// [8] NoProtectionTermEventQualifiers.40199, ProtectionTermEventQualifier.40200
}
