import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAdvertisement {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AdvId: string// [2] 2 (String)
  AdvTransType: string// [3] 5 (String)
  AdvRefID?: string// [4] 3 (String)
  Instrument?: IInstrument// [5] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  InstrmtLegGrp?: IInstrmtLegGrp// [6] NoLegs.555, LegSymbol.600 .. LegInterestAccrualDate.956
  UndInstrmtGrp?: IUndInstrmtGrp// [7] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  AdvSide: string// [8] 4 (String)
  Quantity: number// [9] 53 (Float)
  QtyType?: number// [10] 854 (Int)
  Price?: number// [11] 44 (Float)
  Currency?: string// [12] 15 (String)
  TradeDate?: Date// [13] 75 (LocalDate)
  TransactTime?: Date// [14] 60 (UtcTimestamp)
  Text?: string// [15] 58 (String)
  EncodedTextLen?: number// [16] 354 (Length)
  EncodedText?: Buffer// [17] 355 (RawData)
  URLLink?: string// [18] 149 (String)
  LastMkt?: string// [19] 30 (String)
  TradingSessionID?: string// [20] 336 (String)
  TradingSessionSubID?: string// [21] 625 (String)
  StandardTrailer: IStandardTrailer// [22] SignatureLength.93, Signature.89, CheckSum.10
}
