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
  AllocID?: string// [3] 70 (String)
  ClearingBusinessDate?: Date// [4] 715 (LocalDate)
  AvgPxIndicator?: number// [5] 819 (Int)
  Quantity?: number// [6] 53 (Float)
  AllocTransType?: string// [7] 71 (String)
  Parties?: IParties[]// [8] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  SecondaryAllocID?: string// [9] 793 (String)
  TradeDate?: Date// [10] 75 (LocalDate)
  TransactTime?: Date// [11] 60 (UtcTimestamp)
  AllocStatus?: number// [12] 87 (Int)
  AllocRejCode?: number// [13] 88 (Int)
  AllocReportType?: number// [14] 794 (Int)
  AllocIntermedReqType?: number// [15] 808 (Int)
  MatchStatus?: string// [16] 573 (String)
  Product?: number// [17] 460 (Int)
  SecurityType?: string// [18] 167 (String)
  Text?: string// [19] 58 (String)
  EncodedTextLen?: number// [20] 354 (Int)
  EncodedText?: Buffer// [21] 355 (RawData)
  AllocAckGrp?: IAllocAckGrp[]// [22] AllocAccount.79, AllocAcctIDSource.661 .. AllocQty.80
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
}
