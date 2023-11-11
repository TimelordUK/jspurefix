import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPositionTransferInstructionAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TransferInstructionID: string// [2] 2436 (String)
  TransferID?: string// [3] 2437 (String)
  TransferTransType?: number// [4] 2439 (Int)
  TransferType?: number// [5] 2440 (Int)
  TransferStatus?: number// [6] 2442 (Int)
  TransferRejectReason?: number// [7] 2443 (Int)
  TransferScope?: number// [8] 2441 (Int)
  Parties?: IParties// [9] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [10] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  TransactTime?: Date// [11] 60 (UtcTimestamp)
  RejectText?: string// [12] 1328 (String)
  EncodedRejectTextLen?: number// [13] 1664 (Length)
  EncodedRejectText?: Buffer// [14] 1665 (RawData)
  Text?: string// [15] 58 (String)
  EncodedTextLen?: number// [16] 354 (Length)
  EncodedText?: Buffer// [17] 355 (RawData)
  StandardTrailer: IStandardTrailer// [18] SignatureLength.93, Signature.89, CheckSum.10
}
