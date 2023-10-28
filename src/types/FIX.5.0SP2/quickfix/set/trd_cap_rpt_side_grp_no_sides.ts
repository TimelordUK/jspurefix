import { IParties } from './parties'
import { IPartyDetailGrp } from './party_detail_grp'
import { ILimitAmts } from './limit_amts'
import { IClrInstGrp } from './clr_inst_grp'
import { ISideRegulatoryTradeIDGrp } from './side_regulatory_trade_id_grp'
import { ICommissionData } from './commission_data'
import { ICommissionDataGrp } from './commission_data_grp'
import { IContAmtGrp } from './cont_amt_grp'
import { IStipulations } from './stipulations'
import { IMiscFeesGrp } from './misc_fees_grp'
import { ITrdAllocGrp } from './trd_alloc_grp'
import { ISideTrdRegTS } from './side_trd_reg_ts'
import { ISettlDetails } from './settl_details'
import { ITradeReportOrderDetail } from './trade_report_order_detail'
import { ITradePositionQty } from './trade_position_qty'
import { IRelatedTradeGrp } from './related_trade_grp'
import { IRelatedPositionGrp } from './related_position_grp'
import { ISideCollateralAmountGrp } from './side_collateral_amount_grp'

export interface ITrdCapRptSideGrpNoSides {
  Side: string// [1] 54 (String)
  ShortMarkingExemptIndicator?: boolean// [2] 2102 (Boolean)
  SideExecID?: string// [3] 1427 (String)
  OrderDelay?: number// [4] 1428 (Int)
  OrderDelayUnit?: number// [5] 1429 (Int)
  SideLastQty?: number// [6] 1009 (Float)
  SideClearingTradePrice?: number// [7] 1597 (Float)
  SidePriceDifferential?: number// [8] 1599 (Float)
  SideClearingTradePriceType?: number// [9] 1598 (Int)
  SideTradeReportID?: string// [10] 1005 (String)
  SideTradeID?: string// [11] 1506 (String)
  SideOrigTradeID?: string// [12] 1507 (String)
  SideFillStationCd?: string// [13] 1006 (String)
  SideReasonCd?: string// [14] 1007 (String)
  RptSeq?: number// [15] 83 (Int)
  SideTrdSubType?: number// [16] 1008 (Int)
  NetGrossInd?: number// [17] 430 (Int)
  SideCurrency?: string// [18] 1154 (String)
  SideCurrencyCodeSource?: string// [19] 2901 (String)
  SideSettlCurrency?: string// [20] 1155 (String)
  SideSettlCurrencyCodeSource?: string// [21] 2902 (String)
  Parties?: IParties// [22] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  PartyDetailGrp?: IPartyDetailGrp// [23] NoPartyDetails.1671, PartyDetailID.1691 .. PartyDetailStatus.1672
  Account?: string// [24] 1 (String)
  AcctIDSource?: number// [25] 660 (Int)
  AccountType?: number// [26] 581 (Int)
  OwnerType?: number// [27] 522 (Int)
  LimitAmts?: ILimitAmts// [28] NoLimitAmts.1630, LimitAmtType.1631 .. LimitRole.2396
  ProcessCode?: string// [29] 81 (String)
  OddLot?: boolean// [30] 575 (Boolean)
  ClrInstGrp?: IClrInstGrp// [31] NoClearingInstructions.576, ClearingInstruction.577
  ClearingFeeIndicator?: string// [32] 635 (String)
  SideRegulatoryTradeIDGrp?: ISideRegulatoryTradeIDGrp// [33] NoSideRegulatoryTradeIDs.1971, SideRegulatoryTradeID.1972 .. SideRegulatoryTradeIDScope.2398
  SideTradeReportingIndicator?: number// [34] 2671 (Int)
  FirmTradeEventID?: string// [35] 2418 (String)
  TradeInputSource?: string// [36] 578 (String)
  TradeInputDevice?: string// [37] 579 (String)
  ComplianceID?: string// [38] 376 (String)
  ComplianceText?: string// [39] 2404 (String)
  EncodedComplianceTextLen?: number// [40] 2351 (Length)
  EncodedComplianceText?: Buffer// [41] 2352 (RawData)
  SolicitedFlag?: boolean// [42] 377 (Boolean)
  CustOrderCapacity?: number// [43] 582 (Int)
  TradingSessionID?: string// [44] 336 (String)
  TradingSessionSubID?: string// [45] 625 (String)
  TimeBracket?: string// [46] 943 (String)
  RemunerationIndicator?: number// [47] 2356 (Int)
  CommissionData?: ICommissionData// [48] Commission.12, CommType.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp// [49] NoCommissions.2639, CommissionAmount.2640 .. EncodedCommissionDesc.2652
  NumDaysInterest?: number// [50] 157 (Int)
  ExDate?: Date// [51] 230 (LocalDate)
  AccruedInterestRate?: number// [52] 158 (Float)
  AccruedInterestAmt?: number// [53] 159 (Float)
  InterestAtMaturity?: number// [54] 738 (Float)
  EndAccruedInterestAmt?: number// [55] 920 (Float)
  StartCash?: number// [56] 921 (Float)
  EndCash?: number// [57] 922 (Float)
  Concession?: number// [58] 238 (Float)
  TotalTakedown?: number// [59] 237 (Float)
  NetMoney?: number// [60] 118 (Float)
  SettlCurrAmt?: number// [61] 119 (Float)
  SettlCurrFxRate?: number// [62] 155 (Float)
  SettlCurrFxRateCalc?: string// [63] 156 (String)
  PositionEffect?: string// [64] 77 (String)
  Text?: string// [65] 58 (String)
  EncodedTextLen?: number// [66] 354 (Length)
  EncodedText?: Buffer// [67] 355 (RawData)
  SideMultiLegReportingType?: number// [68] 752 (Int)
  ContAmtGrp?: IContAmtGrp// [69] NoContAmts.518, ContAmtType.519 .. ContAmtCurr.521
  Stipulations?: IStipulations// [70] NoStipulations.232, StipulationType.233, StipulationValue.234
  MiscFeesGrp?: IMiscFeesGrp// [71] NoMiscFees.136, MiscFeeAmt.137 .. MiscFeeDesc.2713
  ExchangeRule?: string// [72] 825 (String)
  TradeAllocIndicator?: number// [73] 826 (Int)
  TradeAllocGroupInstruction?: number// [74] 1848 (Int)
  AllocGroupID?: string// [75] 1730 (String)
  PreviousAllocGroupID?: string// [76] 2771 (String)
  GroupAmount?: number// [77] 2759 (Float)
  AllocGroupStatus?: number// [78] 2767 (Int)
  SideAvgPxIndicator?: number// [79] 1853 (Int)
  SideAvgPxGroupID?: string// [80] 1854 (String)
  SideAvgPx?: number// [81] 1852 (Float)
  PreallocMethod?: string// [82] 591 (String)
  AllocID?: string// [83] 70 (String)
  TrdAllocGrp?: ITrdAllocGrp// [84] NoAllocs.78, AllocAccount.79 .. EncodedAllocCommissionDesc.2666
  SideTrdRegTS?: ISideTrdRegTS// [85] NoSideTrdRegTS.1016, SideTrdRegTimestamp.1012 .. SideTrdRegTimestampSrc.1014
  SettlDetails?: ISettlDetails// [86] NoSettlDetails.1158, SettlObligSource.1164 .. SettlPartySubIDType.786
  SideGrossTradeAmt?: number// [87] 1072 (Float)
  AggressorIndicator?: boolean// [88] 1057 (Boolean)
  ExchangeSpecialInstructions?: string// [89] 1139 (String)
  SideShortSaleExemptionReason?: number// [90] 1690 (Int)
  OrderCategory?: string// [91] 1115 (String)
  SideLiquidityInd?: number// [92] 1444 (Int)
  StrategyLinkID?: string// [93] 1851 (String)
  TradeReportOrderDetail?: ITradeReportOrderDetail// [94] OrderID.37, SecondaryOrderID.198 .. OrderPercentOfTotalVolume.2766
  CustOrderHandlingInst?: string// [95] 1031 (String)
  OrderHandlingInstSource?: number// [96] 1032 (Int)
  TradePositionQty?: ITradePositionQty// [97] NoPositions.702, PosType.703 .. QuantityDate.976
  RelatedTradeGrp?: IRelatedTradeGrp// [98] NoRelatedTrades.1855, RelatedTradeID.1856 .. RelatedTradeQuantity.1860
  RelatedPositionGrp?: IRelatedPositionGrp// [99] NoRelatedPositions.1861, RelatedPositionID.1862 .. RelatedPositionDate.1864
  BlockTrdAllocIndicator?: number// [100] 1980 (Int)
  SideRiskLimitCheckStatus?: number// [101] 2344 (Int)
  LastCapacity?: string// [102] 29 (String)
  RefRiskLimitCheckID?: string// [103] 2334 (String)
  RefRiskLimitCheckIDType?: number// [104] 2335 (Int)
  CompressionGroupID?: string// [105] 2361 (String)
  SideCollateralAmountGrp?: ISideCollateralAmountGrp// [106] NoSideCollateralAmounts.2691, SideCurrentCollateralAmount.2702 .. SideUnderlyingRefID.2863
}
