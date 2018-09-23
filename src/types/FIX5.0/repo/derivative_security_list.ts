import { IStandardHeader } from './set/standard_header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IRelSymDerivSecGrp } from './set/rel_sym_deriv_sec_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Derivative Security List message is used to return a    *
* list of securities that matches the criteria specified in a *
* Derivative Security List Request.                           *
***************************************************************
*/
export interface IDerivativeSecurityList {
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityRequestResult: number// 560
  UnderlyingInstrument?: IUnderlyingInstrument
  TotNoRelatedSym?: number// 393
  LastFragment?: boolean// 893
  RelSymDerivSecGrp?: IRelSymDerivSecGrp[]
  StandardTrailer: IStandardTrailer
}
