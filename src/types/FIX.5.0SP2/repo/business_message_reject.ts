import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Business Message Reject message can reject an            *
* application-level message which fulfills session-level rules *
* and cannot be rejected via any other means. Note if the      *
* message fails a session-level rule (e.g. body length is      *
* incorrect), a session-level Reject message should be issued. *
****************************************************************
*/
export interface IBusinessMessageReject {
  StandardHeader: IStandardHeader
  RefSeqNum?: number// 45
  RefMsgType: string// 372
  RefApplVerID?: string// 1130
  RefApplExtID?: number// 1406
  RefCstmApplVerID?: string// 1131
  BusinessRejectRefID?: string// 379
  BusinessRejectReason: number// 380
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
