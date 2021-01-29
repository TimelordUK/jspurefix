import { IParties } from './parties'
import { IClrInstGrp } from './clr_inst_grp'
import { ICommissionData } from './commission_data'
import { IContAmtGrp } from './cont_amt_grp'
import { IStipulations } from './stipulations'
import { IMiscFeesGrp } from './misc_fees_grp'
import { ITrdAllocGrp } from './trd_alloc_grp'

export interface ITrdCapRptSideGrpNoSides {
  Side: string// 54
  OrderID: string// 37
  SecondaryOrderID?: string// 198
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  ListID?: string// 66
  Parties: IParties
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  ProcessCode?: string// 81
  OddLot?: boolean// 575
  ClrInstGrp: IClrInstGrp
  TradeInputSource?: string// 578
  TradeInputDevice?: string// 579
  OrderInputDevice?: string// 821
  Currency?: string// 15
  ComplianceID?: string// 376
  SolicitedFlag?: boolean// 377
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  CustOrderCapacity?: number// 582
  OrdType?: string// 40
  ExecInst?: string// 18
  TransBkdTime?: Date// 483
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TimeBracket?: string// 943
  CommissionData: ICommissionData
  GrossTradeAmt?: number// 381
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
  SettlCurrency?: string// 120
  SettlCurrFxRate?: number// 155
  SettlCurrFxRateCalc?: string// 156
  PositionEffect?: string// 77
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  SideMultiLegReportingType?: number// 752
  ContAmtGrp: IContAmtGrp
  Stipulations: IStipulations
  MiscFeesGrp: IMiscFeesGrp
  ExchangeRule?: string// 825
  TradeAllocIndicator?: number// 826
  PreallocMethod?: string// 591
  AllocID?: string// 70
  TrdAllocGrp: ITrdAllocGrp
}
