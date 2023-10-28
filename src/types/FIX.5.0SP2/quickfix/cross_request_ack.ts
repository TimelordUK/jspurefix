import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface ICrossRequestAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CrossRequestID: string// [2] 2672 (String)
  MarketID?: string// [3] 1301 (String)
  MarketSegmentID?: string// [4] 1300 (String)
  Instrument?: IInstrument// [5] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  OrderQty?: number// [6] 38 (Float)
  ComplianceID?: string// [7] 376 (String)
  ComplianceText?: string// [8] 2404 (String)
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
