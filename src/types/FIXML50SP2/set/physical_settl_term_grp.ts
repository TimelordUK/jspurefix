import { IPhysicalSettlDeliverableObligationGrp } from './physical_settl_deliverable_obligation_grp'

export interface IPhysicalSettlTermGrp {
  PhysicalSettlCurrency?: string// 40205
  PhysicalSettlBusinessDays?: number// 40206
  PhysicalSettlMaximumBusinessDays?: number// 40207
  PhysicalSettlTermXID?: string// 40208
  PhysicalSettlDeliverableObligationGrp?: IPhysicalSettlDeliverableObligationGrp[]
}
