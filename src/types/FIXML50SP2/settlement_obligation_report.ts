import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ISettlObligationInstructions } from './set/settl_obligation_instructions'

/*
**************************************************************
* SettlementObligationReport can be found in Volume 5 of the *
*                                                            *
* specification                                              *
**************************************************************
*/
export interface ISettlementObligationReport {
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  SettlementCycleNo?: number// [2] 1153 (Int)
  SettlObligMsgID: string// [2] 1160 (String)
  SettlObligMode: number// [2] 1159 (Int)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SettlObligationInstructions?: ISettlObligationInstructions[]// [3] NetGrossInd.430, SettlID.1161 .. LastUpdateTm.779
}
