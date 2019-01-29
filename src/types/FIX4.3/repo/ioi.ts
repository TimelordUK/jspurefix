import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* Indication of interest messages are used to market          *
* merchandise which the broker is buying or selling in either *
* a proprietary or agency capacity.                           *
***************************************************************
*/
export interface IIOI {
  StandardHeader: IStandardHeader
  IOIid: string// 23
  IOITransType: string// 28
  IOIRefID?: string// 26
  Instrument: IInstrument
  Side: string// 54
  IOIShares: string// 27
  PriceType?: number// 423
  Price?: number// 44
  Currency?: number// 15
  ValidUntilTime?: Date// 62
  IOIQltyInd?: string// 25
  IOINaturalFlag?: boolean// 130
  NoIOIQualifiers?: number// 199
  IOIQualifier?: string// 104
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TransactTime?: Date// 60
  URLLink?: string// 149
  NoRoutingIDs?: number// 215
  RoutingType?: number// 216
  RoutingID?: string// 217
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  Benchmark?: string// 219
  StandardTrailer: IStandardTrailer
}
