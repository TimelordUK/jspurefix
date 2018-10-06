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
  TransferInstructionID: string// 2436
  TransferID?: string// 2437
  TransferTransType?: number// 2439
  TransferType?: number// 2440
  TransferStatus?: number// 2442
  OrdRejReason?: number// 103
  TransferScope?: number// 2441
  TransactTime?: Date// 60
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
}
