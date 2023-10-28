import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradeMatchReportAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  TrdMatchID: string// [3] 880 (String)
  TradeMatchAckStatus: number// [4] 1896 (Int)
  TradeMatchRejectReason?: number// [5] 1897 (Int)
  RejectText?: string// [6] 1328 (String)
  EncodedRejectTextLen?: number// [7] 1664 (Length)
  EncodedRejectText?: Buffer// [8] 1665 (RawData)
  Text?: string// [9] 58 (String)
  EncodedTextLen?: number// [10] 354 (Length)
  EncodedText?: Buffer// [11] 355 (RawData)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
