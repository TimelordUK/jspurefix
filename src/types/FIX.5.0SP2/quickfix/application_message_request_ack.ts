import { IStandardHeader } from './set/standard_header'
import { IApplIDRequestAckGrp } from './set/appl_id_request_ack_grp'
import { IStandardTrailer } from './set/standard_trailer'
import { IParties } from './set/parties'

/*
****************************************************************
* This message is used to acknowledge an Application Message   *
* Request providing a status on the request (i.e. whether      *
* successful or not). This message does not provide the actual *
* content of the messages to be resent.                        *
****************************************************************
*/
export interface IApplicationMessageRequestAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplResponseID: string// [2] 1353 (String)
  ApplReqID?: string// [3] 1346 (String)
  ApplReqType?: number// [4] 1347 (Int)
  ApplResponseType?: number// [5] 1348 (Int)
  ApplTotalMessageCount?: number// [6] 1349 (Int)
  ApplIDRequestAckGrp?: IApplIDRequestAckGrp[]// [7] RefApplID.1355, ApplBegSeqNum.1182 .. RefApplReqID.1433
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Int)
  EncodedText?: Buffer// [10] 355 (RawData)
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
  Parties?: IParties[]// [12] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
}
