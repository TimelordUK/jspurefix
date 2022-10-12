import { IStandardHeader } from './set/standard_header'
import { INewsNoRoutingIDs } from './set/news_no_routing_i_ds'
import { INewsNoRelatedSym } from './set/news_no_related_sym'
import { INewsLinesOfText } from './set/news_lines_of_text'
import { IStandardTrailer } from './set/standard_trailer'

export interface INews {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrigTime?: Date// [2] 42 (UtcTimestamp)
  Urgency?: string// [3] 61 (String)
  Headline: string// [4] 148 (String)
  EncodedHeadlineLen?: number// [5] 358 (Length)
  EncodedHeadline?: Buffer// [6] 359 (RawData)
  NoRoutingIDs?: INewsNoRoutingIDs[]// [7] RoutingType.216, RoutingID.217
  NoRelatedSym?: INewsNoRelatedSym[]// [8] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  LinesOfText: INewsLinesOfText[]// [9] Text.58, EncodedTextLen.354, EncodedText.355
  URLLink?: string// [10] 149 (String)
  RawDataLength?: number// [11] 95 (Length)
  RawData?: Buffer// [12] 96 (RawData)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
