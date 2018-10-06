import { IParties } from './parties'
import { ITrdAllocGrp } from './trd_alloc_grp'
import { ITradeReportOrderDetail } from './trade_report_order_detail'
import { ITrdInstrmtLegExecGrp } from './trd_instrmt_leg_exec_grp'

export interface ITrdMatchSideGrp {
  RelativeValueSide?: number// 2532
  SideExecID?: string// 1427
  SideExecRefID?: string// 1900
  SideTradeID?: string// 1506
  SideTradeReportID?: string// 1005
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
  SideCurrency?: string// 1154
  SideSettlCurrency?: string// 1155
  TradeInputSource?: string// 578
  TradeInputDevice?: string// 579
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: number// 2351
  EncodedComplianceText?: Buffer// 2352
  SolicitedFlag?: boolean// 377
  CustOrderCapacity?: number// 582
  TimeBracket?: string// 943
  PositionEffect?: string// 77
  ExchangeRule?: string// 825
  TradeAllocIndicator?: number// 826
  PreallocMethod?: string// 591
  AllocID?: string// 70
  SideGrossTradeAmt?: number// 1072
  AggressorIndicator?: boolean// 1057
  ExchangeSpecialInstructions?: string// 1139
  SideShortSaleExemptionReason?: number// 1690
  OrderCategory?: string// 1115
  AvgPxIndicator?: number// 819
  AvgPxGroupID?: string// 1731
  SideMarketSegmentID?: string// 1898
  SideVenueType?: string// 1899
  ClearingFeeIndicator?: string// 635
  CustOrderHandlingInst?: string// 1031
  OrderHandlingInstSource?: number// 1032
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  Parties?: IParties[]
  TrdAllocGrp?: ITrdAllocGrp[]
  TradeReportOrderDetail?: ITradeReportOrderDetail
  TrdInstrmtLegExecGrp?: ITrdInstrmtLegExecGrp[]
}
