import { IStandardHeader } from './set/standard_header'
import { IInstrumentScope } from './set/instrument_scope'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRelatedPartyDetailGrp } from './set/related_party_detail_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyActionReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  EffectiveBusinessDate?: Date// [2] 2400 (LocalDate)
  PartyActionRequestID?: string// [3] 2328 (String)
  PartyActionReportID: string// [4] 2331 (String)
  PartyActionType: number// [5] 2329 (Int)
  PartyActionResponse: number// [6] 2332 (Int)
  PartyActionRejectReason?: number// [7] 2333 (Int)
  ApplTestMessageIndicator?: boolean// [8] 2330 (Boolean)
  RejectText?: string// [9] 1328 (String)
  EncodedRejectTextLen?: number// [10] 1664 (Length)
  EncodedRejectText?: Buffer// [11] 1665 (RawData)
  MarketID?: string// [12] 1301 (String)
  MarketSegmentID?: string// [13] 1300 (String)
  InstrumentScope?: IInstrumentScope// [14] InstrumentScopeSymbol.1536, InstrumentScopeSymbolSfx.1537 .. InstrumentScopeSettlType.1557
  RequestingPartyGrp?: IRequestingPartyGrp// [15] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  Parties?: IParties// [16] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp// [17] NoRelatedPartyDetailID.1562, RelatedPartyDetailID.1563 .. PartyRelationship.1515
  TransactTime?: Date// [18] 60 (UtcTimestamp)
  Text?: string// [19] 58 (String)
  EncodedTextLen?: number// [20] 354 (Length)
  EncodedText?: Buffer// [21] 355 (RawData)
  CopyMsgIndicator?: boolean// [22] 797 (Boolean)
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
}
