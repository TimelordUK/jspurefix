import { ILegProtectionTermEventNewsSourceGrp } from './leg_protection_term_event_news_source_grp'
import { ILegProtectionTermEventGrp } from './leg_protection_term_event_grp'
import { ILegProtectionTermObligationGrp } from './leg_protection_term_obligation_grp'

export interface ILegProtectionTermGrpNoLegProtectionTerms {
  LegProtectionTermNotional?: number// [1] 41618 (Float)
  LegProtectionTermCurrency?: string// [2] 41619 (String)
  LegProtectionTermSellerNotifies?: boolean// [3] 41620 (Boolean)
  LegProtectionTermBuyerNotifies?: boolean// [4] 41621 (Boolean)
  LegProtectionTermEventBusinessCenter?: string// [5] 41622 (String)
  LegProtectionTermStandardSources?: boolean// [6] 41623 (Boolean)
  LegProtectionTermEventMinimumSources?: number// [7] 41624 (Int)
  LegProtectionTermEventNewsSourceGrp?: ILegProtectionTermEventNewsSourceGrp// [8] NoLegProtectionTermEventNewsSources.41614, LegProtectionTermEventNewsSource.41615
  LegProtectionTermEventGrp?: ILegProtectionTermEventGrp// [9] NoLegProtectionTermEvents.41625, LegProtectionTermEventType.41626 .. LegProtectionTermEventQualifier.41634
  LegProtectionTermObligationGrp?: ILegProtectionTermObligationGrp// [10] NoLegProtectionTermObligations.41635, LegProtectionTermObligationType.41636, LegProtectionTermObligationValue.41637
  LegProtectionTermXID?: string// [11] 41617 (String)
}
