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
  SecurityReqID?: string// [2] 320 (String)
  SecurityResponseID?: string// [2] 322 (String)
  SecurityRequestResult?: number// [2] 560 (Int)
  SecurityUpdateAction?: string// [2] 980 (String)
  LastUpdateTime?: Date// [2] 779 (UtcTimestamp)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  TotNoRelatedSym?: number// [2] 393 (Int)
  LastFragment?: boolean// [2] 893 (Boolean)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  UnderlyingInstrument?: IUnderlyingInstrument// [3] Sym.311, Sfx.312 .. XID.2631
  DerivativeSecurityDefinition?: IDerivativeSecurityDefinition// [4] 
  RelSymDerivSecUpdGrp?: IRelSymDerivSecUpdGrp[]// [5] ListUpdActn.1324, CorpActn.292 .. EncTxt.355
}
