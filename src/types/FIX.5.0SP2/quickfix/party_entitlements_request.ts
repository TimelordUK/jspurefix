import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRequestedPartyRoleGrp } from './set/requested_party_role_grp'
import { IEntitlementTypeGrp } from './set/entitlement_type_grp'
import { IInstrumentScopeGrp } from './set/instrument_scope_grp'
import { IMarketSegmentScopeGrp } from './set/market_segment_scope_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyEntitlementsRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  EntitlementRequestID?: string// [2] 1770 (String)
  SubscriptionRequestType?: string// [3] 263 (String)
  RequestingPartyGrp?: IRequestingPartyGrp// [4] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  Parties?: IParties// [5] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  RequestedPartyRoleGrp?: IRequestedPartyRoleGrp// [6] NoRequestedPartyRoles.1508, RequestedPartyRole.1509, RequestedPartyRoleQualifier.2386
  EntitlementStatus?: number// [7] 1883 (Int)
  EntitlementTypeGrp?: IEntitlementTypeGrp// [8] NoEntitlementTypes.2345, EntitlementType.1775, EntitlementSubType.2402
  EntitlementPlatform?: string// [9] 1784 (String)
  InstrumentScopeGrp?: IInstrumentScopeGrp// [10] NoInstrumentScopes.1656, InstrumentScopeOperator.1535 .. InstrumentScopeSettlType.1557
  MarketSegmentScopeGrp?: IMarketSegmentScopeGrp// [11] NoMarketSegments.1310, MarketID.1301, MarketSegmentID.1300
  Text?: string// [12] 58 (String)
  EncodedTextLen?: number// [13] 354 (Length)
  EncodedText?: Buffer// [14] 355 (RawData)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
