import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IExpirationQty } from './set/expiration_qty'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Contrary Intention Report is used for reporting of     *
* contrary expiration quantities for Saturday expiring       *
* options. This information is required by options exchanges *
* for regulatory purposes.                                   *
**************************************************************
*/
export interface IContraryIntentionReport {
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  ContIntRptID: string// 977
  TransactTime?: Date// 60
  LateIndicator?: boolean// 978
  InputSource?: string// 979
  ClearingBusinessDate: Date// 715
  Parties: IParties[]
  ExpirationQty: IExpirationQty[]
  Instrument: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
