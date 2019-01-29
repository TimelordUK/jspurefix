import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStipulations } from './set/stipulations'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* In some markets it is the practice to request quotes from  *
* brokers prior to placement of an order. The quote request  *
* message is used for this purpose. This message is commonly *
* referred to as an Request For Quote (RFQ)                  *
**************************************************************
*/
export interface IQuoteRequest {
  StandardHeader: IStandardHeader
  QuoteReqID: string// 131
  NoRelatedSym: number// 146
  Instrument: IInstrument
  PrevClosePx?: number// 140
  QuoteRequestType?: number// 303
  TradingSessionID?: string// 336
  Stipulations?: IStipulations[]
  Side?: string// 54
  OrderQty?: number// 38
  CashOrderQty?: number// 152
  SettlmntTyp?: string// 63
  FutSettDate?: Date// 64
  OrdType?: string// 40
  FutSettDate2?: Date// 193
  OrderQty2?: number// 192
  ExpireTime?: Date// 126
  TransactTime?: Date// 60
  Currency?: number// 15
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  PriceType?: number// 423
  Price?: number// 44
  YieldData?: IYieldData
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
