import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IParties } from './set/parties'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStipulations } from './set/stipulations'
import { IInstrmtLegIOIGrp } from './set/instrmt_leg_ioi_grp'
import { IPriceQualifierGrp } from './set/price_qualifier_grp'
import { IIOIQualGrp } from './set/ioi_qual_grp'
import { IRoutingGrp } from './set/routing_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IRelativeValueGrp } from './set/relative_value_grp'
import { IYieldData } from './set/yield_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IIOI {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  IOIID: string// [3] 23 (String)
  IOITransType: string// [4] 28 (String)
  IOIRefID?: string// [5] 26 (String)
  Instrument?: IInstrument// [6] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [7] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  Parties?: IParties// [8] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  FinancingDetails?: IFinancingDetails// [9] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [10] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [11] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  Side: string// [12] 54 (String)
  QtyType?: number// [13] 854 (Int)
  OrderQtyData?: IOrderQtyData// [14] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  IOIQty: string// [15] 27 (String)
  Currency?: string// [16] 15 (String)
  CurrencyCodeSource?: string// [17] 2897 (String)
  Stipulations?: IStipulations// [18] NoStipulations.232, StipulationType.233, StipulationValue.234
  InstrmtLegIOIGrp?: IInstrmtLegIOIGrp// [19] NoLegs.555, LegSymbol.600 .. LegStipulationValue.689
  PriceType?: number// [20] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [21] NoPriceQualifiers.2709, PriceQualifier.2710
  Price?: number// [22] 44 (Float)
  ValidUntilTime?: Date// [23] 62 (UtcTimestamp)
  IOIQltyInd?: string// [24] 25 (String)
  IOINaturalFlag?: boolean// [25] 130 (Boolean)
  IOIQualGrp?: IIOIQualGrp// [26] NoIOIQualifiers.199, IOIQualifier.104
  Text?: string// [27] 58 (String)
  EncodedTextLen?: number// [28] 354 (Length)
  EncodedText?: Buffer// [29] 355 (RawData)
  TransactTime?: Date// [30] 60 (UtcTimestamp)
  URLLink?: string// [31] 149 (String)
  RoutingGrp?: IRoutingGrp// [32] NoRoutingIDs.215, RoutingType.216, RoutingID.217
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [33] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  RelativeValueGrp?: IRelativeValueGrp// [34] NoRelativeValues.2529, RelativeValueType.2530 .. RelativeValueSide.2532
  YieldData?: IYieldData// [35] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  StandardTrailer: IStandardTrailer// [36] SignatureLength.93, Signature.89, CheckSum.10
}
