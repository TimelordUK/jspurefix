import { IUnderlyingProtectionTermEventNewsSourceGrp } from './underlying_protection_term_event_news_source_grp'
import { IUnderlyingProtectionTermEventGrp } from './underlying_protection_term_event_grp'
import { IUnderlyingProtectionTermObligationGrp } from './underlying_protection_term_obligation_grp'

export interface IUnderlyingProtectionTermGrpNoUnderlyingProtectionTerms {
  UnderlyingProtectionTermNotional?: number// [1] 42069 (Float)
  UnderlyingProtectionTermCurrency?: string// [2] 42070 (String)
  UnderlyingProtectionTermSellerNotifies?: boolean// [3] 42071 (Boolean)
  UnderlyingProtectionTermBuyerNotifies?: boolean// [4] 42072 (Boolean)
  UnderlyingProtectionTermEventBusinessCenter?: string// [5] 42073 (String)
  UnderlyingProtectionTermStandardSources?: boolean// [6] 42074 (Boolean)
  UnderlyingProtectionTermEventMinimumSources?: number// [7] 42075 (Int)
  UnderlyingProtectionTermEventNewsSourceGrp?: IUnderlyingProtectionTermEventNewsSourceGrp// [8] NoUnderlyingProtectionTermEventNewsSources.42090, UnderlyingProtectionTermEventNewsSource.42091
  UnderlyingProtectionTermEventGrp?: IUnderlyingProtectionTermEventGrp// [9] NoUnderlyingProtectionTermEvents.42077, UnderlyingProtectionTermEventType.42078 .. UnderlyingProtectionTermEventQualifier.42086
  UnderlyingProtectionTermObligationGrp?: IUnderlyingProtectionTermObligationGrp// [10] NoUnderlyingProtectionTermObligations.42087, UnderlyingProtectionTermObligationType.42088, UnderlyingProtectionTermObligationValue.42089
  UnderlyingProtectionTermXID?: string// [11] 42076 (String)
}
