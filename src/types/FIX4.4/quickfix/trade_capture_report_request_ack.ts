import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradeCaptureReportRequestAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradeRequestID: string// [2] 568 (String)
  TradeRequestType: number// [3] 569 (Int)
  SubscriptionRequestType?: string// [4] 263 (String)
  TotNumTradeReports?: number// [5] 748 (Int)
  TradeRequestResult: number// [6] 749 (Int)
  TradeRequestStatus: number// [7] 750 (Int)
  Instrument?: IInstrument// [8] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp?: IUndInstrmtGrp// [9] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp// [10] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  MultiLegReportingType?: string// [11] 442 (String)
  ResponseTransportType?: number// [12] 725 (Int)
  ResponseDestination?: string// [13] 726 (String)
  Text?: string// [14] 58 (String)
  EncodedTextLen?: number// [15] 354 (Length)
  EncodedText?: Buffer// [16] 355 (RawData)
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
}
