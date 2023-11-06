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
  RFQReqID: string// [2] 644 (String)
  SubscriptionRequestType?: string// [2] 263 (String)
  PrivateQuote?: boolean// [2] 1171 (Boolean)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  RFQReqGrp?: IRFQReqGrp[]// [3] PrevClsPx.140, ReqTyp.303 .. SesSub.625
}
