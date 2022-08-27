import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IAllocAckGrp } from './set/alloc_ack_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAllocationInstructionAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AllocID: string// [2] 70 (String)
  Parties?: IParties// [3] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  SecondaryAllocID?: string// [4] 793 (String)
  TradeDate?: Date// [5] 75 (LocalDate)
  TransactTime: Date// [6] 60 (UtcTimestamp)
  AllocStatus: number// [7] 87 (Int)
  AllocRejCode?: number// [8] 88 (Int)
  AllocType?: number// [9] 626 (Int)
  AllocIntermedReqType?: number// [10] 808 (Int)
  MatchStatus?: string// [11] 573 (String)
  Product?: number// [12] 460 (Int)
  SecurityType?: string// [13] 167 (String)
  Text?: string// [14] 58 (String)
  EncodedTextLen?: number// [15] 354 (Length)
  EncodedText?: Buffer// [16] 355 (RawData)
  AllocAckGrp?: IAllocAckGrp// [17] NoAllocs.78, AllocAccount.79 .. EncodedAllocText.361
  StandardTrailer: IStandardTrailer// [18] SignatureLength.93, Signature.89, CheckSum.10
}
