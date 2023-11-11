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
  EntitlementRequestID?: string// [2] 1770 (String)
  SubscriptionRequestType?: string// [2] 263 (String)
  EntitlementStatus?: number// [2] 1883 (Int)
  EntitlementPlatform?: string// [2] 1784 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RequestingPartyGrp?: IRequestingPartyGrp[]// [2] ID.1658, Src.1659 .. Qual.2338
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  RequestedPartyRoleGrp?: IRequestedPartyRoleGrp[]// [4] R.1509, Qual.2386
  EntitlementTypeGrp?: IEntitlementTypeGrp[]// [5] Typ.139, SubTyp.762
  InstrumentScopeGrp?: IInstrumentScopeGrp[]// [6] Oper.1535, Sym.1536 .. SettlTyp.63
  MarketSegmentScopeGrp?: IMarketSegmentScopeGrp[]// [7] MktID.1301, MktSegID.1300
}
