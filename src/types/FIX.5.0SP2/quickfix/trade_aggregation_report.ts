import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradeAggregationReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradeAggregationReportID: string// [2] 2792 (String)
  TradeAggregationRequestID?: string// [3] 2786 (String)
  TradeAggregationRequestStatus: number// [4] 2790 (Int)
  TradeID?: string// [5] 1003 (String)
  TradeAggregationRejectReason?: number// [6] 2791 (Int)
  AggregatedQty?: number// [7] 2789 (Float)
  AvgPx?: number// [8] 6 (Float)
  AvgSpotRate?: number// [9] 2793 (Float)
  AvgForwardPoints?: number// [10] 2794 (Float)
  SettlDate?: Date// [11] 64 (LocalDate)
  Instrument?: IInstrument// [12] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  Side?: string// [13] 54 (String)
  RejectText?: string// [14] 1328 (String)
  EncodedRejectTextLen?: number// [15] 1664 (Length)
  EncodedRejectText?: Buffer// [16] 1665 (RawData)
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
}
