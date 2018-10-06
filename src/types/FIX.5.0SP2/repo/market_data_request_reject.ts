import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IMDRjctGrp } from './set/md_rjct_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Market Data Request Reject is used when the broker       *
* cannot honor the Market Data Request, due to business or     *
* technical reasons. Brokers may choose to limit various       *
* parameters, such as the size of requests, whether just the   *
* top of book or the entire book may be displayed, and whether *
* Full or Incremental updates must be used.                    *
****************************************************************
*/
export interface IMarketDataRequestReject {
  StandardHeader: IStandardHeader
  MDReqID: string// 262
  Parties?: IParties[]
  MDReqRejReason?: string// 281
  MDRjctGrp?: IMDRjctGrp[]
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
