import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAllocationInstructionAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ClientID?: string// [2] 109 (String)
  ExecBroker?: string// [3] 76 (String)
  AllocID: string// [4] 70 (String)
  TradeDate: Date// [5] 75 (LocalDate)
  TransactTime?: Date// [6] 60 (UtcTimestamp)
  AllocStatus: number// [7] 87 (Int)
  AllocRejCode?: number// [8] 88 (Int)
  Text?: string// [9] 58 (String)
  EncodedTextLen?: number// [10] 354 (Length)
  EncodedText?: Buffer// [11] 355 (RawData)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
