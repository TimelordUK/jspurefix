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
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  ApplIDRequestGrp?: IApplIDRequestGrp[]
  Parties?: IParties[]
}
