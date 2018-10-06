import { IUnderlyingProtectionTermEventNewsSourceGrp } from './underlying_protection_term_event_news_source_grp'
import { IUnderlyingProtectionTermEventGrp } from './underlying_protection_term_event_grp'
import { IUnderlyingProtectionTermObligationGrp } from './underlying_protection_term_obligation_grp'

export interface IUnderlyingProtectionTermGrp {
  UnderlyingProtectionTermNotional?: number// 42069
  UnderlyingProtectionTermCurrency?: string// 42070
  UnderlyingProtectionTermSellerNotifies?: boolean// 42071
  UnderlyingProtectionTermBuyerNotifies?: boolean// 42072
  UnderlyingProtectionTermEventBusinessCenter?: string// 42073
  UnderlyingProtectionTermStandardSources?: boolean// 42074
  UnderlyingProtectionTermEventMinimumSources?: number// 42075
  UnderlyingProtectionTermXID?: string// 42076
  UnderlyingProtectionTermEventNewsSourceGrp?: IUnderlyingProtectionTermEventNewsSourceGrp[]
  UnderlyingProtectionTermEventGrp?: IUnderlyingProtectionTermEventGrp[]
  UnderlyingProtectionTermObligationGrp?: IUnderlyingProtectionTermObligationGrp[]
}
