import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Security List Request message is used to return a list *
* of securities from the counterparty that match criteria    *
* provided on the request                                    *
**************************************************************
*/
export interface ISecurityListRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  SecurityReqID: string// [2] 320 (String)
  Instrument?: IInstrument// [3] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Currency?: string// [4] 15 (String)
  Text?: string// [5] 58 (String)
  EncodedTextLen?: number// [6] 354 (Int)
  EncodedText?: Buffer// [7] 355 (RawData)
  TradingSessionID?: string// [8] 336 (String)
  SubscriptionRequestType?: string// [9] 263 (String)
  StandardTrailer: IStandardTrailer// [10] SignatureLength.93, Signature.89, CheckSum.10
}
