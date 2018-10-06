import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IExpirationQty } from './set/expiration_qty'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'

/*
***********************************************************
* ContraryIntentionReport can be found in Volume 5 of the *
*                                                         *
* specification                                           *
***********************************************************
*/
export interface IContraryIntentionReport {
  ContIntRptID: string// 977
  TransactTime?: Date// 60
  LateIndicator?: boolean// 978
  InputSource?: string// 979
  ClearingBusinessDate: Date// 715
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Parties?: IParties[]
  ExpirationQty?: IExpirationQty[]
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp[]
}
