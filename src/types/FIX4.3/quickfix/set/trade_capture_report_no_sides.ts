import { IParties } from './parties'
import { ITradeCaptureReportNoSidesNoClearingInstructions } from './trade_capture_report_no_sides_no_clearing_instructions'
import { ICommissionData } from './commission_data'
import { ITradeCaptureReportNoSidesNoContAmts } from './trade_capture_report_no_sides_no_cont_amts'
import { ITradeCaptureReportNoSidesNoMiscFees } from './trade_capture_report_no_sides_no_misc_fees'

export interface ITradeCaptureReportNoSides {
  Side: string// [1] 54 (String)
  OrderID: string// [2] 37 (String)
  SecondaryOrderID?: string// [3] 198 (String)
  ClOrdID?: string// [4] 11 (String)
  Parties: IParties// [5] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Account?: string// [6] 1 (String)
  AccountType?: number// [7] 581 (Int)
  ProcessCode?: string// [8] 81 (String)
  OddLot?: boolean// [9] 575 (Boolean)
  NoClearingInstructions?: ITradeCaptureReportNoSidesNoClearingInstructions[]// [10] ClearingInstruction.577
  ClearingFeeIndicator?: string// [11] 635 (String)
  TradeInputSource?: string// [12] 578 (String)
  TradeInputDevice?: string// [13] 579 (String)
  Currency?: string// [14] 15 (String)
  ComplianceID?: string// [15] 376 (String)
  SolicitedFlag?: boolean// [16] 377 (Boolean)
  OrderCapacity?: string// [17] 528 (String)
  OrderRestrictions?: string// [18] 529 (String)
  CustOrderCapacity?: number// [19] 582 (Int)
  TransBkdTime?: Date// [20] 483 (UtcTimestamp)
  TradingSessionID?: string// [21] 336 (String)
  TradingSessionSubID?: string// [22] 625 (String)
  CommissionData: ICommissionData// [23] Commission.12, CommType.13 .. FundRenewWaiv.497
  GrossTradeAmt?: number// [24] 381 (Float)
  NumDaysInterest?: number// [25] 157 (Int)
  ExDate?: string// [26] 230 (String)
  AccruedInterestRate?: number// [27] 158 (Float)
  AccruedInterestAmt?: number// [28] 159 (Float)
  Concession?: number// [29] 238 (Float)
  TotalTakedown?: number// [30] 237 (Float)
  NetMoney?: number// [31] 118 (Float)
  SettlCurrAmt?: number// [32] 119 (Float)
  SettlCurrency?: string// [33] 120 (String)
  SettlCurrFxRate?: number// [34] 155 (Float)
  SettlCurrFxRateCalc?: string// [35] 156 (String)
  PositionEffect?: string// [36] 77 (String)
  Text?: string// [37] 58 (String)
  EncodedTextLen?: number// [38] 354 (Length)
  EncodedText?: Buffer// [39] 355 (RawData)
  MultiLegReportingType?: string// [40] 442 (String)
  NoContAmts?: ITradeCaptureReportNoSidesNoContAmts[]// [41] ContAmtType.519, ContAmtValue.520, ContAmtCurr.521
  NoMiscFees?: ITradeCaptureReportNoSidesNoMiscFees[]// [42] MiscFeeAmt.137, MiscFeeCurr.138, MiscFeeType.139
}
