import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* The Allocation ACK message is used to acknowledge the *
* receipt and status of an Allocation message.          *
*********************************************************
*/
export interface IAllocationAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  Parties?: IParties[]// [2] 
  AllocID: string// [3] 70 (String)
  TradeDate: Date// [4] 75 (LocalDate)
  TransactTime?: Date// [5] 60 (UtcTimestamp)
  AllocStatus: number// [6] 87 (Int)
  AllocRejCode?: number// [7] 88 (Int)
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Int)
  EncodedText?: Buffer// [10] 355 (RawData)
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
}
