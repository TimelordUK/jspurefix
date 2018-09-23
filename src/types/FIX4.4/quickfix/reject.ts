export interface IReject {
  RefSeqNum: number   // 45
  RefTagID?: number// 371
  RefMsgType?: string// 372
  SessionRejectReason?: number// 373
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
}
