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
  CollRptRejectReason?: number// 2487
  TransferScope?: number// 2441
  RelSymTransactTime?: Date// 1504
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
}
