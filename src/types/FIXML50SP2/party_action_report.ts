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
  EffectiveBusinessDate?: Date// 2400
  PartyActionRequestID?: string// 2328
  PartyActionReportID: string// 2331
  PartyActionType: number// 2329
  PartyActionResponse: number// 2332
  PartyActionRejectReason?: number// 2333
  ApplTestMessageIndicator?: boolean// 2330
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  CopyMsgIndicator?: boolean// 797
  StandardHeader?: IStandardHeader
  InstrumentScope?: IInstrumentScope
  RequestingPartyGrp?: IRequestingPartyGrp[]
  Parties?: IParties[]
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[]
}
