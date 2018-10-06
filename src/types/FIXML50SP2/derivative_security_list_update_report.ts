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
  SecurityReqID?: string// 320
  SecurityResponseID?: string// 322
  SecurityRequestResult?: number// 560
  SecurityUpdateAction?: string// 980
  LastUpdateTime?: Date// 779
  TransactTime?: Date// 60
  TotNoRelatedSym?: number// 393
  LastFragment?: boolean// 893
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  UnderlyingInstrument?: IUnderlyingInstrument
  DerivativeSecurityDefinition?: IDerivativeSecurityDefinition
  RelSymDerivSecUpdGrp?: IRelSymDerivSecUpdGrp[]
}
