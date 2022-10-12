import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { ITradeCaptureReportRequestNoDates } from './set/trade_capture_report_request_no_dates'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradeCaptureReportRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradeRequestID: string// [2] 568 (String)
  TradeRequestType: number// [3] 569 (Int)
  SubscriptionRequestType?: string// [4] 263 (String)
  ExecID?: string// [5] 17 (String)
  OrderID?: string// [6] 37 (String)
  ClOrdID?: string// [7] 11 (String)
  MatchStatus?: string// [8] 573 (String)
  Parties?: IParties// [9] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  Instrument?: IInstrument// [10] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  NoDates?: ITradeCaptureReportRequestNoDates[]// [11] TradeDate.75, TransactTime.60
  Side?: string// [12] 54 (String)
  Text?: string// [13] 58 (String)
  EncodedTextLen?: number// [14] 354 (Length)
  EncodedText?: Buffer// [15] 355 (RawData)
  TradeInputSource?: string// [16] 578 (String)
  TradeInputDevice?: string// [17] 579 (String)
  StandardTrailer: IStandardTrailer// [18] SignatureLength.93, Signature.89, CheckSum.10
}
