import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IOrderQtyData } from './set/order_qty_data'
import { IParties } from './set/parties'
import { ICommissionData } from './set/commission_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* The Trade Capture Report message can be:              *
* " Used to report trades between counterparties.       *
* " Can be sent unsolicited between counterparties.     *
* " Sent as a reply to a Trade Capture Report Request.  *
* " Can be used to report unmatched and matched trades. *
*********************************************************
*/
export interface ITradeCaptureReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ExecType: string// [2] 150 (String)
  ExecID?: string// [3] 17 (String)
  ExecRestatementReason?: number// [4] 378 (Int)
  Instrument: IInstrument// [5] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  OrderQtyData?: IOrderQtyData// [6] OrderQty.38, CashOrderQty.152
  LastShares: number// [7] 32 (Float)
  LastPx: number// [8] 31 (Float)
  LastSpotRate?: number// [9] 194 (Float)
  LastForwardPoints?: number// [10] 195 (Float)
  LastMkt?: string// [11] 30 (String)
  TradeDate: Date// [12] 75 (LocalDate)
  TransactTime: Date// [13] 60 (UtcTimestamp)
  SettlmntTyp?: string// [14] 63 (String)
  FutSettDate?: Date// [15] 64 (LocalDate)
  Side: string// [16] 54 (String)
  OrderID: string// [17] 37 (String)
  SecondaryOrderID?: string// [18] 198 (String)
  ClOrdID?: string// [19] 11 (String)
  Parties?: IParties[]// [20] 
  Account?: string// [21] 1 (String)
  ProcessCode?: string// [22] 81 (String)
  Currency?: string// [23] 15 (String)
  ComplianceID?: string// [24] 376 (String)
  SolicitedFlag?: boolean// [25] 377 (Boolean)
  TradingSessionID?: string// [26] 336 (String)
  CommissionData?: ICommissionData// [27] Commission.12, CommType.13
  GrossTradeAmt?: number// [28] 381 (Float)
  NumDaysInterest?: number// [29] 157 (Int)
  AccruedInterestRate?: number// [30] 158 (Float)
  AccruedInterestAmt?: number// [31] 159 (Float)
  NetMoney?: number// [32] 118 (Float)
  SettlCurrAmt?: number// [33] 119 (Float)
  SettlCurrency?: string// [34] 120 (String)
  SettlCurrFxRate?: number// [35] 155 (Float)
  SettlCurrFxRateCalc?: string// [36] 156 (String)
  OpenClose?: string// [37] 77 (String)
  Text?: string// [38] 58 (String)
  EncodedTextLen?: number// [39] 354 (Int)
  EncodedText?: Buffer// [40] 355 (RawData)
  MultiLegReportingType?: string// [41] 442 (String)
  NoMiscFees?: number// [42] 136 (Int)
  MiscFeeAmt?: number// [43] 137 (Float)
  MiscFeeCurr?: string// [44] 138 (String)
  MiscFeeType?: string// [45] 139 (String)
  StandardTrailer: IStandardTrailer// [46] SignatureLength.93, Signature.89, CheckSum.10
}
