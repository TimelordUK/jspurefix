import { IProtectionTermEventNewsSourceGrp } from './protection_term_event_news_source_grp'
import { IProtectionTermEventGrp } from './protection_term_event_grp'
import { IProtectionTermObligationGrp } from './protection_term_obligation_grp'

export interface IProtectionTermGrp {
  ProtectionTermNotional?: number// 40182
  ProtectionTermCurrency?: string// 40183
  ProtectionTermSellerNotifies?: boolean// 40184
  ProtectionTermBuyerNotifies?: boolean// 40185
  ProtectionTermEventBusinessCenter?: string// 40186
  ProtectionTermStandardSources?: boolean// 40187
  ProtectionTermEventMinimumSources?: number// 40188
  ProtectionTermXID?: string// 40190
  ProtectionTermEventNewsSourceGrp?: IProtectionTermEventNewsSourceGrp[]
  ProtectionTermEventGrp?: IProtectionTermEventGrp[]
  ProtectionTermObligationGrp?: IProtectionTermObligationGrp[]
}
