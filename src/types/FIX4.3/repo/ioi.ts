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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  IOIid: string// [2] 23 (String)
  IOITransType: string// [3] 28 (String)
  IOIRefID?: string// [4] 26 (String)
  Instrument: IInstrument// [5] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Side: string// [6] 54 (String)
  IOIShares: string// [7] 27 (String)
  PriceType?: number// [8] 423 (Int)
  Price?: number// [9] 44 (Float)
  Currency?: string// [10] 15 (String)
  ValidUntilTime?: Date// [11] 62 (UtcTimestamp)
  IOIQltyInd?: string// [12] 25 (String)
  IOINaturalFlag?: boolean// [13] 130 (Boolean)
  NoIOIQualifiers?: number// [14] 199 (Int)
  IOIQualifier?: string// [15] 104 (String)
  Text?: string// [16] 58 (String)
  EncodedTextLen?: number// [17] 354 (Int)
  EncodedText?: Buffer// [18] 355 (RawData)
  TransactTime?: Date// [19] 60 (UtcTimestamp)
  URLLink?: string// [20] 149 (String)
  NoRoutingIDs?: number// [21] 215 (Int)
  RoutingType?: number// [22] 216 (Int)
  RoutingID?: string// [23] 217 (String)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [24] SpreadToBenchmark.218
  Benchmark?: string// [25] 219 (String)
  StandardTrailer: IStandardTrailer// [26] SignatureLength.93, Signature.89, CheckSum.10
}
