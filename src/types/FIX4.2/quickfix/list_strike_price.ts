import { IStandardHeader } from './set/standard_header'
import { IListStrikePriceNoStrikes } from './set/list_strike_price_no_strikes'
import { IStandardTrailer } from './set/standard_trailer'

export interface IListStrikePrice {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  ListID: string// [2] 66 (String)
  TotNoStrikes: number// [3] 422 (Int)
  NoStrikes: IListStrikePriceNoStrikes[]// [4] Symbol.55, SymbolSfx.65 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
