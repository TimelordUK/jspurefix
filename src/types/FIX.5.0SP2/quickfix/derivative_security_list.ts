import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IDerivativeSecurityDefinition } from './set/derivative_security_definition'
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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityReqID?: string// [3] 320 (String)
  SecurityResponseID?: string// [4] 322 (String)
  SecurityRequestResult?: number// [5] 560 (Int)
  UnderlyingInstrument?: IUnderlyingInstrument// [6] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingDetachmentPoint.1460
  DerivativeSecurityDefinition?: IDerivativeSecurityDefinition// [7] DerivativeSymbol.1214, DerivativeSymbolSfx.1215 .. MaturityMonthYearIncrement.1229
  TotNoRelatedSym?: number// [8] 393 (Int)
  LastFragment?: boolean// [9] 893 (Boolean)
  RelSymDerivSecGrp?: IRelSymDerivSecGrp[]// [10] Symbol.55, SymbolSfx.65 .. RelSymTransactTime.1504
  StandardTrailer: IStandardTrailer// [11] SignatureLength.93, Signature.89, CheckSum.10
  SecurityReportID?: number// [12] 964 (Int)
  ClearingBusinessDate?: Date// [13] 715 (LocalDate)
  TransactTime?: Date// [14] 60 (UtcTimestamp)
}
