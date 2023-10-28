import { IStandardHeader } from './set/standard_header'
import { IApplIDRequestGrp } from './set/appl_id_request_grp'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

export interface IApplicationMessageRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplReqID: string// [2] 1346 (String)
  ApplReqType: number// [3] 1347 (Int)
  ApplIDRequestGrp?: IApplIDRequestGrp// [4] NoApplIDs.1351, RefApplID.1355 .. NestedPartySubIDType.805
  Parties?: IParties// [5] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Length)
  EncodedText?: Buffer// [8] 355 (RawData)
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
