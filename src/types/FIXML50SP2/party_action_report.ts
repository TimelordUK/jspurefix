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
  CollRptRejectReason?: number// 2487
  ApplTestMessageIndicator?: string// 2330
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  CopyMsgIndicator?: string// 797
  StandardHeader?: IStandardHeader
  InstrumentScope?: IInstrumentScope
  RequestingPartyGrp?: IRequestingPartyGrp[]
  Parties?: IParties[]
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[]
}
