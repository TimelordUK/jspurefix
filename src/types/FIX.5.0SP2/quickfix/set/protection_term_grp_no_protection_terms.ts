import { IProtectionTermEventNewsSourceGrp } from './protection_term_event_news_source_grp'
import { IProtectionTermEventGrp } from './protection_term_event_grp'
import { IProtectionTermObligationGrp } from './protection_term_obligation_grp'

export interface IProtectionTermGrpNoProtectionTerms {
  ProtectionTermNotional?: number// [1] 40182 (Float)
  ProtectionTermCurrency?: string// [2] 40183 (String)
  ProtectionTermSellerNotifies?: boolean// [3] 40184 (Boolean)
  ProtectionTermBuyerNotifies?: boolean// [4] 40185 (Boolean)
  ProtectionTermEventBusinessCenter?: string// [5] 40186 (String)
  ProtectionTermStandardSources?: boolean// [6] 40187 (Boolean)
  ProtectionTermEventMinimumSources?: number// [7] 40188 (Int)
  ProtectionTermEventNewsSourceGrp?: IProtectionTermEventNewsSourceGrp// [8] NoProtectionTermEventNewsSources.40951, ProtectionTermEventNewsSource.40189
  ProtectionTermEventGrp?: IProtectionTermEventGrp// [9] NoProtectionTermEvents.40191, ProtectionTermEventType.40192 .. ProtectionTermEventQualifier.40200
  ProtectionTermObligationGrp?: IProtectionTermObligationGrp// [10] NoProtectionTermObligations.40201, ProtectionTermObligationType.40202, ProtectionTermObligationValue.40203
  ProtectionTermXID?: string// [11] 40190 (String)
}
