import { ILegProtectionTermEventQualifierGrp } from './leg_protection_term_event_qualifier_grp'

export interface ILegProtectionTermEventGrp {
  LegProtectionTermEventType?: string// [1] 41626 (String)
  LegProtectionTermEventValue?: string// [1] 41627 (String)
  LegProtectionTermEventCurrency?: string// [1] 41628 (String)
  LegProtectionTermEventPeriod?: number// [1] 41629 (Int)
  LegProtectionTermEventUnit?: string// [1] 41630 (String)
  LegProtectionTermEventDayType?: number// [1] 41631 (Int)
  LegProtectionTermEventRateSource?: string// [1] 41632 (String)
  LegProtectionTermEventQualifierGrp?: ILegProtectionTermEventQualifierGrp[]// [1] Qual.41634
}
