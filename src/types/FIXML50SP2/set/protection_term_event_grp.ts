import { IProtectionTermEventQualifierGrp } from './protection_term_event_qualifier_grp'

export interface IProtectionTermEventGrp {
  ProtectionTermEventType?: string// 40192
  ProtectionTermEventValue?: string// 40193
  ProtectionTermEventCurrency?: string// 40194
  ProtectionTermEventPeriod?: number// 40195
  ProtectionTermEventUnit?: string// 40196
  ProtectionTermEventDayType?: number// 40197
  ProtectionTermEventRateSource?: string// 40198
  ProtectionTermEventQualifierGrp?: IProtectionTermEventQualifierGrp[]
}
