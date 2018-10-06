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
  ApplResponseID: string// 1353
  ApplReqID?: string// 1346
  ApplReqType?: number// 1347
  ApplResponseType?: number// 1348
  ApplTotalMessageCount?: number// 1349
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  ApplIDRequestAckGrp?: IApplIDRequestAckGrp[]
  Parties?: IParties[]
}
