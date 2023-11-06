import { INestedParties3 } from './nested_parties_3'

export interface ITrdInstrmtLegExecGrp {
  LegRefID?: string// [1] 654 (String)
  LegExecID?: string// [1] 1893 (String)
  LegExecRefID?: string// [1] 1901 (String)
  LegTradeID?: string// [1] 1894 (String)
  LegTradeReportID?: string// [1] 1895 (String)
  LegOrderQty?: number// [1] 685 (Float)
  LegPositionEffect?: string// [1] 564 (String)
  LegCoveredOrUncovered?: number// [1] 565 (Int)
  LegLastPx?: number// [1] 637 (Float)
  LegPriceType?: number// [1] 686 (Int)
  LegSettlCurrency?: string// [1] 675 (String)
  LegShortSaleExemptionReason?: number// [1] 1689 (Int)
  LegLastQty?: number// [1] 1418 (Float)
  LegQtyType?: number// [1] 1591 (Int)
  NestedParties3?: INestedParties3[]// [1] ID.949, Src.950 .. Qual.2382
}
