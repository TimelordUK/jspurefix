import { IProtectionTermEventNewsSourceGrp } from './protection_term_event_news_source_grp'
import { IProtectionTermEventGrp } from './protection_term_event_grp'
import { IProtectionTermObligationGrp } from './protection_term_obligation_grp'

export interface IProtectionTermGrp {
  ProtectionTermNotional?: number// [1] 40182 (Float)
  ProtectionTermCurrency?: string// [1] 40183 (String)
  ProtectionTermSellerNotifies?: boolean// [1] 40184 (Boolean)
  ProtectionTermBuyerNotifies?: boolean// [1] 40185 (Boolean)
  ProtectionTermEventBusinessCenter?: string// [1] 40186 (String)
  ProtectionTermStandardSources?: boolean// [1] 40187 (Boolean)
  ProtectionTermEventMinimumSources?: number// [1] 40188 (Int)
  ProtectionTermXID?: string// [1] 40190 (String)
  ProtectionTermEventNewsSourceGrp?: IProtectionTermEventNewsSourceGrp[]// [1] Src.40189
  ProtectionTermEventGrp?: IProtectionTermEventGrp[]// [2] Typ.40192, Val.40193 .. RtSrc.40198
  ProtectionTermObligationGrp?: IProtectionTermObligationGrp[]// [3] Typ.40202, Val.40203
}
