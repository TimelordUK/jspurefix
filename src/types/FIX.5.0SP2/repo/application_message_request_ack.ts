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
  StandardHeader: IStandardHeader
  ApplResponseID: string// 1353
  ApplReqID?: string// 1346
  ApplReqType?: number// 1347
  ApplResponseType?: number// 1348
  ApplTotalMessageCount?: number// 1349
  ApplIDRequestAckGrp?: IApplIDRequestAckGrp[]
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
  Parties?: IParties[]
}
