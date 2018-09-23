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
  ShortMarkingExemptIndicator?: string// 2102
  SideExecID?: string// 1427
  OrderDelay?: number// 1428
  OrderDelayUnit?: number// 1429
  SideLastQty?: number// 1009
  SideClearingTradePrice?: number// 1597
  SidePriceDifferential?: number// 1599
  SideClearingTradePriceType?: number// 1598
  MDStatisticRptID?: string// 2453
  LegTradeID?: string// 1894
  SideOrigTradeID?: string// 1507
  SideFillStationCd?: string// 1006
  SideReasonCd?: string// 1007
  RptSeq?: number// 83
  SideTrdSubTyp?: number// 1008
  NetGrossInd?: number// 430
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  ProcessCode?: string// 81
  OddLot?: string// 575
  SideTradeReportingIndicator?: number// 2671
  FirmTradeEventID?: string// 2418
  InputSource?: string// 979
  TradeInputDevice?: string// 579
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: string// 2351
  EncodedComplianceText?: Buffer// 2352
  SolicitedFlag?: string// 377
  AllocCustomerCapacity?: string// 993
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TimeBracket?: string// 943
  RemunerationIndicator?: number// 2356
  NumDaysInterest?: number// 157
  ExDate?: Date// 230
  AccruedInterestRate?: number// 158
  AllocAccruedInterestAmt?: number// 742
  AllocInterestAtMaturity?: number// 741
  EndAccruedInterestAmt?: number// 920
  StartCash?: number// 921
  EndCash?: number// 922
  Concession?: number// 238
  TotalTakedown?: number// 237
  AllocNetMoney?: number// 154
  SettlCurrAmt?: number// 119
  SettlCurrFxRate?: string// 155
  SettlCurrFxRateCalc?: string// 156
  LegPositionEffect?: string// 564
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
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
  AggressorIndicator?: string// 1057
  ExchangeSpecialInstructions?: string// 1139
  SideShortSaleExemptionReason?: number// 1690
  OrderCategory?: string// 1115
  OrderEventLiquidityIndicator?: number// 1801
  StrategyLinkID?: string// 1851
  CustOrderHandlingInst?: string// 1031
  OrderHandlingInstSource?: number// 1032
  BlockTrdAllocIndicator?: number// 1980
  AllocRiskLimitCheckStatus?: number// 2483
  LastCapacity?: string// 29
  AllocRefRiskLimitCheckID?: string// 2392
  AllocRefRiskLimitCheckIDType?: number// 2393
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
