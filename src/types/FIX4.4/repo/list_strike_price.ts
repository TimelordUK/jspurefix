import { IStandardHeader } from './set/standard_header'
import { IInstrmtStrkPxGrp } from './set/instrmt_strk_px_grp'
import { IUndInstrmtStrkPxGrp } from './set/und_instrmt_strk_px_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The strike price message is used to exchange strike price *
* information for principal trades. It can also be used to  *
* exchange reference prices for agency trades.              *
*************************************************************
*/
export interface IListStrikePrice {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ListID: string// [2] 66 (String)
  TotNoStrikes: number// [3] 422 (Int)
  LastFragment?: boolean// [4] 893 (Boolean)
  InstrmtStrkPxGrp: IInstrmtStrkPxGrp[]// [5] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtStrkPxGrp?: IUndInstrmtStrkPxGrp[]// [6] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [7] SignatureLength.93, Signature.89, CheckSum.10
}
