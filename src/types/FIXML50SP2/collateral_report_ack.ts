import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'

/*
*******************************************************
* CollateralReportAck can be found in Volume 5 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface ICollateralReportAck {
  CollRptID: string// [2] 908 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  CollRptStatus: number// [2] 2488 (Int)
  OrdRejReason?: number// [2] 103 (Int)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
}
