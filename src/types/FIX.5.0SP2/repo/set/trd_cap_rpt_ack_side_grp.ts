import { IParties } from './parties'
import { IClrInstGrp } from './clr_inst_grp'
import { ICommissionData } from './commission_data'
import { IContAmtGrp } from './cont_amt_grp'
import { IStipulations } from './stipulations'
import { IMiscFeesGrp } from './misc_fees_grp'
import { ISettlDetails } from './settl_details'
import { ITrdAllocGrp } from './trd_alloc_grp'
import { ISideTrdRegTS } from './side_trd_reg_ts'
import { ITradeReportOrderDetail } from './trade_report_order_detail'

export interface ITrdCapRptAckSideGrp {
  Side: string// 54
  Parties?: IParties[]
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  ProcessCode?: string// 81
  OddLot?: boolean// 575
  ClrInstGrp?: IClrInstGrp[]
  TradeInputSource?: string// 578
  TradeInputDevice?: string// 579
  ComplianceID?: string// 376
  SolicitedFlag?: boolean// 377
  CustOrderCapacity?: number// 582
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TimeBracket?: string// 943
  NetGrossInd?: number// 430
  SideCurrency?: string// 1154
  SideSettlCurrency?: string// 1155
  CommissionData?: ICommissionData
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
  SideMultiLegReportingType?: number// 752
  ContAmtGrp?: IContAmtGrp[]
  Stipulations?: IStipulations[]
  MiscFeesGrp?: IMiscFeesGrp[]
  ExchangeRule?: string// 825
  SettlDetails?: ISettlDetails[]
  TradeAllocIndicator?: number// 826
  PreallocMethod?: string// 591
  AllocID?: string// 70
  TrdAllocGrp?: ITrdAllocGrp[]
  SideGrossTradeAmt?: number// 1072
  AggressorIndicator?: boolean// 1057
  SideLastQty?: number// 1009
  SideTradeReportID?: string// 1005
  SideFillStationCd?: string// 1006
  SideReasonCd?: string// 1007
  RptSeq?: number// 83
  SideTrdSubTyp?: number// 1008
  SideTrdRegTS?: ISideTrdRegTS[]
  SideExecID?: string// 1427
  OrderDelay?: number// 1428
  OrderDelayUnit?: number// 1429
  OrderCategory?: string// 1115
  TradeReportOrderDetail?: ITradeReportOrderDetail
}
