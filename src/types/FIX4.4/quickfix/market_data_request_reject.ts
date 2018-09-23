import { IMDRjctGrp } from './set/md_rjct_grp'

export interface IMarketDataRequestReject {
  MDReqID: string// 262
  MDReqRejReason?: string// 281
  MDRjctGrp?: IMDRjctGrp
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
