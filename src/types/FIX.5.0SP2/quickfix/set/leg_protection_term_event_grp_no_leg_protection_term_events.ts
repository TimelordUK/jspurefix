import { ILegProtectionTermEventQualifierGrp } from './leg_protection_term_event_qualifier_grp'

export interface ILegProtectionTermEventGrpNoLegProtectionTermEvents {
  LegProtectionTermEventType?: string// [1] 41626 (String)
  LegProtectionTermEventValue?: string// [2] 41627 (String)
  LegProtectionTermEventCurrency?: string// [3] 41628 (String)
  LegProtectionTermEventPeriod?: number// [4] 41629 (Int)
  LegProtectionTermEventUnit?: string// [5] 41630 (String)
  LegProtectionTermEventDayType?: number// [6] 41631 (Int)
  LegProtectionTermEventRateSource?: string// [7] 41632 (String)
  LegProtectionTermEventQualifierGrp?: ILegProtectionTermEventQualifierGrp// [8] NoLegProtectionTermEventQualifiers.41633, LegProtectionTermEventQualifier.41634
}
