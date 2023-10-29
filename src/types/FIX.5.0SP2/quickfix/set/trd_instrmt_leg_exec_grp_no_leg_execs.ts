import { INestedParties3 } from './nested_parties_3'

export interface ITrdInstrmtLegExecGrpNoLegExecs {
  LegRefID?: string// [1] 654 (String)
  LegExecID?: string// [2] 1893 (String)
  LegExecRefID?: string// [3] 1901 (String)
  LegTradeID?: string// [4] 1894 (String)
  LegTradeReportID?: string// [5] 1895 (String)
  LegOrderQty?: number// [6] 685 (Float)
  LegPositionEffect?: string// [7] 564 (String)
  LegCoveredOrUncovered?: number// [8] 565 (Int)
  NestedParties3?: INestedParties3// [9] NoNested3PartyIDs.948, Nested3PartyID.949 .. Nested3PartySubIDType.954
  LegLastPx?: number// [10] 637 (Float)
  LegPriceType?: number// [11] 686 (Int)
  LegSettlCurrency?: string// [12] 675 (String)
  LegSettlCurrencyCodeSource?: string// [13] 2900 (String)
  LegShortSaleExemptionReason?: number// [14] 1689 (Int)
  LegLastQty?: number// [15] 1418 (Float)
  LegQtyType?: number// [16] 1591 (Int)
}
