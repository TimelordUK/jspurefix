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
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  RelSymTransactTime?: Date// 1504
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  SettlObligationInstructions?: ISettlObligationInstructions[]
}
