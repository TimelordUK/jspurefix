import { IStandardHeader } from './set/standard_header'
import { IApplIDRequestGrp } from './set/appl_id_request_grp'
import { IParties } from './set/parties'

/*
*************************************************************
* ApplicationMessageRequest can be found in Volume 1 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IApplicationMessageRequest {
  ApplReqID: string// 1346
  ApplReqType: number// 1347
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  ApplIDRequestGrp?: IApplIDRequestGrp[]
  Parties?: IParties[]
}
