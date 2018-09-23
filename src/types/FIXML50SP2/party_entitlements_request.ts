import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRequestedPartyRoleGrp } from './set/requested_party_role_grp'
import { IEntitlementTypeGrp } from './set/entitlement_type_grp'
import { IInstrumentScopeGrp } from './set/instrument_scope_grp'
import { IMarketSegmentScopeGrp } from './set/market_segment_scope_grp'

/*
************************************************************
* PartyEntitlementsRequest can be found in Volume 3 of the *
*                                                          *
* specification                                            *
************************************************************
*/
export interface IPartyEntitlementsRequest {
  MDStatisticReqID?: string// 2452
  SubscriptionRequestType?: string// 263
  MDStatisticStatus?: number// 2477
  EntitlementPlatform?: string// 1784
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  RequestingPartyGrp?: IRequestingPartyGrp[]
  Parties?: IParties[]
  RequestedPartyRoleGrp?: IRequestedPartyRoleGrp[]
  EntitlementTypeGrp?: IEntitlementTypeGrp[]
  InstrumentScopeGrp?: IInstrumentScopeGrp[]
  MarketSegmentScopeGrp?: IMarketSegmentScopeGrp[]
}
