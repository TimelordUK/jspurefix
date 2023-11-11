import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStipulations } from './set/stipulations'
import { ILegQuotStatGrp } from './set/leg_quot_stat_grp'
import { IQuotQualGrp } from './set/quot_qual_grp'
import { IQuoteAttributeGrp } from './set/quote_attribute_grp'
import { IPriceQualifierGrp } from './set/price_qualifier_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { ICommissionData } from './set/commission_data'
import { IThrottleResponse } from './set/throttle_response'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteStatusReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteStatusReqID?: string// [2] 649 (String)
  QuoteReqID?: string// [3] 131 (String)
  QuoteID?: string// [4] 117 (String)
  BidID?: string// [5] 390 (String)
  OfferID?: string// [6] 1867 (String)
  SecondaryQuoteID?: string// [7] 1751 (String)
  QuoteMsgID?: string// [8] 1166 (String)
  QuoteRespID?: string// [9] 693 (String)
  QuoteType?: number// [10] 537 (Int)
  QuoteCancelType?: number// [11] 298 (Int)
  Parties?: IParties// [12] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [13] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  TradingSessionID?: string// [14] 336 (String)
  TradingSessionSubID?: string// [15] 625 (String)
  Instrument?: IInstrument// [16] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [17] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [18] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  Side?: string// [19] 54 (String)
  OrderQtyData?: IOrderQtyData// [20] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  SettlType?: string// [21] 63 (String)
  SettlDate?: Date// [22] 64 (LocalDate)
  SettlDate2?: Date// [23] 193 (LocalDate)
  TerminationDate?: Date// [24] 2878 (LocalDate)
  OrderQty2?: number// [25] 192 (Float)
  Currency?: string// [26] 15 (String)
  CurrencyCodeSource?: string// [27] 2897 (String)
  Stipulations?: IStipulations// [28] NoStipulations.232, StipulationType.233, StipulationValue.234
  Account?: string// [29] 1 (String)
  AcctIDSource?: number// [30] 660 (Int)
  AccountType?: number// [31] 581 (Int)
  LegQuotStatGrp?: ILegQuotStatGrp// [32] NoLegs.555, LegSymbol.600 .. NestedPartySubIDType.805
  QuotQualGrp?: IQuotQualGrp// [33] NoQuoteQualifiers.735, QuoteQualifier.695
  QuoteAttributeGrp?: IQuoteAttributeGrp// [34] NoQuoteAttributes.2706, QuoteAttributeType.2707, QuoteAttributeValue.2708
  EventInitiatorType?: string// [35] 2830 (String)
  NegotiationMethod?: number// [36] 2115 (Int)
  ExpireTime?: Date// [37] 126 (UtcTimestamp)
  Price?: number// [38] 44 (Float)
  PriceType?: number// [39] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [40] NoPriceQualifiers.2709, PriceQualifier.2710
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [41] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [42] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  BidQuoteID?: string// [43] 1747 (String)
  OfferQuoteID?: string// [44] 1748 (String)
  BidMDEntryID?: string// [45] 1745 (String)
  OfferMDEntryID?: string// [46] 1746 (String)
  BidPx?: number// [47] 132 (Float)
  OfferPx?: number// [48] 133 (Float)
  MktBidPx?: number// [49] 645 (Float)
  MktOfferPx?: number// [50] 646 (Float)
  MinBidSize?: number// [51] 647 (Float)
  BidSize?: number// [52] 134 (Float)
  TotalBidSize?: number// [53] 1749 (Float)
  MinOfferSize?: number// [54] 648 (Float)
  OfferSize?: number// [55] 135 (Float)
  TotalOfferSize?: number// [56] 1750 (Float)
  MinQty?: number// [57] 110 (Float)
  ValidUntilTime?: Date// [58] 62 (UtcTimestamp)
  BidSpotRate?: number// [59] 188 (Float)
  OfferSpotRate?: number// [60] 190 (Float)
  BidForwardPoints?: number// [61] 189 (Float)
  OfferForwardPoints?: number// [62] 191 (Float)
  MidPx?: number// [63] 631 (Float)
  BidYield?: number// [64] 632 (Float)
  MidYield?: number// [65] 633 (Float)
  OfferYield?: number// [66] 634 (Float)
  TransactTime?: Date// [67] 60 (UtcTimestamp)
  TrdRegTimestamps?: ITrdRegTimestamps// [68] NoTrdRegTimestamps.768, TrdRegTimestamp.769 .. NBBOSource.2834
  OrdType?: string// [69] 40 (String)
  BidForwardPoints2?: number// [70] 642 (Float)
  OfferForwardPoints2?: number// [71] 643 (Float)
  SettlCurrBidFxRate?: number// [72] 656 (Float)
  SettlCurrOfferFxRate?: number// [73] 657 (Float)
  SettlCurrFxRateCalc?: string// [74] 156 (String)
  CommissionData?: ICommissionData// [75] Commission.12, CommType.13 .. FundRenewWaiv.497
  CustOrderCapacity?: number// [76] 582 (Int)
  ExDestination?: string// [77] 100 (String)
  ExDestinationIDSource?: string// [78] 1133 (String)
  BookingType?: number// [79] 775 (Int)
  OrderCapacity?: string// [80] 528 (String)
  OrderRestrictions?: string// [81] 529 (String)
  RegulatoryReportType?: number// [82] 1934 (Int)
  QuoteStatus?: number// [83] 297 (Int)
  QuoteRejectReason?: number// [84] 300 (Int)
  RejectText?: string// [85] 1328 (String)
  EncodedRejectTextLen?: number// [86] 1664 (Length)
  EncodedRejectText?: Buffer// [87] 1665 (RawData)
  TradeContinuation?: number// [88] 1937 (Int)
  TradeContinuationText?: string// [89] 2374 (String)
  EncodedTradeContinuationTextLen?: number// [90] 2372 (Length)
  EncodedTradeContinuationText?: Buffer// [91] 2371 (RawData)
  ThrottleResponse?: IThrottleResponse// [92] ThrottleInst.1685, ThrottleStatus.1609, ThrottleCountIndicator.1686
  Text?: string// [93] 58 (String)
  EncodedTextLen?: number// [94] 354 (Length)
  EncodedText?: Buffer// [95] 355 (RawData)
  StrikeTime?: Date// [96] 443 (UtcTimestamp)
  StandardTrailer: IStandardTrailer// [97] SignatureLength.93, Signature.89, CheckSum.10
}
