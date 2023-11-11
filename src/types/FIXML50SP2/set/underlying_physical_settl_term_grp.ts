import { IUnderlyingPhysicalSettlDeliverableObligationGrp } from './underlying_physical_settl_deliverable_obligation_grp'

export interface IUnderlyingPhysicalSettlTermGrp {
  UnderlyingPhysicalSettlCurrency?: string// [1] 42061 (String)
  UnderlyingPhysicalSettlBusinessDays?: number// [1] 42062 (Int)
  UnderlyingPhysicalSettlMaximumBusinessDays?: number// [1] 42063 (Int)
  UnderlyingPhysicalSettlTermXID?: string// [1] 42064 (String)
  UnderlyingPhysicalSettlDeliverableObligationGrp?: IUnderlyingPhysicalSettlDeliverableObligationGrp[]// [1] Typ.42066, Val.42067
}
