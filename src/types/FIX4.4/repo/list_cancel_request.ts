import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The List Cancel Request message type is used by institutions *
* wishing to cancel previously submitted lists either before   *
* or during execution.                                         *
****************************************************************
*/
export interface IListCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ListID: string// [2] 66 (String)
  TransactTime: Date// [3] 60 (UtcTimestamp)
  TradeOriginationDate?: Date// [4] 229 (LocalDate)
  TradeDate?: Date// [5] 75 (LocalDate)
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Int)
  EncodedText?: Buffer// [8] 355 (RawData)
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
