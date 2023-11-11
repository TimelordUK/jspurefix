import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyDetailAckGrp } from './set/party_detail_ack_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyDetailsDefinitionRequestAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PartyDetailsListRequestID: string// [2] 1505 (String)
  PartyDetailRequestStatus: number// [3] 1878 (Int)
  PartyDetailRequestResult?: number// [4] 1877 (Int)
  RequestingPartyGrp?: IRequestingPartyGrp// [5] NoRequestingPartyIDs.1657, RequestingPartyID.1658 .. RequestingPartySubIDType.1663
  PartyDetailAckGrp?: IPartyDetailAckGrp// [6] NoPartyUpdates.1676, ListUpdateAction.1324 .. PartyDetailStatus.1672
  Text?: string// [7] 58 (String)
  EncodedTextLen?: number// [8] 354 (Length)
  EncodedText?: Buffer// [9] 355 (RawData)
  StandardTrailer: IStandardTrailer// [10] SignatureLength.93, Signature.89, CheckSum.10
}
