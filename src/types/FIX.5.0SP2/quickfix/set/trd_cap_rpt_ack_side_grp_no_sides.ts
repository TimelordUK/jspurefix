import { IParties } from './parties'
import { ILimitAmts } from './limit_amts'
import { IClrInstGrp } from './clr_inst_grp'
import { ICommissionData } from './commission_data'
import { ICommissionDataGrp } from './commission_data_grp'
import { IContAmtGrp } from './cont_amt_grp'
import { IStipulations } from './stipulations'
import { IMiscFeesGrp } from './misc_fees_grp'
import { ISettlDetails } from './settl_details'
import { ITrdAllocGrp } from './trd_alloc_grp'
import { ITradeReportOrderDetail } from './trade_report_order_detail'
import { ISideTrdRegTS } from './side_trd_reg_ts'
import { IRelatedTradeGrp } from './related_trade_grp'
import { IRelatedPositionGrp } from './related_position_grp'

export interface ITrdCapRptAckSideGrpNoSides {
  Side: string// [1] 54 (String)
  SideExecID?: string// [2] 1427 (String)
  SideTradeID?: string// [3] 1506 (String)
  SideOrigTradeID?: string// [4] 1507 (String)
  OrderDelay?: number// [5] 1428 (Int)
  OrderDelayUnit?: number// [6] 1429 (Int)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [8] 1 (String)
  AcctIDSource?: number// [9] 660 (Int)
  AccountType?: number// [10] 581 (Int)
  LimitAmts?: ILimitAmts// [11] NoLimitAmts.1630, LimitAmtType.1631 .. LimitRole.2396
  ProcessCode?: string// [12] 81 (String)
  OddLot?: boolean// [13] 575 (Boolean)
  ClrInstGrp?: IClrInstGrp// [14] NoClearingInstructions.576, ClearingInstruction.577
  SideTradeReportingIndicator?: number// [15] 2671 (Int)
  TradeInputSource?: string// [16] 578 (String)
  TradeInputDevice?: string// [17] 579 (String)
  ComplianceID?: string// [18] 376 (String)
  ComplianceText?: string// [19] 2404 (String)
  EncodedComplianceTextLen?: number// [20] 2351 (Length)
  EncodedComplianceText?: Buffer// [21] 2352 (RawData)
  SolicitedFlag?: boolean// [22] 377 (Boolean)
  CustOrderCapacity?: number// [23] 582 (Int)
  TradingSessionID?: string// [24] 336 (String)
  TradingSessionSubID?: string// [25] 625 (String)
  TimeBracket?: string// [26] 943 (String)
  NetGrossInd?: number// [27] 430 (Int)
  SideCurrency?: string// [28] 1154 (String)
  SideCurrencyCodeSource?: string// [29] 2901 (String)
  SideSettlCurrency?: string// [30] 1155 (String)
  SideSettlCurrencyCodeSource?: string// [31] 2902 (String)
  CommissionData?: ICommissionData// [32] Commission.12, CommType.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp// [33] NoCommissions.2639, CommissionAmount.2640 .. EncodedCommissionDesc.2652
  NumDaysInterest?: number// [34] 157 (Int)
  ExDate?: Date// [35] 230 (LocalDate)
  AccruedInterestRate?: number// [36] 158 (Float)
  AccruedInterestAmt?: number// [37] 159 (Float)
  InterestAtMaturity?: number// [38] 738 (Float)
  EndAccruedInterestAmt?: number// [39] 920 (Float)
  StartCash?: number// [40] 921 (Float)
  EndCash?: number// [41] 922 (Float)
  Concession?: number// [42] 238 (Float)
  TotalTakedown?: number// [43] 237 (Float)
  NetMoney?: number// [44] 118 (Float)
  SettlCurrAmt?: number// [45] 119 (Float)
  SettlCurrFxRate?: number// [46] 155 (Float)
  SettlCurrFxRateCalc?: string// [47] 156 (String)
  PositionEffect?: string// [48] 77 (String)
  SideMultiLegReportingType?: number// [49] 752 (Int)
  ContAmtGrp?: IContAmtGrp// [50] NoContAmts.518, ContAmtType.519 .. ContAmtCurr.521
  Stipulations?: IStipulations// [51] NoStipulations.232, StipulationType.233, StipulationValue.234
  MiscFeesGrp?: IMiscFeesGrp// [52] NoMiscFees.136, MiscFeeAmt.137 .. MiscFeeDesc.2713
  ExchangeRule?: string// [53] 825 (String)
  SettlDetails?: ISettlDetails// [54] NoSettlDetails.1158, SettlObligSource.1164 .. SettlPartySubIDType.786
  TradeAllocIndicator?: number// [55] 826 (Int)
  AllocGroupID?: string// [56] 1730 (String)
  PreviousAllocGroupID?: string// [57] 2771 (String)
  GroupAmount?: number// [58] 2759 (Float)
  AllocGroupStatus?: number// [59] 2767 (Int)
  SideAvgPxIndicator?: number// [60] 1853 (Int)
  SideAvgPxGroupID?: string// [61] 1854 (String)
  SideAvgPx?: number// [62] 1852 (Float)
  PreallocMethod?: string// [63] 591 (String)
  AllocID?: string// [64] 70 (String)
  TrdAllocGrp?: ITrdAllocGrp// [65] NoAllocs.78, AllocAccount.79 .. EncodedAllocCommissionDesc.2666
  SideGrossTradeAmt?: number// [66] 1072 (Float)
  AggressorIndicator?: boolean// [67] 1057 (Boolean)
  SideLastQty?: number// [68] 1009 (Float)
  SideTradeReportID?: string// [69] 1005 (String)
  SideFillStationCd?: string// [70] 1006 (String)
  SideReasonCd?: string// [71] 1007 (String)
  RptSeq?: number// [72] 83 (Int)
  SideTrdSubType?: number// [73] 1008 (Int)
  OrderCategory?: string// [74] 1115 (String)
  StrategyLinkID?: string// [75] 1851 (String)
  TradeReportOrderDetail?: ITradeReportOrderDetail// [76] OrderID.37, SecondaryOrderID.198 .. OrderPercentOfTotalVolume.2766
  SideTrdRegTS?: ISideTrdRegTS// [77] NoSideTrdRegTS.1016, SideTrdRegTimestamp.1012 .. SideTrdRegTimestampSrc.1014
  CustOrderHandlingInst?: string// [78] 1031 (String)
  OrderHandlingInstSource?: number// [79] 1032 (Int)
  RelatedTradeGrp?: IRelatedTradeGrp// [80] NoRelatedTrades.1855, RelatedTradeID.1856 .. RelatedTradeQuantity.1860
  RelatedPositionGrp?: IRelatedPositionGrp// [81] NoRelatedPositions.1861, RelatedPositionID.1862 .. RelatedPositionDate.1864
  SideRiskLimitCheckStatus?: number// [82] 2344 (Int)
}
