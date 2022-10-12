import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The news message is a general free format message between *
* the broker and institution.                               *
*************************************************************
*/
export interface INews {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  OrigTime?: Date// [2] 42 (UtcTimestamp)
  Urgency?: string// [3] 61 (String)
  Headline: string// [4] 148 (String)
  EncodedHeadlineLen?: number// [5] 358 (Int)
  EncodedHeadline?: Buffer// [6] 359 (RawData)
  NoRoutingIDs?: number// [7] 215 (Int)
  RoutingType?: number// [8] 216 (Int)
  RoutingID?: string// [9] 217 (String)
  NoRelatedSym?: number// [10] 146 (Int)
  Instrument?: IInstrument// [11] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  LinesOfText: number// [12] 33 (Int)
  Text: string// [13] 58 (String)
  EncodedTextLen?: number// [14] 354 (Int)
  EncodedText?: Buffer// [15] 355 (RawData)
  URLLink?: string// [16] 149 (String)
  RawDataLength?: number// [17] 95 (Int)
  RawData?: Buffer// [18] 96 (RawData)
  StandardTrailer: IStandardTrailer// [19] SignatureLength.93, Signature.89, CheckSum.10
}
