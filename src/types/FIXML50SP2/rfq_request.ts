import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IRFQReqGrp } from './set/rfq_req_grp'

/*
**********************************************
* RFQRequest can be found in Volume 3 of the *
*                                            *
* specification                              *
**********************************************
*/
export interface IRFQRequest {
  RFQReqID: string// 644
  SubscriptionRequestType?: string// 263
  PrivateQuote?: string// 1171
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  RFQReqGrp?: IRFQReqGrp[]
}
