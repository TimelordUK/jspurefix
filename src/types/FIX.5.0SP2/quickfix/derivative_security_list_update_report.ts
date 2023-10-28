import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IDerivativeSecurityDefinition } from './set/derivative_security_definition'
import { IRelSymDerivSecUpdGrp } from './set/rel_sym_deriv_sec_upd_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IDerivativeSecurityListUpdateReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  SecurityReqID?: string// [3] 320 (String)
  SecurityResponseID?: string// [4] 322 (String)
  SecurityRequestResult?: number// [5] 560 (Int)
  SecurityUpdateAction?: string// [6] 980 (String)
  UnderlyingInstrument?: IUnderlyingInstrument// [7] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingInstrumentXID.2631
  DerivativeSecurityDefinition?: IDerivativeSecurityDefinition// [8] DerivativeSymbol.1214, DerivativeSymbolSfx.1215 .. SecurityClassificationValue.1584
  LastUpdateTime?: Date// [9] 779 (UtcTimestamp)
  TransactTime?: Date// [10] 60 (UtcTimestamp)
  TotNoRelatedSym?: number// [11] 393 (Int)
  LastFragment?: boolean// [12] 893 (Boolean)
  RelSymDerivSecUpdGrp?: IRelSymDerivSecUpdGrp// [13] NoRelatedSym.146, ListUpdateAction.1324 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
