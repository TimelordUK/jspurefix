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
  MDStatisticReqID: string// 2452
  MDReqRejReason?: string// 281
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  MDRjctGrp?: IMDRjctGrp[]
}
