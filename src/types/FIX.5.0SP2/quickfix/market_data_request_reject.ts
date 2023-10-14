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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MDReqID: string// [2] 262 (String)
  Parties?: IParties[]// [3] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  MDReqRejReason?: string// [4] 281 (String)
  MDRjctGrp?: IMDRjctGrp[]// [5] AltMDSourceID.817
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Int)
  EncodedText?: Buffer// [8] 355 (RawData)
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
