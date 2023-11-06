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
  MDReqID: string// [2] 262 (String)
  MDReqRejReason?: string// [2] 281 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  MDRjctGrp?: IMDRjctGrp[]// [3] AltMDSrcID.817
}
