import { IParties } from './parties'
import { IClrInstGrp } from './clr_inst_grp'
import { ICommissionData } from './commission_data'
import { IContAmtGrp } from './cont_amt_grp'
import { IStipulations } from './stipulations'
import { IMiscFeesGrp } from './misc_fees_grp'
import { ITrdAllocGrp } from './trd_alloc_grp'

export interface ITrdCapRptSideGrpNoSides {
  Side: string// [1] 54 (String)
  OrderID: string// [2] 37 (String)
  SecondaryOrderID?: string// [3] 198 (String)
  ClOrdID?: string// [4] 11 (String)
  SecondaryClOrdID?: string// [5] 526 (String)
  ListID?: string// [6] 66 (String)
  Parties: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [8] 1 (String)
  AcctIDSource?: number// [9] 660 (Int)
  AccountType?: number// [10] 581 (Int)
  ProcessCode?: string// [11] 81 (String)
  OddLot?: boolean// [12] 575 (Boolean)
  ClrInstGrp: IClrInstGrp// [13] NoClearingInstructions.576, ClearingInstruction.577
  TradeInputSource?: string// [14] 578 (String)
  TradeInputDevice?: string// [15] 579 (String)
  OrderInputDevice?: string// [16] 821 (String)
  Currency?: string// [17] 15 (String)
  ComplianceID?: string// [18] 376 (String)
  SolicitedFlag?: boolean// [19] 377 (Boolean)
  OrderCapacity?: string// [20] 528 (String)
  OrderRestrictions?: string// [21] 529 (String)
  CustOrderCapacity?: number// [22] 582 (Int)
  OrdType?: string// [23] 40 (String)
  ExecInst?: string// [24] 18 (String)
  TransBkdTime?: Date// [25] 483 (UtcTimestamp)
  TradingSessionID?: string// [26] 336 (String)
  TradingSessionSubID?: string// [27] 625 (String)
  TimeBracket?: string// [28] 943 (String)
  CommissionData: ICommissionData// [29] Commission.12, CommType.13 .. FundRenewWaiv.497
  GrossTradeAmt?: number// [30] 381 (Float)
  NumDaysInterest?: number// [31] 157 (Int)
  ExDate?: Date// [32] 230 (LocalDate)
  AccruedInterestRate?: number// [33] 158 (Float)
  AccruedInterestAmt?: number// [34] 159 (Float)
  InterestAtMaturity?: number// [35] 738 (Float)
  EndAccruedInterestAmt?: number// [36] 920 (Float)
  StartCash?: number// [37] 921 (Float)
  EndCash?: number// [38] 922 (Float)
  Concession?: number// [39] 238 (Float)
  TotalTakedown?: number// [40] 237 (Float)
  NetMoney?: number// [41] 118 (Float)
  SettlCurrAmt?: number// [42] 119 (Float)
  SettlCurrency?: string// [43] 120 (String)
  SettlCurrFxRate?: number// [44] 155 (Float)
  SettlCurrFxRateCalc?: string// [45] 156 (String)
  PositionEffect?: string// [46] 77 (String)
  Text?: string// [47] 58 (String)
  EncodedTextLen?: number// [48] 354 (Length)
  EncodedText?: Buffer// [49] 355 (RawData)
  SideMultiLegReportingType?: number// [50] 752 (Int)
  ContAmtGrp: IContAmtGrp// [51] NoContAmts.518, ContAmtType.519 .. ContAmtCurr.521
  Stipulations: IStipulations// [52] NoStipulations.232, StipulationType.233, StipulationValue.234
  MiscFeesGrp: IMiscFeesGrp// [53] NoMiscFees.136, MiscFeeAmt.137 .. MiscFeeBasis.891
  ExchangeRule?: string// [54] 825 (String)
  TradeAllocIndicator?: number// [55] 826 (Int)
  PreallocMethod?: string// [56] 591 (String)
  AllocID?: string// [57] 70 (String)
  TrdAllocGrp: ITrdAllocGrp// [58] NoAllocs.78, AllocAccount.79 .. AllocQty.80
}
