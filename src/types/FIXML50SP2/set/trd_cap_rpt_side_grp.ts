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
  RelativeValueSide: number// 2532
  ShortMarkingExemptIndicator?: boolean// 2102
  SideExecID?: string// 1427
  OrderDelay?: number// 1428
  OrderDelayUnit?: number// 1429
  SideLastQty?: number// 1009
  SideClearingTradePrice?: number// 1597
  SidePriceDifferential?: number// 1599
  SideClearingTradePriceType?: number// 1598
  SideTradeReportID?: string// 1005
  SideTradeID?: string// 1506
  SideOrigTradeID?: string// 1507
  SideFillStationCd?: string// 1006
  SideReasonCd?: string// 1007
  RptSeq?: number// 83
  SideTrdSubTyp?: number// 1008
  NetGrossInd?: number// 430
  SideCurrency?: string// 1154
  SideSettlCurrency?: string// 1155
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  ProcessCode?: string// 81
  OddLot?: boolean// 575
  SideTradeReportingIndicator?: number// 2671
  FirmTradeEventID?: string// 2418
  TradeInputSource?: string// 578
  TradeInputDevice?: string// 579
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: number// 2351
  EncodedComplianceText?: Buffer// 2352
  SolicitedFlag?: boolean// 377
  CustOrderCapacity?: number// 582
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TimeBracket?: string// 943
  RemunerationIndicator?: number// 2356
  NumDaysInterest?: number// 157
  ExDate?: Date// 230
  AccruedInterestRate?: number// 158
  AccruedInterestAmt?: number// 159
  InterestAtMaturity?: number// 738
  EndAccruedInterestAmt?: number// 920
  StartCash?: number// 921
  EndCash?: number// 922
  Concession?: number// 238
  TotalTakedown?: number// 237
  NetMoney?: number// 118
  SettlCurrAmt?: number// 119
  SettlCurrFxRate?: number// 155
  SettlCurrFxRateCalc?: string// 156
  PositionEffect?: string// 77
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  SideMultiLegReportingType?: number// 752
  ExchangeRule?: string// 825
  TradeAllocIndicator?: number// 826
  TradeAllocGroupInstruction?: number// 1848
  SideAvgPxIndicator?: number// 1853
  SideAvgPxGroupID?: string// 1854
  SideAvgPx?: number// 1852
  PreallocMethod?: string// 591
  AllocID?: string// 70
  SideGrossTradeAmt?: number// 1072
  AggressorIndicator?: boolean// 1057
  ExchangeSpecialInstructions?: string// 1139
  SideShortSaleExemptionReason?: number// 1690
  OrderCategory?: string// 1115
  SideLiquidityInd?: number// 1444
  StrategyLinkID?: string// 1851
  CustOrderHandlingInst?: string// 1031
  OrderHandlingInstSource?: number// 1032
  BlockTrdAllocIndicator?: number// 1980
  SideRiskLimitCheckStatus?: number// 2344
  LastCapacity?: string// 29
  RefRiskLimitCheckID?: string// 2334
  RefRiskLimitCheckIDType?: number// 2335
  CompressionGroupID?: string// 2361
  Parties?: IParties[]
  PartyDetailGrp?: IPartyDetailGrp[]
  LimitAmts?: ILimitAmts[]
  ClrInstGrp?: IClrInstGrp[]
  SideRegulatoryTradeIDGrp?: ISideRegulatoryTradeIDGrp[]
  CommissionData?: ICommissionData
  CommissionDataGrp?: ICommissionDataGrp[]
  ContAmtGrp?: IContAmtGrp[]
  Stipulations?: IStipulations[]
  MiscFeesGrp?: IMiscFeesGrp[]
  TrdAllocGrp?: ITrdAllocGrp[]
  SideTrdRegTS?: ISideTrdRegTS[]
  SettlDetails?: ISettlDetails[]
  TradeReportOrderDetail?: ITradeReportOrderDetail
  TradePositionQty?: ITradePositionQty[]
  RelatedTradeGrp?: IRelatedTradeGrp[]
  RelatedPositionGrp?: IRelatedPositionGrp[]
  SideCollateralAmountGrp?: ISideCollateralAmountGrp[]
}
