import { IStandardHeader } from './set/standard_header'
import { IApplIDRequestAckGrp } from './set/appl_id_request_ack_grp'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

export interface IApplicationMessageRequestAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplResponseID: string// [2] 1353 (String)
  ApplReqID?: string// [3] 1346 (String)
  ApplReqType?: number// [4] 1347 (Int)
  ApplResponseType?: number// [5] 1348 (Int)
  ApplTotalMessageCount?: number// [6] 1349 (Int)
  ApplIDRequestAckGrp?: IApplIDRequestAckGrp// [7] NoApplIDs.1351, RefApplID.1355 .. NestedPartySubIDType.805
  Parties?: IParties// [8] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Text?: string// [9] 58 (String)
  EncodedTextLen?: number// [10] 354 (Length)
  EncodedText?: Buffer// [11] 355 (RawData)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
