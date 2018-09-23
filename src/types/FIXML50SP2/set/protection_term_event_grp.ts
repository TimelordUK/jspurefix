import { IProtectionTermEventQualifierGrp } from './protection_term_event_qualifier_grp'

export interface IProtectionTermEventGrp {
  UnderlyingReturnRateValuationDateType?: number// 43073
  UnderlyingRateSpreadStepValue?: string// 43007
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingProtectionTermEventPeriod?: number// 42081
  UnderlyingProtectionTermEventUnit?: string// 42082
  UnderlyingProtectionTermEventDayType?: number// 42083
  UnderlyingReturnRateInformationSource?: number// 43061
  ProtectionTermEventQualifierGrp?: IProtectionTermEventQualifierGrp[]
}
