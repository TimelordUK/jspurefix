import { IParties } from './parties'
import { ITrdAllocGrp } from './trd_alloc_grp'
import { ITradeReportOrderDetail } from './trade_report_order_detail'
import { ITrdInstrmtLegExecGrp } from './trd_instrmt_leg_exec_grp'

export interface ITrdMatchSideGrpNoTrdMatchSides {
  Side?: string// [1] 54 (String)
  SideExecID?: string// [2] 1427 (String)
  SideExecRefID?: string// [3] 1900 (String)
  SideTradeID?: string// [4] 1506 (String)
  SideTradeReportID?: string// [5] 1005 (String)
  OrderDelay?: number// [6] 1428 (Int)
  OrderDelayUnit?: number// [7] 1429 (Int)
  SideLastQty?: number// [8] 1009 (Float)
  SideClearingTradePrice?: number// [9] 1597 (Float)
  SidePriceDifferential?: number// [10] 1599 (Float)
  SideClearingTradePriceType?: number// [11] 1598 (Int)
  SideFillStationCd?: string// [12] 1006 (String)
  SideReasonCd?: string// [13] 1007 (String)
  SideTrdSubType?: number// [14] 1008 (Int)
  NetGrossInd?: number// [15] 430 (Int)
  SideCurrency?: string// [16] 1154 (String)
  SideCurrencyCodeSource?: string// [17] 2901 (String)
  SideSettlCurrency?: string// [18] 1155 (String)
  SideSettlCurrencyCodeSource?: string// [19] 2902 (String)
  Parties?: IParties// [20] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradeInputSource?: string// [21] 578 (String)
  TradeInputDevice?: string// [22] 579 (String)
  ComplianceID?: string// [23] 376 (String)
  ComplianceText?: string// [24] 2404 (String)
  EncodedComplianceTextLen?: number// [25] 2351 (Length)
  EncodedComplianceText?: Buffer// [26] 2352 (RawData)
  SolicitedFlag?: boolean// [27] 377 (Boolean)
  CustOrderCapacity?: number// [28] 582 (Int)
  TimeBracket?: string// [29] 943 (String)
  PositionEffect?: string// [30] 77 (String)
  ExchangeRule?: string// [31] 825 (String)
  TradeAllocIndicator?: number// [32] 826 (Int)
  PreallocMethod?: string// [33] 591 (String)
  AllocID?: string// [34] 70 (String)
  TrdAllocGrp?: ITrdAllocGrp// [35] NoAllocs.78, AllocAccount.79 .. EncodedAllocCommissionDesc.2666
  SideGrossTradeAmt?: number// [36] 1072 (Float)
  AggressorIndicator?: boolean// [37] 1057 (Boolean)
  ExchangeSpecialInstructions?: string// [38] 1139 (String)
  SideShortSaleExemptionReason?: number// [39] 1690 (Int)
  OrderCategory?: string// [40] 1115 (String)
  AvgPxIndicator?: number// [41] 819 (Int)
  AvgPxGroupID?: string// [42] 1731 (String)
  SideMarketSegmentID?: string// [43] 1898 (String)
  SideVenueType?: string// [44] 1899 (String)
  ClearingFeeIndicator?: string// [45] 635 (String)
  TradeReportOrderDetail?: ITradeReportOrderDetail// [46] OrderID.37, SecondaryOrderID.198 .. OrderPercentOfTotalVolume.2766
  TrdInstrmtLegExecGrp?: ITrdInstrmtLegExecGrp// [47] NoLegExecs.1892, LegRefID.654 .. LegQtyType.1591
  CustOrderHandlingInst?: string// [48] 1031 (String)
  OrderHandlingInstSource?: number// [49] 1032 (Int)
  Text?: string// [50] 58 (String)
  EncodedTextLen?: number// [51] 354 (Length)
  EncodedText?: Buffer// [52] 355 (RawData)
}
