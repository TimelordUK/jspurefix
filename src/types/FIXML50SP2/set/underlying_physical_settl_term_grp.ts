import { IUnderlyingPhysicalSettlDeliverableObligationGrp } from './underlying_physical_settl_deliverable_obligation_grp'

export interface IUnderlyingPhysicalSettlTermGrp {
  UnderlyingPhysicalSettlCurrency?: string// 42061
  UnderlyingPhysicalSettlBusinessDays?: number// 42062
  UnderlyingPhysicalSettlMaximumBusinessDays?: number// 42063
  UnderlyingPhysicalSettlTermXID?: string// 42064
  UnderlyingPhysicalSettlDeliverableObligationGrp?: IUnderlyingPhysicalSettlDeliverableObligationGrp[]
}
