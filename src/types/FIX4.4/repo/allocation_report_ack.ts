import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IAllocAckGrp } from './set/alloc_ack_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Allocation Report Ack message is used to acknowledge the *
* receipt of and provide status for an Allocation Report       *
* message.                                                     *
****************************************************************
*/
export interface IAllocationReportAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AllocReportID: string// [2] 755 (String)
  AllocID: string// [3] 70 (String)
  Parties?: IParties[]// [4] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  SecondaryAllocID?: string// [5] 793 (String)
  TradeDate?: Date// [6] 75 (LocalDate)
  TransactTime: Date// [7] 60 (UtcTimestamp)
  AllocStatus: number// [8] 87 (Int)
  AllocRejCode?: number// [9] 88 (Int)
  AllocReportType?: number// [10] 794 (Int)
  AllocIntermedReqType?: number// [11] 808 (Int)
  MatchStatus?: string// [12] 573 (String)
  Product?: number// [13] 460 (Int)
  SecurityType?: string// [14] 167 (String)
  Text?: string// [15] 58 (String)
  EncodedTextLen?: number// [16] 354 (Int)
  EncodedText?: Buffer// [17] 355 (RawData)
  AllocAckGrp?: IAllocAckGrp[]// [18] AllocAccount.79, AllocAcctIDSource.661 .. EncodedAllocText.361
  StandardTrailer: IStandardTrailer// [19] SignatureLength.93, Signature.89, CheckSum.10
}
