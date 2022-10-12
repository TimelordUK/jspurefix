import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStipulations } from './set/stipulations'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
************************************************************
* The Quote Request Reject message is used to reject Quote *
* Request messages for all quoting models.                 *
************************************************************
*/
export interface IQuoteRequestReject {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  QuoteReqID: string// [2] 131 (String)
  NoRelatedSym: number// [3] 146 (Int)
  Instrument: IInstrument// [4] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  PrevClosePx?: number// [5] 140 (Float)
  QuoteRequestType?: number// [6] 303 (Int)
  TradingSessionID?: string// [7] 336 (String)
  Stipulations?: IStipulations[]// [8] 
  Side?: string// [9] 54 (String)
  OrderQty?: number// [10] 38 (Float)
  CashOrderQty?: number// [11] 152 (Float)
  SettlmntTyp?: string// [12] 63 (String)
  FutSettDate?: Date// [13] 64 (LocalDate)
  OrdType?: string// [14] 40 (String)
  FutSettDate2?: Date// [15] 193 (LocalDate)
  OrderQty2?: number// [16] 192 (Float)
  ExpireTime?: Date// [17] 126 (UtcTimestamp)
  TransactTime?: Date// [18] 60 (UtcTimestamp)
  Currency?: string// [19] 15 (String)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [20] SpreadToBenchmark.218
  PriceType?: number// [21] 423 (Int)
  Price?: number// [22] 44 (Float)
  YieldData?: IYieldData// [23] 
  Text?: string// [24] 58 (String)
  EncodedTextLen?: number// [25] 354 (Int)
  EncodedText?: Buffer// [26] 355 (RawData)
  StandardTrailer: IStandardTrailer// [27] SignatureLength.93, Signature.89, CheckSum.10
}
