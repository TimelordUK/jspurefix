import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IDerivativeSecurityDefinition } from './set/derivative_security_definition'
import { IRelSymDerivSecUpdGrp } from './set/rel_sym_deriv_sec_upd_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Derivative Security List Update Report message is used *
* to send updates to an option family or the strikes that    *
* comprise an option family.                                 *
**************************************************************
*/
export interface IDerivativeSecurityListUpdateReport {
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  SecurityReqID?: string// 320
  SecurityResponseID?: string// 322
  SecurityRequestResult?: number// 560
  SecurityUpdateAction?: string// 980
  UnderlyingInstrument?: IUnderlyingInstrument
  DerivativeSecurityDefinition?: IDerivativeSecurityDefinition
  TotNoRelatedSym?: number// 393
  LastFragment?: boolean// 893
  RelSymDerivSecUpdGrp?: IRelSymDerivSecUpdGrp[]
  StandardTrailer: IStandardTrailer
  TransactTime?: Date// 60
}
