import { ILegProtectionTermEventNewsSourceGrp } from './leg_protection_term_event_news_source_grp'
import { ILegProtectionTermEventGrp } from './leg_protection_term_event_grp'
import { ILegProtectionTermObligationGrp } from './leg_protection_term_obligation_grp'

export interface ILegProtectionTermGrp {
  LegProtectionTermNotional?: number// 41618
  LegProtectionTermCurrency?: string// 41619
  LegProtectionTermSellerNotifies?: boolean// 41620
  LegProtectionTermBuyerNotifies?: boolean// 41621
  LegProtectionTermEventBusinessCenter?: string// 41622
  LegProtectionTermStandardSources?: boolean// 41623
  LegProtectionTermEventMinimumSources?: number// 41624
  LegProtectionTermXID?: string// 41617
  LegProtectionTermEventNewsSourceGrp?: ILegProtectionTermEventNewsSourceGrp[]
  LegProtectionTermEventGrp?: ILegProtectionTermEventGrp[]
  LegProtectionTermObligationGrp?: ILegProtectionTermObligationGrp[]
}
