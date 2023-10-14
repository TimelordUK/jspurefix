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
  Side: string// [1] 54 (String)
  Parties?: IParties[]// [2] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [3] 1 (String)
  AcctIDSource?: number// [4] 660 (Int)
  AccountType?: number// [5] 581 (Int)
  ProcessCode?: string// [6] 81 (String)
  OddLot?: boolean// [7] 575 (Boolean)
  ClrInstGrp?: IClrInstGrp[]// [8] ClearingInstruction.577
  TradeInputSource?: string// [9] 578 (String)
  TradeInputDevice?: string// [10] 579 (String)
  ComplianceID?: string// [11] 376 (String)
  SolicitedFlag?: boolean// [12] 377 (Boolean)
  CustOrderCapacity?: number// [13] 582 (Int)
  TradingSessionID?: string// [14] 336 (String)
  TradingSessionSubID?: string// [15] 625 (String)
  TimeBracket?: string// [16] 943 (String)
  NetGrossInd?: number// [17] 430 (Int)
  SideCurrency?: string// [18] 1154 (String)
  SideSettlCurrency?: string// [19] 1155 (String)
  CommissionData?: ICommissionData// [20] Commission.12, CommType.13 .. FundRenewWaiv.497
  NumDaysInterest?: number// [21] 157 (Int)
  ExDate?: Date// [22] 230 (LocalDate)
  AccruedInterestRate?: number// [23] 158 (Float)
  AccruedInterestAmt?: number// [24] 159 (Float)
  InterestAtMaturity?: number// [25] 738 (Float)
  EndAccruedInterestAmt?: number// [26] 920 (Float)
  StartCash?: number// [27] 921 (Float)
  EndCash?: number// [28] 922 (Float)
  Concession?: number// [29] 238 (Float)
  TotalTakedown?: number// [30] 237 (Float)
  NetMoney?: number// [31] 118 (Float)
  SettlCurrAmt?: number// [32] 119 (Float)
  SettlCurrFxRate?: number// [33] 155 (Float)
  SettlCurrFxRateCalc?: string// [34] 156 (String)
  PositionEffect?: string// [35] 77 (String)
  SideMultiLegReportingType?: number// [36] 752 (Int)
  ContAmtGrp?: IContAmtGrp[]// [37] ContAmtType.519, ContAmtValue.520, ContAmtCurr.521
  Stipulations?: IStipulations[]// [38] StipulationType.233, StipulationValue.234
  MiscFeesGrp?: IMiscFeesGrp[]// [39] MiscFeeAmt.137, MiscFeeCurr.138 .. MiscFeeBasis.891
  ExchangeRule?: string// [40] 825 (String)
  SettlDetails?: ISettlDetails[]// [41] SettlObligSource.1164, SettlParties.781 .. SettlPartySubIDType.786
  TradeAllocIndicator?: number// [42] 826 (Int)
  PreallocMethod?: string// [43] 591 (String)
  AllocID?: string// [44] 70 (String)
  TrdAllocGrp?: ITrdAllocGrp[]// [45] AllocAccount.79, AllocAcctIDSource.661 .. AllocClearingFeeIndicator.1136
  SideGrossTradeAmt?: number// [46] 1072 (Float)
  AggressorIndicator?: boolean// [47] 1057 (Boolean)
  SideLastQty?: number// [48] 1009 (Int)
  SideTradeReportID?: string// [49] 1005 (String)
  SideFillStationCd?: string// [50] 1006 (String)
  SideReasonCd?: string// [51] 1007 (String)
  RptSeq?: number// [52] 83 (Int)
  SideTrdSubTyp?: number// [53] 1008 (Int)
  SideTrdRegTS?: ISideTrdRegTS[]// [54] SideTrdRegTimestamp.1012, SideTrdRegTimestampType.1013, SideTrdRegTimestampSrc.1014
  SideExecID?: string// [55] 1427 (String)
  OrderDelay?: number// [56] 1428 (Int)
  OrderDelayUnit?: number// [57] 1429 (Int)
  OrderCategory?: string// [58] 1115 (String)
  TradeReportOrderDetail?: ITradeReportOrderDetail// [59] OrderID.37, SecondaryOrderID.198 .. BookingType.775
}
