import { Iheader } from './set/header'
import { IMDRjctGrp } from './set/md_rjct_grp'
import { Itrailer } from './set/trailer'

export interface IMarketDataRequestReject {
  header: Iheader
  MDReqID: string// 262
  MDReqRejReason?: string// 281
  MDRjctGrp?: IMDRjctGrp
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  trailer: Itrailer
}
