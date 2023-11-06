import { IUnderlyingProtectionTermEventNewsSourceGrp } from './underlying_protection_term_event_news_source_grp'
import { IUnderlyingProtectionTermEventGrp } from './underlying_protection_term_event_grp'
import { IUnderlyingProtectionTermObligationGrp } from './underlying_protection_term_obligation_grp'

export interface IUnderlyingProtectionTermGrp {
  UnderlyingProtectionTermNotional?: number// [1] 42069 (Float)
  UnderlyingProtectionTermCurrency?: string// [1] 42070 (String)
  UnderlyingProtectionTermSellerNotifies?: boolean// [1] 42071 (Boolean)
  UnderlyingProtectionTermBuyerNotifies?: boolean// [1] 42072 (Boolean)
  UnderlyingProtectionTermEventBusinessCenter?: string// [1] 42073 (String)
  UnderlyingProtectionTermStandardSources?: boolean// [1] 42074 (Boolean)
  UnderlyingProtectionTermEventMinimumSources?: number// [1] 42075 (Int)
  UnderlyingProtectionTermXID?: string// [1] 42076 (String)
  UnderlyingProtectionTermEventNewsSourceGrp?: IUnderlyingProtectionTermEventNewsSourceGrp[]// [1] Src.42091
  UnderlyingProtectionTermEventGrp?: IUnderlyingProtectionTermEventGrp[]// [2] Typ.42078, Val.42079 .. RtSrc.42084
  UnderlyingProtectionTermObligationGrp?: IUnderlyingProtectionTermObligationGrp[]// [3] Typ.42088, Val.42089
}
