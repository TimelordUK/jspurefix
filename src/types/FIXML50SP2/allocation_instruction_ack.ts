import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IParties } from './set/parties'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IAllocAckGrp } from './set/alloc_ack_grp'

/*
************************************************************
* AllocationInstructionAck can be found in Volume 5 of the *
*                                                          *
* specification                                            *
************************************************************
*/
export interface IAllocationInstructionAck {
  AllocID: string// [2] 70 (String)
  SecondaryAllocID?: string// [2] 793 (String)
  AllocGroupID?: string// [2] 1730 (String)
  FirmGroupID?: string// [2] 1728 (String)
  AvgPxGroupID?: string// [2] 1731 (String)
  TradeDate?: Date// [2] 75 (LocalDate)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  AllocStatus: number// [2] 87 (Int)
  AllocRejCode?: number// [2] 88 (Int)
  AllocType?: number// [2] 626 (Int)
  AllocIntermedReqType?: number// [2] 808 (Int)
  MatchStatus?: string// [2] 573 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Instrument?: IInstrument// [2] Sym.55, Sfx.65 .. ExchLookAlike.2603
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]// [4] ID.1903, Src.1905 .. Scope.2397
  AllocAckGrp?: IAllocAckGrp[]// [5] Acct.79, ActIDSrc.661 .. CurCostBasis.1755
}
