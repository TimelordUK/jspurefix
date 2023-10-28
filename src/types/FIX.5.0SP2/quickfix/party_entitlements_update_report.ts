import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyEntitlementUpdateGrp } from './set/party_entitlement_update_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyEntitlementsUpdateReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  EntitlementReportID: string// [3] 1771 (String)
  EntitlementRequestID?: string// [4] 1770 (String)
  TotNoParties?: number// [5] 1512 (Int)
  LastFragment?: boolean// [6] 893 (Boolean)
  RequestingPartyGrp?: IRequestingPartyGrp// [7] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  PartyEntitlementUpdateGrp?: IPartyEntitlementUpdateGrp// [8] NoPartyEntitlements.1772, ListUpdateAction.1324 .. EntitlementRefID.1885
  TransactTime?: Date// [9] 60 (UtcTimestamp)
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Length)
  EncodedText?: Buffer// [12] 355 (RawData)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
