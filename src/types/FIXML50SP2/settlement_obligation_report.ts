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
  ClearingBusinessDate?: Date// 715
  SettlementCycleNo?: number// 1153
  SettlObligMsgID: string// 1160
  SettlObligMode: number// 1159
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TransactTime?: Date// 60
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  SettlObligationInstructions?: ISettlObligationInstructions[]
}
