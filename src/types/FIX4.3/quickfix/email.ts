import { IStandardHeader } from './set/standard_header'
import { IEmailNoRoutingIDs } from './set/email_no_routing_i_ds'
import { IEmailNoRelatedSym } from './set/email_no_related_sym'
import { IEmailLinesOfText } from './set/email_lines_of_text'
import { IStandardTrailer } from './set/standard_trailer'

export interface IEmail {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  EmailThreadID: string// [2] 164 (String)
  EmailType: string// [3] 94 (String)
  OrigTime?: Date// [4] 42 (UtcTimestamp)
  Subject: string// [5] 147 (String)
  EncodedSubjectLen?: number// [6] 356 (Length)
  EncodedSubject?: Buffer// [7] 357 (RawData)
  NoRoutingIDs?: IEmailNoRoutingIDs[]// [8] RoutingType.216, RoutingID.217
  NoRelatedSym?: IEmailNoRelatedSym[]// [9] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  OrderID?: string// [10] 37 (String)
  ClOrdID?: string// [11] 11 (String)
  LinesOfText: IEmailLinesOfText[]// [12] Text.58, EncodedTextLen.354, EncodedText.355
  RawDataLength?: number// [13] 95 (Length)
  RawData?: Buffer// [14] 96 (RawData)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
