import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IRoutingGrp } from './set/routing_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAdvertisement {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AdvId: string// [2] 2 (String)
  AdvTransType: string// [3] 5 (String)
  AdvRefID?: string// [4] 3 (String)
  Instrument?: IInstrument// [5] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [6] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [7] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  InstrmtLegGrp?: IInstrmtLegGrp// [8] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  UndInstrmtGrp?: IUndInstrmtGrp// [9] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [10] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  AdvSide: string// [11] 4 (String)
  Quantity: number// [12] 53 (Float)
  QtyType?: number// [13] 854 (Int)
  Price?: number// [14] 44 (Float)
  Currency?: string// [15] 15 (String)
  CurrencyCodeSource?: string// [16] 2897 (String)
  TradeDate?: Date// [17] 75 (LocalDate)
  TransactTime?: Date// [18] 60 (UtcTimestamp)
  Text?: string// [19] 58 (String)
  EncodedTextLen?: number// [20] 354 (Length)
  EncodedText?: Buffer// [21] 355 (RawData)
  URLLink?: string// [22] 149 (String)
  LastMkt?: string// [23] 30 (String)
  TradingSessionID?: string// [24] 336 (String)
  TradingSessionSubID?: string// [25] 625 (String)
  RoutingGrp?: IRoutingGrp// [26] NoRoutingIDs.215, RoutingType.216, RoutingID.217
  StandardTrailer: IStandardTrailer// [27] SignatureLength.93, Signature.89, CheckSum.10
}
