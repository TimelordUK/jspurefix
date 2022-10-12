import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Trade Capture Report can be used to:                   *
* " Request one or more trade capture reports based upon     *
* selection criteria provided on the trade capture report    *
* request                                                    *
* " Subscribe for trade capture reports based upon selection *
* criteria provided on the trade capture report request.     *
**************************************************************
*/
export interface ITradeCaptureReportRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SubscriptionRequestType?: string// [2] 263 (String)
  ExecID?: string// [3] 17 (String)
  OrderID?: string// [4] 37 (String)
  ClOrdID?: string// [5] 11 (String)
  Parties?: IParties[]// [6] 
  Instrument?: IInstrument// [7] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  TradeDate?: Date// [8] 75 (LocalDate)
  TransactTime?: Date// [9] 60 (UtcTimestamp)
  Side?: string// [10] 54 (String)
  Text?: string// [11] 58 (String)
  EncodedTextLen?: number// [12] 354 (Int)
  EncodedText?: Buffer// [13] 355 (RawData)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
