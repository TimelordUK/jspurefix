import { ILegPhysicalSettlDeliverableObligationGrp } from './leg_physical_settl_deliverable_obligation_grp'

export interface ILegPhysicalSettlTermGrpNoLegPhysicalSettlTerms {
  LegPhysicalSettlDeliverableObligationGrp?: ILegPhysicalSettlDeliverableObligationGrp// [1] NoLegPhysicalSettlDeliverableObligations.41604, LegPhysicalSettlDeliverableObligationType.41605, LegPhysicalSettlDeliverableObligationValue.41606
  LegPhysicalSettlCurency?: string// [2] 41601 (String)
  LegPhysicalSettlBusinessDays?: number// [3] 41602 (Int)
  LegPhysicalSettlMaximumBusinessDays?: number// [4] 41603 (Int)
  LegPhysicalSettlTermXID?: string// [5] 41600 (String)
}
