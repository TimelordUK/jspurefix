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
  StandardHeader: IStandardHeader
  ExecType: string// 150
  ExecID?: string// 17
  ExecRestatementReason?: number// 378
  Instrument: IInstrument
  OrderQtyData?: IOrderQtyData
  LastShares: number// 32
  LastPx: number// 31
  LastSpotRate?: number// 194
  LastForwardPoints?: number// 195
  LastMkt?: string// 30
  TradeDate: Date// 75
  TransactTime: Date// 60
  SettlmntTyp?: string// 63
  FutSettDate?: Date// 64
  Side: string// 54
  OrderID: string// 37
  SecondaryOrderID?: string// 198
  ClOrdID?: string// 11
  Parties?: IParties[]
  Account?: string// 1
  ProcessCode?: string// 81
  Currency?: number// 15
  ComplianceID?: string// 376
  SolicitedFlag?: boolean// 377
  TradingSessionID?: string// 336
  CommissionData?: ICommissionData
  GrossTradeAmt?: number// 381
  NumDaysInterest?: number// 157
  AccruedInterestRate?: number// 158
  AccruedInterestAmt?: number// 159
  NetMoney?: number// 118
  SettlCurrAmt?: number// 119
  SettlCurrency?: number// 120
  SettlCurrFxRate?: number// 155
  SettlCurrFxRateCalc?: string// 156
  OpenClose?: string// 77
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  MultiLegReportingType?: string// 442
  NoMiscFees?: number// 136
  MiscFeeAmt?: number// 137
  MiscFeeCurr?: number// 138
  MiscFeeType?: string// 139
  StandardTrailer: IStandardTrailer
}
