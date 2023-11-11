import { IStandardHeader } from './set/standard_header'
import { IInstrumentScope } from './set/instrument_scope'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRelatedPartyDetailGrp } from './set/related_party_detail_grp'

/*
*****************************************************
* PartyActionReport can be found in Volume 3 of the *
*                                                   *
* specification                                     *
*****************************************************
*/
export interface IPartyActionReport {
  EffectiveBusinessDate?: Date// [2] 2400 (LocalDate)
  PartyActionRequestID?: string// [2] 2328 (String)
  PartyActionReportID: string// [2] 2331 (String)
  PartyActionType: number// [2] 2329 (Int)
  PartyActionResponse: number// [2] 2332 (Int)
  PartyActionRejectReason?: number// [2] 2333 (Int)
  ApplTestMessageIndicator?: boolean// [2] 2330 (Boolean)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  CopyMsgIndicator?: boolean// [2] 797 (Boolean)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  InstrumentScope?: IInstrumentScope// [2] Sym.1536, Sfx.1537 .. SettlTyp.63
  RequestingPartyGrp?: IRequestingPartyGrp[]// [3] ID.1658, Src.1659 .. Qual.2338
  Parties?: IParties[]// [4] ID.448, Src.447 .. Qual.2376
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[]// [5] ID.1563, Src.1564 .. Qual.1675
}
