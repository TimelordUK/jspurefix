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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityReqID?: string// [3] 320 (String)
  SecurityResponseID?: string// [4] 322 (String)
  SecurityRequestResult?: number// [5] 560 (Int)
  SecurityUpdateAction?: string// [6] 980 (String)
  UnderlyingInstrument?: IUnderlyingInstrument// [7] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingDetachmentPoint.1460
  DerivativeSecurityDefinition?: IDerivativeSecurityDefinition// [8] DerivativeSymbol.1214, DerivativeSymbolSfx.1215 .. MaturityMonthYearIncrement.1229
  TotNoRelatedSym?: number// [9] 393 (Int)
  LastFragment?: boolean// [10] 893 (Boolean)
  RelSymDerivSecUpdGrp?: IRelSymDerivSecUpdGrp[]// [11] ListUpdateAction.1324, CorporateAction.292 .. RelSymTransactTime.1504
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
  TransactTime?: Date// [13] 60 (UtcTimestamp)
}
