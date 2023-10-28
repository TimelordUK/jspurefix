import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IDerivativeSecurityDefinition } from './set/derivative_security_definition'
import { IRelSymDerivSecGrp } from './set/rel_sym_deriv_sec_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IDerivativeSecurityList {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityReportID?: number// [3] 964 (Int)
  SecurityReqID?: string// [4] 320 (String)
  SecurityResponseID?: string// [5] 322 (String)
  SecurityRequestResult?: number// [6] 560 (Int)
  SecurityRejectReason?: number// [7] 1607 (Int)
  ClearingBusinessDate?: Date// [8] 715 (LocalDate)
  UnderlyingInstrument?: IUnderlyingInstrument// [9] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingInstrumentXID.2631
  DerivativeSecurityDefinition?: IDerivativeSecurityDefinition// [10] DerivativeSymbol.1214, DerivativeSymbolSfx.1215 .. SecurityClassificationValue.1584
  LastUpdateTime?: Date// [11] 779 (UtcTimestamp)
  TransactTime?: Date// [12] 60 (UtcTimestamp)
  TotNoRelatedSym?: number// [13] 393 (Int)
  LastFragment?: boolean// [14] 893 (Boolean)
  RelSymDerivSecGrp?: IRelSymDerivSecGrp// [15] NoRelatedSym.146, Symbol.55 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [16] SignatureLength.93, Signature.89, CheckSum.10
}
