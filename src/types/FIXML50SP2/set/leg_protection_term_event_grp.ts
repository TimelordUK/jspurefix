import { ILegProtectionTermEventQualifierGrp } from './leg_protection_term_event_qualifier_grp'

export interface ILegProtectionTermEventGrp {
  LegProtectionTermEventType?: string// 41626
  LegProtectionTermEventValue?: string// 41627
  LegProtectionTermEventCurrency?: string// 41628
  LegProtectionTermEventPeriod?: number// 41629
  LegProtectionTermEventUnit?: string// 41630
  LegProtectionTermEventDayType?: number// 41631
  LegProtectionTermEventRateSource?: string// 41632
  LegProtectionTermEventQualifierGrp?: ILegProtectionTermEventQualifierGrp[]
}
