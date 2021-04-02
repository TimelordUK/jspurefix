import { Iheader } from './set/header'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IRelSymDerivSecGrp } from './set/rel_sym_deriv_sec_grp'
import { Itrailer } from './set/trailer'

export interface IDerivativeSecurityList {
  header: Iheader
  SecurityReqID: string// 320
  SecurityResponseID: string// 322
  SecurityRequestResult: number// 560
  UnderlyingInstrument?: IUnderlyingInstrument
  TotNoRelatedSym?: number// 393
  LastFragment?: boolean// 893
  RelSymDerivSecGrp?: IRelSymDerivSecGrp
  trailer: Itrailer
}
