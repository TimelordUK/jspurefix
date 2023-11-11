import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IStipulations } from './set/stipulations'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityDefinitionRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SecurityReqID: string// [2] 320 (String)
  SecurityRequestType: number// [3] 321 (Int)
  MarketID?: string// [4] 1301 (String)
  MarketSegmentID?: string// [5] 1300 (String)
  Instrument?: IInstrument// [6] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [7] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [8] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [9] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [10] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  Currency?: string// [11] 15 (String)
  CurrencyCodeSource?: string// [12] 2897 (String)
  ComplianceID?: string// [13] 376 (String)
  ComplianceText?: string// [14] 2404 (String)
  EncodedComplianceTextLen?: number// [15] 2351 (Length)
  EncodedComplianceText?: Buffer// [16] 2352 (RawData)
  Text?: string// [17] 58 (String)
  EncodedTextLen?: number// [18] 354 (Length)
  EncodedText?: Buffer// [19] 355 (RawData)
  TradingSessionID?: string// [20] 336 (String)
  TradingSessionSubID?: string// [21] 625 (String)
  Stipulations?: IStipulations// [22] NoStipulations.232, StipulationType.233, StipulationValue.234
  InstrmtLegGrp?: IInstrmtLegGrp// [23] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [24] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [25] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  ExpirationCycle?: number// [26] 827 (Int)
  SubscriptionRequestType?: string// [27] 263 (String)
  StandardTrailer: IStandardTrailer// [28] SignatureLength.93, Signature.89, CheckSum.10
}
