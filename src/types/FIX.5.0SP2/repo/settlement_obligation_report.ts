import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ISettlObligationInstructions } from './set/settl_obligation_instructions'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Settlement Obligation Report message provides a central  *
* counterparty, institution, or individual counterparty with a *
* capacity for reporting the final details of a currency       *
* settlement obligation.                                       *
****************************************************************
*/
export interface ISettlementObligationReport {
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  ClearingBusinessDate?: Date// 715
  SettlementCycleNo?: number// 1153
  SettlObligMsgID: string// 1160
  SettlObligMode: number// 1159
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  TransactTime?: Date// 60
  SettlObligationInstructions: ISettlObligationInstructions[]
  StandardTrailer: IStandardTrailer
}
