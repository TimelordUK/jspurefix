import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
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
  Parties?: IParties[]// [3] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TransactTime: Date// [4] 60 (UtcTimestamp)
  TradeOriginationDate?: Date// [5] 229 (LocalDate)
  TradeDate?: Date// [6] 75 (LocalDate)
  Text?: string// [7] 58 (String)
  EncodedTextLen?: number// [8] 354 (Int)
  EncodedText?: Buffer// [9] 355 (RawData)
  StandardTrailer: IStandardTrailer// [10] SignatureLength.93, Signature.89, CheckSum.10
}
