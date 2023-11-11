import { IUnderlyingPhysicalSettlDeliverableObligationGrp } from './underlying_physical_settl_deliverable_obligation_grp'

export interface IUnderlyingPhysicalSettlTermGrpNoUnderlyingPhysicalSettlTerms {
  UnderlyingPhysicalSettlDeliverableObligationGrp?: IUnderlyingPhysicalSettlDeliverableObligationGrp// [1] NoUnderlyingPhysicalSettlDeliverableObligations.42065, UnderlyingPhysicalSettlDeliverableObligationType.42066, UnderlyingPhysicalSettlDeliverableObligationValue.42067
  UnderlyingPhysicalSettlCurrency?: string// [2] 42061 (String)
  UnderlyingPhysicalSettlBusinessDays?: number// [3] 42062 (Int)
  UnderlyingPhysicalSettlMaximumBusinessDays?: number// [4] 42063 (Int)
  UnderlyingPhysicalSettlTermXID?: string// [5] 42064 (String)
}
