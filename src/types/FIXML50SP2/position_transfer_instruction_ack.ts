import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'

/*
**************************************************************
* PositionTransferInstructionAck can be found in Volume 5 of *
* the                                                        *
*                                                            *
* specification                                              *
**************************************************************
*/
export interface IPositionTransferInstructionAck {
  TransferInstructionID: string// [2] 2436 (String)
  TransferID?: string// [2] 2437 (String)
  TransferTransType?: number// [2] 2439 (Int)
  TransferType?: number// [2] 2440 (Int)
  TransferStatus?: number// [2] 2442 (Int)
  OrdRejReason?: number// [2] 103 (Int)
  TransferScope?: number// [2] 2441 (Int)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  TargetParties?: ITargetParties[]// [3] ID.1462, Src.1463 .. Qual.1818
}
