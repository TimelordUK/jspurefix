import { IPhysicalSettlDeliverableObligationGrp } from './physical_settl_deliverable_obligation_grp'

export interface IPhysicalSettlTermGrpNoPhysicalSettlTerms {
  PhysicalSettlDeliverableObligationGrp?: IPhysicalSettlDeliverableObligationGrp// [1] NoPhysicalSettlDeliverableObligations.40209, PhysicalSettlDeliverableObligationType.40210, PhysicalSettlDeliverableObligationValue.40211
  PhysicalSettlCurrency?: string// [2] 40205 (String)
  PhysicalSettlBusinessDays?: number// [3] 40206 (Int)
  PhysicalSettlMaximumBusinessDays?: number// [4] 40207 (Int)
  PhysicalSettlTermXID?: string// [5] 40208 (String)
}
