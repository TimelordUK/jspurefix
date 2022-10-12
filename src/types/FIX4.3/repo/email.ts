import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The email message is similar to the format and purpose of *
* the News message, however, it is intended for private use *
* between two parties.                                      *
*************************************************************
*/
export interface IEmail {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  EmailThreadID: string// [2] 164 (String)
  EmailType: string// [3] 94 (String)
  OrigTime?: Date// [4] 42 (UtcTimestamp)
  Subject: string// [5] 147 (String)
  EncodedSubjectLen?: number// [6] 356 (Int)
  EncodedSubject?: Buffer// [7] 357 (RawData)
  NoRoutingIDs?: number// [8] 215 (Int)
  RoutingType?: number// [9] 216 (Int)
  RoutingID?: string// [10] 217 (String)
  NoRelatedSym?: number// [11] 146 (Int)
  Instrument?: IInstrument// [12] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  OrderID?: string// [13] 37 (String)
  ClOrdID?: string// [14] 11 (String)
  LinesOfText: number// [15] 33 (Int)
  Text: string// [16] 58 (String)
  EncodedTextLen?: number// [17] 354 (Int)
  EncodedText?: Buffer// [18] 355 (RawData)
  RawDataLength?: number// [19] 95 (Int)
  RawData?: Buffer// [20] 96 (RawData)
  StandardTrailer: IStandardTrailer// [21] SignatureLength.93, Signature.89, CheckSum.10
}
