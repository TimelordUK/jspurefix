import { IStandardHeader } from './set/standard_header'
import { IInstrumentScope } from './set/instrument_scope'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRelatedPartyDetailGrp } from './set/related_party_detail_grp'

/*
******************************************************
* PartyActionRequest can be found in Volume 3 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface IPartyActionRequest {
  PartyActionRequestID: string// [2] 2328 (String)
  PartyActionType: number// [2] 2329 (Int)
  ApplTestMessageIndicator?: boolean// [2] 2330 (Boolean)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  InstrumentScope?: IInstrumentScope// [2] Sym.1536, Sfx.1537 .. SettlTyp.63
  RequestingPartyGrp?: IRequestingPartyGrp[]// [3] ID.1658, Src.1659 .. Qual.2338
  Parties?: IParties[]// [4] ID.448, Src.447 .. Qual.2376
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[]// [5] ID.1563, Src.1564 .. Qual.1675
}
