import { IStandardHeader } from './set/standard_header'
import { IQuotQualGrp } from './set/quot_qual_grp'
import { IQuoteAttributeGrp } from './set/quote_attribute_grp'
import { IValueChecksGrp } from './set/value_checks_grp'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IRateSource } from './set/rate_source'
import { IStipulations } from './set/stipulations'
import { ILegQuotGrp } from './set/leg_quot_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { ICommissionData } from './set/commission_data'
import { IPriceQualifierGrp } from './set/price_qualifier_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IRelativeValueGrp } from './set/relative_value_grp'
import { IYieldData } from './set/yield_data'
import { IRoutingGrp } from './set/routing_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuote {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  BidID?: string// [4] 390 (String)
  OfferID?: string// [5] 1867 (String)
  SecondaryQuoteID?: string// [6] 1751 (String)
  QuoteMsgID?: string// [7] 1166 (String)
  QuoteRespID?: string// [8] 693 (String)
  RefOrderID?: string// [9] 1080 (String)
  RefOrderIDSource?: string// [10] 1081 (String)
  QuoteType?: number// [11] 537 (Int)
  QuoteModelType?: number// [12] 2403 (Int)
  PrivateQuote?: boolean// [13] 1171 (Boolean)
  SingleQuoteIndicator?: boolean// [14] 2837 (Boolean)
  QuotQualGrp?: IQuotQualGrp// [15] NoQuoteQualifiers.735, QuoteQualifier.695
  TrdType?: number// [16] 828 (Int)
  NegotiationMethod?: number// [17] 2115 (Int)
  QuoteResponseLevel?: number// [18] 301 (Int)
  QuoteAttributeGrp?: IQuoteAttributeGrp// [19] NoQuoteAttributes.2706, QuoteAttributeType.2707, QuoteAttributeValue.2708
  ValueChecksGrp?: IValueChecksGrp// [20] NoValueChecks.1868, ValueCheckType.1869, ValueCheckAction.1870
  Parties?: IParties// [21] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradingSessionID?: string// [22] 336 (String)
  TradingSessionSubID?: string// [23] 625 (String)
  Instrument?: IInstrument// [24] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [25] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [26] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  Side?: string// [27] 54 (String)
  OrderQtyData?: IOrderQtyData// [28] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  SettlType?: string// [29] 63 (String)
  SettlDate?: Date// [30] 64 (LocalDate)
  SettlDate2?: Date// [31] 193 (LocalDate)
  OrderQty2?: number// [32] 192 (Float)
  Currency?: string// [33] 15 (String)
  CurrencyCodeSource?: string// [34] 2897 (String)
  SettlCurrency?: string// [35] 120 (String)
  SettlCurrencyCodeSource?: string// [36] 2899 (String)
  RateSource?: IRateSource// [37] NoRateSources.1445, RateSource.1446 .. FXBenchmarkRateFix.2796
  Stipulations?: IStipulations// [38] NoStipulations.232, StipulationType.233, StipulationValue.234
  Account?: string// [39] 1 (String)
  AcctIDSource?: number// [40] 660 (Int)
  AccountType?: number// [41] 581 (Int)
  OwnerType?: number// [42] 522 (Int)
  SolicitedFlag?: boolean// [43] 377 (Boolean)
  LegQuotGrp?: ILegQuotGrp// [44] NoLegs.555, LegSymbol.600 .. LegOfferForwardPoints.1068
  BidPx?: number// [45] 132 (Float)
  OfferPx?: number// [46] 133 (Float)
  MktBidPx?: number// [47] 645 (Float)
  MktOfferPx?: number// [48] 646 (Float)
  MinBidSize?: number// [49] 647 (Float)
  BidSize?: number// [50] 134 (Float)
  TotalBidSize?: number// [51] 1749 (Float)
  MinOfferSize?: number// [52] 648 (Float)
  OfferSize?: number// [53] 135 (Float)
  TotalOfferSize?: number// [54] 1750 (Float)
  MinQty?: number// [55] 110 (Float)
  ExposureDuration?: number// [56] 1629 (Int)
  ExposureDurationUnit?: number// [57] 1916 (Int)
  ValidUntilTime?: Date// [58] 62 (UtcTimestamp)
  BidSpotRate?: number// [59] 188 (Float)
  OfferSpotRate?: number// [60] 190 (Float)
  BidForwardPoints?: number// [61] 189 (Float)
  OfferForwardPoints?: number// [62] 191 (Float)
  BidSwapPoints?: number// [63] 1065 (Float)
  OfferSwapPoints?: number// [64] 1066 (Float)
  MidPx?: number// [65] 631 (Float)
  BidYield?: number// [66] 632 (Float)
  MidYield?: number// [67] 633 (Float)
  OfferYield?: number// [68] 634 (Float)
  TransactTime?: Date// [69] 60 (UtcTimestamp)
  TrdRegTimestamps?: ITrdRegTimestamps// [70] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. NBBOSource.2834
  OrdType?: string// [71] 40 (String)
  BidForwardPoints2?: number// [72] 642 (Float)
  OfferForwardPoints2?: number// [73] 643 (Float)
  SettlCurrBidFxRate?: number// [74] 656 (Float)
  SettlCurrOfferFxRate?: number// [75] 657 (Float)
  SettlCurrFxRateCalc?: string// [76] 156 (String)
  CommissionData?: ICommissionData// [77] Commission.12, CommType.13 .. FundRenewWaiv.497
  CustOrderCapacity?: number// [78] 582 (Int)
  ExDestination?: string// [79] 100 (String)
  ExDestinationIDSource?: string// [80] 1133 (String)
  BookingType?: number// [81] 775 (Int)
  OrderCapacity?: string// [82] 528 (String)
  OrderRestrictions?: string// [83] 529 (String)
  RegulatoryReportType?: number// [84] 1934 (Int)
  PriceType?: number// [85] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [86] NoPriceQualifiers.2709, PriceQualifier.2710
  BidSpread?: number// [87] 2533 (Float)
  OfferSpread?: number// [88] 2534 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [89] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  RelativeValueGrp?: IRelativeValueGrp// [90] NoRelativeValues.2529, RelativeValueType.2530 .. RelativeValueSide.2532
  YieldData?: IYieldData// [91] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  RoutingGrp?: IRoutingGrp// [92] NoRoutingIDs.215, RoutingType.216, RoutingID.217
  TradeContinuation?: number// [93] 1937 (Int)
  TradeContinuationText?: string// [94] 2374 (String)
  EncodedTradeContinuationTextLen?: number// [95] 2372 (Length)
  EncodedTradeContinuationText?: Buffer// [96] 2371 (RawData)
  SelfMatchPreventionID?: string// [97] 2362 (String)
  SelfMatchPreventionInstruction?: number// [98] 2964 (Int)
  ThrottleInst?: number// [99] 1685 (Int)
  ComplianceID?: string// [100] 376 (String)
  ComplianceText?: string// [101] 2404 (String)
  EncodedComplianceTextLen?: number// [102] 2351 (Length)
  EncodedComplianceText?: Buffer// [103] 2352 (RawData)
  Text?: string// [104] 58 (String)
  EncodedTextLen?: number// [105] 354 (Length)
  EncodedText?: Buffer// [106] 355 (RawData)
  StrikeTime?: Date// [107] 443 (UtcTimestamp)
  StandardTrailer: IStandardTrailer// [108] SignatureLength.93, Signature.89, CheckSum.10
}
