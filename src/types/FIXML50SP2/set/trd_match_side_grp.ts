import { IParties } from './parties'
import { ITrdAllocGrp } from './trd_alloc_grp'
import { ITradeReportOrderDetail } from './trade_report_order_detail'
import { ITrdInstrmtLegExecGrp } from './trd_instrmt_leg_exec_grp'

export interface ITrdMatchSideGrp {
  Side?: string// [1] 54 (String)
  SideExecID?: string// [1] 1427 (String)
  SideExecRefID?: string// [1] 1900 (String)
  SideTradeID?: string// [1] 1506 (String)
  SideTradeReportID?: string// [1] 1005 (String)
  OrderDelay?: number// [1] 1428 (Int)
  OrderDelayUnit?: number// [1] 1429 (Int)
  SideLastQty?: number// [1] 1009 (Float)
  SideClearingTradePrice?: number// [1] 1597 (Float)
  SidePriceDifferential?: number// [1] 1599 (Float)
  SideClearingTradePriceType?: number// [1] 1598 (Int)
  SideFillStationCd?: string// [1] 1006 (String)
  SideReasonCd?: string// [1] 1007 (String)
  SideTrdSubTyp?: number// [1] 1008 (Int)
  NetGrossInd?: number// [1] 430 (Int)
  SideCurrency?: string// [1] 1154 (String)
  SideSettlCurrency?: string// [1] 1155 (String)
  TradeInputSource?: string// [1] 578 (String)
  TradeInputDevice?: string// [1] 579 (String)
  ComplianceID?: string// [1] 376 (String)
  ComplianceText?: string// [1] 2404 (String)
  EncodedComplianceTextLen?: number// [1] 2351 (Length)
  EncodedComplianceText?: Buffer// [1] 2352 (RawData)
  SolicitedFlag?: boolean// [1] 377 (Boolean)
  CustOrderCapacity?: number// [1] 582 (Int)
  TimeBracket?: string// [1] 943 (String)
  PositionEffect?: string// [1] 77 (String)
  ExchangeRule?: string// [1] 825 (String)
  TradeAllocIndicator?: number// [1] 826 (Int)
  PreallocMethod?: string// [1] 591 (String)
  AllocID?: string// [1] 70 (String)
  SideGrossTradeAmt?: number// [1] 1072 (Float)
  AggressorIndicator?: boolean// [1] 1057 (Boolean)
  ExchangeSpecialInstructions?: string// [1] 1139 (String)
  SideShortSaleExemptionReason?: number// [1] 1690 (Int)
  OrderCategory?: string// [1] 1115 (String)
  AvgPxIndicator?: number// [1] 819 (Int)
  AvgPxGroupID?: string// [1] 1731 (String)
  SideMarketSegmentID?: string// [1] 1898 (String)
  SideVenueType?: string// [1] 1899 (String)
  ClearingFeeIndicator?: string// [1] 635 (String)
  CustOrderHandlingInst?: string// [1] 1031 (String)
  OrderHandlingInstSource?: number// [1] 1032 (Int)
  Text?: string// [1] 58 (String)
  EncodedTextLen?: number// [1] 354 (Length)
  EncodedText?: Buffer// [1] 355 (RawData)
  Parties?: IParties[]// [1] ID.448, Src.447 .. Qual.2376
  TrdAllocGrp?: ITrdAllocGrp[]// [2] Acct.79, ActIDSrc.661 .. RefRiskLmtChkIDTyp.2393
  TradeReportOrderDetail?: ITradeReportOrderDetail// [3] OrdID.37, OrdID2.198 .. OrigOrdModTm.586
  TrdInstrmtLegExecGrp?: ITrdInstrmtLegExecGrp[]// [4] RefID.654, ExecID.1893 .. QtyTyp.1591
}
