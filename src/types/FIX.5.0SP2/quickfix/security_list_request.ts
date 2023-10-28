import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityListRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityListRequestType: number// [3] 559 (Int)
  SecurityListID?: string// [4] 1465 (String)
  SecurityListType?: number// [5] 1470 (Int)
  SecurityListTypeSource?: number// [6] 1471 (Int)
  MarketID?: string// [7] 1301 (String)
  MarketSegmentID?: string// [8] 1300 (String)
  Instrument?: IInstrument// [9] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [10] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [11] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [12] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [13] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [14] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  Currency?: string// [15] 15 (String)
  CurrencyCodeSource?: string// [16] 2897 (String)
  Text?: string// [17] 58 (String)
  EncodedTextLen?: number// [18] 354 (Length)
  EncodedText?: Buffer// [19] 355 (RawData)
  TradingSessionID?: string// [20] 336 (String)
  TradingSessionSubID?: string// [21] 625 (String)
  SubscriptionRequestType?: string// [22] 263 (String)
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
}
