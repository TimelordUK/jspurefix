import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyDetailsUpdateGrp } from './set/party_details_update_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyDetailsDefinitionRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PartyDetailsListRequestID: string// [2] 1505 (String)
  RequestingPartyGrp?: IRequestingPartyGrp// [3] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  PartyDetailsUpdateGrp?: IPartyDetailsUpdateGrp// [4] NoPartyUpdates.1676, ListUpdateAction.1324 .. PartyDetailStatus.1672
  Text?: string// [5] 58 (String)
  EncodedTextLen?: number// [6] 354 (Length)
  EncodedText?: Buffer// [7] 355 (RawData)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
