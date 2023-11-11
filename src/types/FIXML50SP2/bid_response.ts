import { IStandardHeader } from './set/standard_header'
import { IBidCompRspGrp } from './set/bid_comp_rsp_grp'

/*
***********************************************
* BidResponse can be found in Volume 4 of the *
*                                             *
* specification                               *
***********************************************
*/
export interface IBidResponse {
  BidID?: string// [2] 390 (String)
  ClientBidID?: string// [2] 391 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  BidCompRspGrp?: IBidCompRspGrp[]// [2] ID.66, Ctry.421 .. EncTxt.355
}
