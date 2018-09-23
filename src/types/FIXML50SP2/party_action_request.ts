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
  PartyActionRequestID: string// 2328
  PartyActionType: number// 2329
  ApplTestMessageIndicator?: string// 2330
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  InstrumentScope?: IInstrumentScope
  RequestingPartyGrp?: IRequestingPartyGrp[]
  Parties?: IParties[]
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[]
}
