import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityStatusReqID: string// [2] 324 (String)
  Instrument?: IInstrument// [3] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [4] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [5] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [6] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [7] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [8] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  Currency?: string// [9] 15 (String)
  CurrencyCodeSource?: string// [10] 2897 (String)
  SubscriptionRequestType: string// [11] 263 (String)
  MarketID?: string// [12] 1301 (String)
  MarketSegmentID?: string// [13] 1300 (String)
  TradingSessionID?: string// [14] 336 (String)
  TradingSessionSubID?: string// [15] 625 (String)
  StandardTrailer: IStandardTrailer// [16] SignatureLength.93, Signature.89, CheckSum.10
}
