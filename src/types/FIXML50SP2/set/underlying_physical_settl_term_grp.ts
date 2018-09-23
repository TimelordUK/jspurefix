import { IUnderlyingPhysicalSettlDeliverableObligationGrp } from './underlying_physical_settl_deliverable_obligation_grp'

export interface IUnderlyingPhysicalSettlTermGrp {
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingPhysicalSettlBusinessDays?: number// 42062
  UnderlyingPhysicalSettlMaximumBusinessDays?: number// 42063
  UnderlyingDividendPeriodXID?: string// 42881
  UnderlyingPhysicalSettlDeliverableObligationGrp?: IUnderlyingPhysicalSettlDeliverableObligationGrp[]
}
