import { IStandardHeader } from './set/standard_header'
import { ISecurityListNoRelatedSym } from './set/security_list_no_related_sym'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityList {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityResponseID: string// [3] 322 (String)
  SecurityRequestResult: number// [4] 560 (Int)
  TotalNumSecurities?: number// [5] 393 (Int)
  NoRelatedSym?: ISecurityListNoRelatedSym[]// [6] Symbol.55, SymbolSfx.65 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}
