import { ILegPhysicalSettlDeliverableObligationGrp } from './leg_physical_settl_deliverable_obligation_grp'

export interface ILegPhysicalSettlTermGrp {
  LegPhysicalSettlCurency?: string// 41601
  LegPhysicalSettlBusinessDays?: number// 41602
  LegPhysicalSettlMaximumBusinessDays?: number// 41603
  LegPhysicalSettlTermXID?: string// 41600
  LegPhysicalSettlDeliverableObligationGrp?: ILegPhysicalSettlDeliverableObligationGrp[]
}
