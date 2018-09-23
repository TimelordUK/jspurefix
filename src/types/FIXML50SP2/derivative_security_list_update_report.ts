import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IDerivativeSecurityDefinition } from './set/derivative_security_definition'
import { IRelSymDerivSecUpdGrp } from './set/rel_sym_deriv_sec_upd_grp'

/*
***************************************************************
* DerivativeSecurityListUpdateReport can be found in Volume 3 *
* of the                                                      *
*                                                             *
* specification                                               *
***************************************************************
*/
export interface IDerivativeSecurityListUpdateReport {
  MDStatisticReqID?: string// 2452
  QuoteRespID?: string// 693
  MDStatisticRequestResult?: number// 2473
  SecurityUpdateAction?: string// 980
  LastUpdateTime?: Date// 779
  RelSymTransactTime?: Date// 1504
  TotNoRelatedSym?: number// 393
  LastFragment?: string// 893
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  UnderlyingInstrument?: IUnderlyingInstrument
  DerivativeSecurityDefinition?: IDerivativeSecurityDefinition
  RelSymDerivSecUpdGrp?: IRelSymDerivSecUpdGrp[]
}
