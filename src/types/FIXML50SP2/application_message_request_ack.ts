import { IStandardHeader } from './set/standard_header'
import { IApplIDRequestAckGrp } from './set/appl_id_request_ack_grp'
import { IParties } from './set/parties'

/*
****************************************************************
* ApplicationMessageRequestAck can be found in Volume 1 of the *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface IApplicationMessageRequestAck {
  ApplResponseID: string// [2] 1353 (String)
  ApplReqID?: string// [2] 1346 (String)
  ApplReqType?: number// [2] 1347 (Int)
  ApplResponseType?: number// [2] 1348 (Int)
  ApplTotalMessageCount?: number// [2] 1349 (Int)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplIDRequestAckGrp?: IApplIDRequestAckGrp[]// [2] RefApplID.1355, RefID.1433 .. ApplRespErr.1354
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
}
