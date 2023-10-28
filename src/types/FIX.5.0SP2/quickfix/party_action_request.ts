import { IStandardHeader } from './set/standard_header'
import { IInstrumentScope } from './set/instrument_scope'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRelatedPartyDetailGrp } from './set/related_party_detail_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyActionRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PartyActionRequestID: string// [2] 2328 (String)
  PartyActionType: number// [3] 2329 (Int)
  ApplTestMessageIndicator?: boolean// [4] 2330 (Boolean)
  MarketID?: string// [5] 1301 (String)
  MarketSegmentID?: string// [6] 1300 (String)
  InstrumentScope?: IInstrumentScope// [7] InstrumentScopeSymbol.1536, InstrumentScopeSymbolSfx.1537 .. InstrumentScopeSettlType.1557
  RequestingPartyGrp?: IRequestingPartyGrp// [8] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  Parties?: IParties// [9] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp// [10] NoRelatedPartyDetailID.1562, RelatedPartyDetailID.1563 .. PartyRelationship.1515
  TransactTime?: Date// [11] 60 (UtcTimestamp)
  Text?: string// [12] 58 (String)
  EncodedTextLen?: number// [13] 354 (Length)
  EncodedText?: Buffer// [14] 355 (RawData)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
