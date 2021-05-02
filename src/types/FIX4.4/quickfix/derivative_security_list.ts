import { IStandardHeader } from './set/standard_header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IRelSymDerivSecGrp } from './set/rel_sym_deriv_sec_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IDerivativeSecurityList {
  StandardHeader: IStandardHeader
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityRequestResult: number// 560
  UnderlyingInstrument?: IUnderlyingInstrument
  TotNoRelatedSym?: number// 393
  LastFragment?: boolean// 893
  RelSymDerivSecGrp?: IRelSymDerivSecGrp
  StandardTrailer: IStandardTrailer
}
