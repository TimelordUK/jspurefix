import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IQuotSetAckGrp } from './set/quot_set_ack_grp'
import { IStandardTrailer } from './set/standard_trailer'
import { ITargetParties } from './set/target_parties'

/*
***************************************************************
* Mass Quote Acknowledgement is used as the application level *
* response to a Mass Quote message.                           *
***************************************************************
*/
export interface IMassQuoteAcknowledgement {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID?: string// [2] 131 (String)
  QuoteID?: string// [3] 117 (String)
  QuoteStatus: number// [4] 297 (Int)
  QuoteRejectReason?: number// [5] 300 (Int)
  QuoteResponseLevel?: number// [6] 301 (Int)
  QuoteType?: number// [7] 537 (Int)
  QuoteCancelType?: number// [8] 298 (Int)
  Parties?: IParties[]// [9] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [10] 1 (String)
  AcctIDSource?: number// [11] 660 (Int)
  AccountType?: number// [12] 581 (Int)
  Text?: string// [13] 58 (String)
  EncodedTextLen?: number// [14] 354 (Int)
  EncodedText?: Buffer// [15] 355 (RawData)
  QuotSetAckGrp?: IQuotSetAckGrp[]// [16] QuoteSetID.302, UnderlyingSymbol.311 .. QuoteSetValidUntilTime.367
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
  TargetParties?: ITargetParties[]// [18] TargetPartyID.1462, TargetPartyIDSource.1463, TargetPartyRole.1464
}
