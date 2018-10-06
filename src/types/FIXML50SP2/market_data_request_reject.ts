import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IMDRjctGrp } from './set/md_rjct_grp'

/*
***********************************************************
* MarketDataRequestReject can be found in Volume 3 of the *
*                                                         *
* specification                                           *
***********************************************************
*/
export interface IMarketDataRequestReject {
  MDReqID: string// 262
  MDReqRejReason?: string// 281
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  MDRjctGrp?: IMDRjctGrp[]
}
