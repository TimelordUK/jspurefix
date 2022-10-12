import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IIOINoIOIQualifiers } from './set/ioi_no_ioi_qualifiers'
import { IIOINoRoutingIDs } from './set/ioi_no_routing_i_ds'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IIOI {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  IOIid: string// [2] 23 (String)
  IOITransType: string// [3] 28 (String)
  IOIRefID?: string// [4] 26 (String)
  Instrument?: IInstrument// [5] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Side: string// [6] 54 (String)
  QuantityType?: number// [7] 465 (Int)
  IOIQty: string// [8] 27 (String)
  PriceType?: number// [9] 423 (Int)
  Price?: number// [10] 44 (Float)
  Currency?: string// [11] 15 (String)
  ValidUntilTime?: Date// [12] 62 (UtcTimestamp)
  IOIQltyInd?: string// [13] 25 (String)
  IOINaturalFlag?: boolean// [14] 130 (Boolean)
  NoIOIQualifiers?: IIOINoIOIQualifiers[]// [15] IOIQualifier.104
  Text?: string// [16] 58 (String)
  EncodedTextLen?: number// [17] 354 (Length)
  EncodedText?: Buffer// [18] 355 (RawData)
  TransactTime?: Date// [19] 60 (UtcTimestamp)
  URLLink?: string// [20] 149 (String)
  NoRoutingIDs?: IIOINoRoutingIDs[]// [21] RoutingType.216, RoutingID.217
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [22] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkCurvePoint.222
  Benchmark?: string// [23] 219 (String)
  StandardTrailer: IStandardTrailer// [24] SignatureLength.93, Signature.89, CheckSum.10
}
