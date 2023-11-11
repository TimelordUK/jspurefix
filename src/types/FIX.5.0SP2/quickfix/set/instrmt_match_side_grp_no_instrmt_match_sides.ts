import { IInstrument } from './instrument'
import { IInstrmtLegGrp } from './instrmt_leg_grp'
import { IUndInstrmtGrp } from './und_instrmt_grp'
import { ITrdMatchSideGrp } from './trd_match_side_grp'

export interface IInstrmtMatchSideGrpNoInstrmtMatchSides {
  Instrument?: IInstrument// [1] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrmtLegGrp?: IInstrmtLegGrp// [2] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  UndInstrmtGrp?: IUndInstrmtGrp// [3] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  TrdMatchSubID?: string// [4] 1891 (String)
  Quantity?: number// [5] 53 (Float)
  Currency?: string// [6] 15 (String)
  CurrencyCodeSource?: string// [7] 2897 (String)
  SettlCurrency?: string// [8] 120 (String)
  SettlCurrencyCodeSource?: string// [9] 2899 (String)
  QtyType?: number// [10] 854 (Int)
  LastQty?: number// [11] 32 (Float)
  PriceType?: number// [12] 423 (Int)
  LastPx?: number// [13] 31 (Float)
  LastMkt?: string// [14] 30 (String)
  TrdMatchSideGrp?: ITrdMatchSideGrp// [15] NoTrdMatchSides.1890, Side.54 .. EncodedText.355
}
