import { IParties } from './parties'
import { IClrInstGrp } from './clr_inst_grp'
import { ICommissionData } from './commission_data'
import { IContAmtGrp } from './cont_amt_grp'
import { IStipulations } from './stipulations'
import { IMiscFeesGrp } from './misc_fees_grp'
import { ITrdAllocGrp } from './trd_alloc_grp'
import { ISideTrdRegTS } from './side_trd_reg_ts'
import { ISettlDetails } from './settl_details'
import { ITradeReportOrderDetail } from './trade_report_order_detail'

export interface ITrdCapRptSideGrp {
  Side: string// [1] 54 (String)
  SideLastQty?: number// [2] 1009 (Int)
  SideTradeReportID?: string// [3] 1005 (String)
  SideFillStationCd?: string// [4] 1006 (String)
  SideReasonCd?: string// [5] 1007 (String)
  RptSeq?: number// [6] 83 (Int)
  SideTrdSubTyp?: number// [7] 1008 (Int)
  NetGrossInd?: number// [8] 430 (Int)
  SideCurrency?: string// [9] 1154 (String)
  SideSettlCurrency?: string// [10] 1155 (String)
  Parties?: IParties[]// [11] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [12] 1 (String)
  AcctIDSource?: number// [13] 660 (Int)
  AccountType?: number// [14] 581 (Int)
  ProcessCode?: string// [15] 81 (String)
  OddLot?: boolean// [16] 575 (Boolean)
  ClrInstGrp?: IClrInstGrp[]// [17] ClearingInstruction.577
  TradeInputSource?: string// [18] 578 (String)
  TradeInputDevice?: string// [19] 579 (String)
  ComplianceID?: string// [20] 376 (String)
  SolicitedFlag?: boolean// [21] 377 (Boolean)
  CustOrderCapacity?: number// [22] 582 (Int)
  TradingSessionID?: string// [23] 336 (String)
  TradingSessionSubID?: string// [24] 625 (String)
  TimeBracket?: string// [25] 943 (String)
  CommissionData?: ICommissionData// [26] Commission.12, CommType.13 .. FundRenewWaiv.497
  NumDaysInterest?: number// [27] 157 (Int)
  ExDate?: Date// [28] 230 (LocalDate)
  AccruedInterestRate?: number// [29] 158 (Float)
  AccruedInterestAmt?: number// [30] 159 (Float)
  InterestAtMaturity?: number// [31] 738 (Float)
  EndAccruedInterestAmt?: number// [32] 920 (Float)
  StartCash?: number// [33] 921 (Float)
  EndCash?: number// [34] 922 (Float)
  Concession?: number// [35] 238 (Float)
  TotalTakedown?: number// [36] 237 (Float)
  NetMoney?: number// [37] 118 (Float)
  SettlCurrAmt?: number// [38] 119 (Float)
  SettlCurrFxRate?: number// [39] 155 (Float)
  SettlCurrFxRateCalc?: string// [40] 156 (String)
  PositionEffect?: string// [41] 77 (String)
  Text?: string// [42] 58 (String)
  EncodedTextLen?: number// [43] 354 (Int)
  EncodedText?: Buffer// [44] 355 (RawData)
  SideMultiLegReportingType?: number// [45] 752 (Int)
  ContAmtGrp?: IContAmtGrp[]// [46] ContAmtType.519, ContAmtValue.520, ContAmtCurr.521
  Stipulations?: IStipulations[]// [47] StipulationType.233, StipulationValue.234
  MiscFeesGrp?: IMiscFeesGrp[]// [48] MiscFeeAmt.137, MiscFeeCurr.138 .. MiscFeeBasis.891
  ExchangeRule?: string// [49] 825 (String)
  TradeAllocIndicator?: number// [50] 826 (Int)
  PreallocMethod?: string// [51] 591 (String)
  AllocID?: string// [52] 70 (String)
  TrdAllocGrp?: ITrdAllocGrp[]// [53] AllocAccount.79, AllocAcctIDSource.661 .. AllocClearingFeeIndicator.1136
  SideTrdRegTS?: ISideTrdRegTS[]// [54] SideTrdRegTimestamp.1012, SideTrdRegTimestampType.1013, SideTrdRegTimestampSrc.1014
  SettlDetails?: ISettlDetails[]// [55] SettlObligSource.1164, SettlParties.781 .. SettlPartySubIDType.786
  SideGrossTradeAmt?: number// [56] 1072 (Float)
  AggressorIndicator?: boolean// [57] 1057 (Boolean)
  ExchangeSpecialInstructions?: string// [58] 1139 (String)
  OrderCategory?: string// [59] 1115 (String)
  TradeReportOrderDetail?: ITradeReportOrderDetail// [60] OrderID.37, SecondaryOrderID.198 .. BookingType.775
  SideExecID?: string// [61] 1427 (String)
  OrderDelay?: number// [62] 1428 (Int)
  OrderDelayUnit?: number// [63] 1429 (Int)
  SideLiquidityInd?: number// [64] 1444 (Int)
}
