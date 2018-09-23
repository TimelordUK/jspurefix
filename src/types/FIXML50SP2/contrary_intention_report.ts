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
  MDStatisticRptID: string// 2453
  RelSymTransactTime?: Date// 1504
  LateIndicator?: string// 978
  InputSource?: string// 979
  ClearingBusinessDate: Date// 715
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  Parties?: IParties[]
  ExpirationQty?: IExpirationQty[]
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp[]
}
