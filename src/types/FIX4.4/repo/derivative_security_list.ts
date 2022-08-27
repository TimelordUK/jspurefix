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
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityResponseID: string// [3] 322 (String)
  SecurityRequestResult: number// [4] 560 (Int)
  UnderlyingInstrument?: IUnderlyingInstrument// [5] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  TotNoRelatedSym?: number// [6] 393 (Int)
  LastFragment?: boolean// [7] 893 (Boolean)
  RelSymDerivSecGrp?: IRelSymDerivSecGrp[]// [8] Symbol.55, SymbolSfx.65 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
