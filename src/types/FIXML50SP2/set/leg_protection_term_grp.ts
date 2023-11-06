import { ILegProtectionTermEventNewsSourceGrp } from './leg_protection_term_event_news_source_grp'
import { ILegProtectionTermEventGrp } from './leg_protection_term_event_grp'
import { ILegProtectionTermObligationGrp } from './leg_protection_term_obligation_grp'

export interface ILegProtectionTermGrp {
  LegProtectionTermNotional?: number// [1] 41618 (Float)
  LegProtectionTermCurrency?: string// [1] 41619 (String)
  LegProtectionTermSellerNotifies?: boolean// [1] 41620 (Boolean)
  LegProtectionTermBuyerNotifies?: boolean// [1] 41621 (Boolean)
  LegProtectionTermEventBusinessCenter?: string// [1] 41622 (String)
  LegProtectionTermStandardSources?: boolean// [1] 41623 (Boolean)
  LegProtectionTermEventMinimumSources?: number// [1] 41624 (Int)
  LegProtectionTermXID?: string// [1] 41617 (String)
  LegProtectionTermEventNewsSourceGrp?: ILegProtectionTermEventNewsSourceGrp[]// [1] Src.41615
  LegProtectionTermEventGrp?: ILegProtectionTermEventGrp[]// [2] Typ.41626, Val.41627 .. RtSrc.41632
  LegProtectionTermObligationGrp?: ILegProtectionTermObligationGrp[]// [3] Typ.41636, Val.41637
}
