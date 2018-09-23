import { IPhysicalSettlDeliverableObligationGrp } from './physical_settl_deliverable_obligation_grp'

export interface IPhysicalSettlTermGrp {
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingPhysicalSettlBusinessDays?: number// 42062
  UnderlyingPhysicalSettlMaximumBusinessDays?: number// 42063
  UnderlyingDividendPeriodXID?: string// 42881
  PhysicalSettlDeliverableObligationGrp?: IPhysicalSettlDeliverableObligationGrp[]
}
