import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAllocationAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  Parties?: IParties// [2] NoPartyIDs.453, PartyID.448 .. PartySubID.523
  AllocID: string// [3] 70 (String)
  TradeDate: Date// [4] 75 (LocalDate)
  TransactTime?: Date// [5] 60 (UtcTimestamp)
  AllocStatus: number// [6] 87 (Int)
  AllocRejCode?: number// [7] 88 (Int)
  Text?: string// [8] 58 (String)
  EncodedTextLen?: number// [9] 354 (Length)
  EncodedText?: Buffer// [10] 355 (RawData)
  LegalConfirm?: boolean// [11] 650 (Boolean)
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
