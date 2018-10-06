import { INestedParties3 } from './nested_parties_3'

export interface ITrdInstrmtLegExecGrp {
  LegRefID?: string// 654
  LegExecID?: string// 1893
  LegExecRefID?: string// 1901
  LegTradeID?: string// 1894
  LegTradeReportID?: string// 1895
  LegOrderQty?: number// 685
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  LegLastPx?: number// 637
  LegPriceType?: number// 686
  LegSettlCurrency?: string// 675
  LegShortSaleExemptionReason?: number// 1689
  LegLastQty?: number// 1418
  LegQtyType?: number// 1591
  NestedParties3?: INestedParties3[]
}
