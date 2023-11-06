import { ILegPhysicalSettlDeliverableObligationGrp } from './leg_physical_settl_deliverable_obligation_grp'

export interface ILegPhysicalSettlTermGrp {
  LegPhysicalSettlCurency?: string// [1] 41601 (String)
  LegPhysicalSettlBusinessDays?: number// [1] 41602 (Int)
  LegPhysicalSettlMaximumBusinessDays?: number// [1] 41603 (Int)
  LegPhysicalSettlTermXID?: string// [1] 41600 (String)
  LegPhysicalSettlDeliverableObligationGrp?: ILegPhysicalSettlDeliverableObligationGrp[]// [1] Typ.41605, Val.41606
}
