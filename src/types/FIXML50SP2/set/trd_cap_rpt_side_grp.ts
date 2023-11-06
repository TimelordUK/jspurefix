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

export interface ITrdCapRptSideGrp {
  Side: string// [1] 54 (String)
  ShortMarkingExemptIndicator?: boolean// [1] 2102 (Boolean)
  SideExecID?: string// [1] 1427 (String)
  OrderDelay?: number// [1] 1428 (Int)
  OrderDelayUnit?: number// [1] 1429 (Int)
  SideLastQty?: number// [1] 1009 (Float)
  SideClearingTradePrice?: number// [1] 1597 (Float)
  SidePriceDifferential?: number// [1] 1599 (Float)
  SideClearingTradePriceType?: number// [1] 1598 (Int)
  SideTradeReportID?: string// [1] 1005 (String)
  SideTradeID?: string// [1] 1506 (String)
  SideOrigTradeID?: string// [1] 1507 (String)
  SideFillStationCd?: string// [1] 1006 (String)
  SideReasonCd?: string// [1] 1007 (String)
  RptSeq?: number// [1] 83 (Int)
  SideTrdSubTyp?: number// [1] 1008 (Int)
  NetGrossInd?: number// [1] 430 (Int)
  SideCurrency?: string// [1] 1154 (String)
  SideSettlCurrency?: string// [1] 1155 (String)
  Account?: string// [1] 1 (String)
  AcctIDSource?: number// [1] 660 (Int)
  AccountType?: number// [1] 581 (Int)
  ProcessCode?: string// [1] 81 (String)
  OddLot?: boolean// [1] 575 (Boolean)
  SideTradeReportingIndicator?: number// [1] 2671 (Int)
  FirmTradeEventID?: string// [1] 2418 (String)
  TradeInputSource?: string// [1] 578 (String)
  TradeInputDevice?: string// [1] 579 (String)
  ComplianceID?: string// [1] 376 (String)
  ComplianceText?: string// [1] 2404 (String)
  EncodedComplianceTextLen?: number// [1] 2351 (Length)
  EncodedComplianceText?: Buffer// [1] 2352 (RawData)
  SolicitedFlag?: boolean// [1] 377 (Boolean)
  CustOrderCapacity?: number// [1] 582 (Int)
  TradingSessionID?: string// [1] 336 (String)
  TradingSessionSubID?: string// [1] 625 (String)
  TimeBracket?: string// [1] 943 (String)
  RemunerationIndicator?: number// [1] 2356 (Int)
  NumDaysInterest?: number// [1] 157 (Int)
  ExDate?: Date// [1] 230 (LocalDate)
  AccruedInterestRate?: number// [1] 158 (Float)
  AccruedInterestAmt?: number// [1] 159 (Float)
  InterestAtMaturity?: number// [1] 738 (Float)
  EndAccruedInterestAmt?: number// [1] 920 (Float)
  StartCash?: number// [1] 921 (Float)
  EndCash?: number// [1] 922 (Float)
  Concession?: number// [1] 238 (Float)
  TotalTakedown?: number// [1] 237 (Float)
  NetMoney?: number// [1] 118 (Float)
  SettlCurrAmt?: number// [1] 119 (Float)
  SettlCurrFxRate?: number// [1] 155 (Float)
  SettlCurrFxRateCalc?: string// [1] 156 (String)
  PositionEffect?: string// [1] 77 (String)
  Text?: string// [1] 58 (String)
  EncodedTextLen?: number// [1] 354 (Length)
  EncodedText?: Buffer// [1] 355 (RawData)
  SideMultiLegReportingType?: number// [1] 752 (Int)
  ExchangeRule?: string// [1] 825 (String)
  TradeAllocIndicator?: number// [1] 826 (Int)
  TradeAllocGroupInstruction?: number// [1] 1848 (Int)
  SideAvgPxIndicator?: number// [1] 1853 (Int)
  SideAvgPxGroupID?: string// [1] 1854 (String)
  SideAvgPx?: number// [1] 1852 (Float)
  PreallocMethod?: string// [1] 591 (String)
  AllocID?: string// [1] 70 (String)
  SideGrossTradeAmt?: number// [1] 1072 (Float)
  AggressorIndicator?: boolean// [1] 1057 (Boolean)
  ExchangeSpecialInstructions?: string// [1] 1139 (String)
  SideShortSaleExemptionReason?: number// [1] 1690 (Int)
  OrderCategory?: string// [1] 1115 (String)
  SideLiquidityInd?: number// [1] 1444 (Int)
  StrategyLinkID?: string// [1] 1851 (String)
  CustOrderHandlingInst?: string// [1] 1031 (String)
  OrderHandlingInstSource?: number// [1] 1032 (Int)
  BlockTrdAllocIndicator?: number// [1] 1980 (Int)
  SideRiskLimitCheckStatus?: number// [1] 2344 (Int)
  LastCapacity?: string// [1] 29 (String)
  RefRiskLimitCheckID?: string// [1] 2334 (String)
  RefRiskLimitCheckIDType?: number// [1] 2335 (Int)
  CompressionGroupID?: string// [1] 2361 (String)
  Parties?: IParties[]// [1] ID.448, Src.447 .. Qual.2376
  PartyDetailGrp?: IPartyDetailGrp[]// [2] ID.1691, Src.1692 .. Stat.1672
  LimitAmts?: ILimitAmts[]// [3] LmtAmtTyp.1631, LastLmtAmt.1632 .. LmtR.2396
  ClrInstGrp?: IClrInstGrp[]// [4] ClrngInstrctn.577
  SideRegulatoryTradeIDGrp?: ISideRegulatoryTradeIDGrp[]// [5] ID.1972, Src.1973 .. Scope.2398
  CommissionData?: ICommissionData// [6] Comm.12, CommTyp.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp[]// [7] Amt.2640, Typ.2641 .. EncDesc.2652
  ContAmtGrp?: IContAmtGrp[]// [8] ContAmtTyp.519, ContAmtValu.520, ContAmtCurr.521
  Stipulations?: IStipulations[]// [9] Typ.233, Val.234
  MiscFeesGrp?: IMiscFeesGrp[]// [10] Amt.137, Curr.138 .. AmtDue.2217
  TrdAllocGrp?: ITrdAllocGrp[]// [11] Acct.79, ActIDSrc.661 .. RefRiskLmtChkIDTyp.2393
  SideTrdRegTS?: ISideTrdRegTS[]// [12] TS.1012, Typ.1013, Src.1014
  SettlDetails?: ISettlDetails[]// [13] SettlSrc.1164
  TradeReportOrderDetail?: ITradeReportOrderDetail// [14] OrdID.37, OrdID2.198 .. OrigOrdModTm.586
  TradePositionQty?: ITradePositionQty[]// [15] Typ.703, Long.704 .. QtyDt.976
  RelatedTradeGrp?: IRelatedTradeGrp[]// [16] ID.1856, Src.1857 .. Qty.1860
  RelatedPositionGrp?: IRelatedPositionGrp[]// [17] ID.1862, Src.1863, Dt.1864
  SideCollateralAmountGrp?: ISideCollateralAmountGrp[]// [18] Amt.2702, Ccy.2695 .. MktPx.2698
}
