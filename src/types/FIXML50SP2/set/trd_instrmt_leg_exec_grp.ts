import { INestedParties3 } from './nested_parties_3'

export interface ITrdInstrmtLegExecGrp {
  EntitlementRefID?: string// 1885
  LegExecID?: string// 1893
  LegExecRefID?: string// 1901
  LegTradeID?: string// 1894
  MDStatisticRptID?: string// 2453
  LegOrderQty?: number// 685
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  LegLastPx?: number// 637
  UnderlyingReturnRatePriceType?: number// 43068
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  SideShortSaleExemptionReason?: number// 1690
  LegLastQty?: number// 1418
  LegQtyType?: number// 1591
  NestedParties3?: INestedParties3[]
}
