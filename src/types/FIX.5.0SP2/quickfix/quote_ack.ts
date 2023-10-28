import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IQuoteAttributeGrp } from './set/quote_attribute_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteID?: string// [2] 117 (String)
  QuoteMsgID?: string// [3] 1166 (String)
  QuoteReqID?: string// [4] 131 (String)
  QuoteType?: number// [5] 537 (Int)
  QuoteCancelType?: number// [6] 298 (Int)
  SecondaryQuoteID?: string// [7] 1751 (String)
  QuoteAckStatus: number// [8] 1865 (Int)
  QuoteRejectReason?: number// [9] 300 (Int)
  RejectText?: string// [10] 1328 (String)
  EncodedRejectTextLen?: number// [11] 1664 (Length)
  EncodedRejectText?: Buffer// [12] 1665 (RawData)
  Parties?: IParties// [13] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  QuoteAttributeGrp?: IQuoteAttributeGrp// [14] NoQuoteAttributes.2706, QuoteAttributeType.2707, QuoteAttributeValue.2708
  Text?: string// [15] 58 (String)
  EncodedTextLen?: number// [16] 354 (Length)
  EncodedText?: Buffer// [17] 355 (RawData)
  StandardTrailer: IStandardTrailer// [18] SignatureLength.93, Signature.89, CheckSum.10
}
