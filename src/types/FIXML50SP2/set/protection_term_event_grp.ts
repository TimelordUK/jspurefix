import { IProtectionTermEventQualifierGrp } from './protection_term_event_qualifier_grp'

export interface IProtectionTermEventGrp {
  ProtectionTermEventType?: string// [1] 40192 (String)
  ProtectionTermEventValue?: string// [1] 40193 (String)
  ProtectionTermEventCurrency?: string// [1] 40194 (String)
  ProtectionTermEventPeriod?: number// [1] 40195 (Int)
  ProtectionTermEventUnit?: string// [1] 40196 (String)
  ProtectionTermEventDayType?: number// [1] 40197 (Int)
  ProtectionTermEventRateSource?: string// [1] 40198 (String)
  ProtectionTermEventQualifierGrp?: IProtectionTermEventQualifierGrp[]// [1] Qual.40200
}
