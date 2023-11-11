import { IPhysicalSettlDeliverableObligationGrp } from './physical_settl_deliverable_obligation_grp'

export interface IPhysicalSettlTermGrp {
  PhysicalSettlCurrency?: string// [1] 40205 (String)
  PhysicalSettlBusinessDays?: number// [1] 40206 (Int)
  PhysicalSettlMaximumBusinessDays?: number// [1] 40207 (Int)
  PhysicalSettlTermXID?: string// [1] 40208 (String)
  PhysicalSettlDeliverableObligationGrp?: IPhysicalSettlDeliverableObligationGrp[]// [1] Typ.40210, Val.40211
}
