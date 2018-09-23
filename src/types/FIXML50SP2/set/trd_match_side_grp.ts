import { IParties } from './parties'
import { ITrdAllocGrp } from './trd_alloc_grp'
import { ITradeReportOrderDetail } from './trade_report_order_detail'
import { ITrdInstrmtLegExecGrp } from './trd_instrmt_leg_exec_grp'

export interface ITrdMatchSideGrp {
  RelativeValueSide?: number// 2532
  SideExecID?: string// 1427
  LegExecRefID?: string// 1901
  LegTradeID?: string// 1894
  MDStatisticRptID?: string// 2453
  OrderDelay?: number// 1428
  OrderDelayUnit?: number// 1429
  SideLastQty?: number// 1009
  SideClearingTradePrice?: number// 1597
  SidePriceDifferential?: number// 1599
  SideClearingTradePriceType?: number// 1598
  SideFillStationCd?: string// 1006
  SideReasonCd?: string// 1007
  SideTrdSubTyp?: number// 1008
  NetGrossInd?: number// 430
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  InputSource?: string// 979
  TradeInputDevice?: string// 579
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: string// 2351
  EncodedComplianceText?: Buffer// 2352
  SolicitedFlag?: string// 377
  AllocCustomerCapacity?: string// 993
  TimeBracket?: string// 943
  LegPositionEffect?: string// 564
  ExchangeRule?: string// 825
  TradeAllocIndicator?: number// 826
  PreallocMethod?: string// 591
  AllocID?: string// 70
  SideGrossTradeAmt?: number// 1072
  AggressorIndicator?: string// 1057
  ExchangeSpecialInstructions?: string// 1139
  SideShortSaleExemptionReason?: number// 1690
  OrderCategory?: string// 1115
  SideAvgPxIndicator?: number// 1853
  SideAvgPxGroupID?: string// 1854
  SideCollateralAmountMarketSegmentID?: string// 2693
  SideVenueType?: string// 1899
  AllocClearingFeeIndicator?: string// 1136
  CustOrderHandlingInst?: string// 1031
  OrderHandlingInstSource?: number// 1032
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  Parties?: IParties[]
  TrdAllocGrp?: ITrdAllocGrp[]
  TradeReportOrderDetail?: ITradeReportOrderDetail
  TrdInstrmtLegExecGrp?: ITrdInstrmtLegExecGrp[]
}
