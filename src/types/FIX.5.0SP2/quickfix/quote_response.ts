import { IStandardHeader } from './set/standard_header'
import { IQuotQualGrp } from './set/quot_qual_grp'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStipulations } from './set/stipulations'
import { ILegQuotGrp } from './set/leg_quot_grp'
import { ICommissionData } from './set/commission_data'
import { IPriceQualifierGrp } from './set/price_qualifier_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteResponse {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteRespID: string// [2] 693 (String)
  QuoteID?: string// [3] 117 (String)
  QuoteMsgID?: string// [4] 1166 (String)
  QuoteReqID?: string// [5] 131 (String)
  QuoteRespType: number// [6] 694 (Int)
  ClOrdID?: string// [7] 11 (String)
  OrderCapacity?: string// [8] 528 (String)
  OrderRestrictions?: string// [9] 529 (String)
  IOIID?: string// [10] 23 (String)
  QuoteType?: number// [11] 537 (Int)
  PreTradeAnonymity?: boolean// [12] 1091 (Boolean)
  QuotQualGrp?: IQuotQualGrp// [13] NoQuoteQualifiers.735, QuoteQualifier.695
  TrdType?: number// [14] 828 (Int)
  RegulatoryTransactionType?: number// [15] 2347 (Int)
  NegotiationMethod?: number// [16] 2115 (Int)
  Parties?: IParties// [17] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradingSessionID?: string// [18] 336 (String)
  TradingSessionSubID?: string// [19] 625 (String)
  Instrument?: IInstrument// [20] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [21] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [22] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  Side?: string// [23] 54 (String)
  OrderQtyData?: IOrderQtyData// [24] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  MinQty?: number// [25] 110 (Float)
  SettlType?: string// [26] 63 (String)
  SettlDate?: Date// [27] 64 (LocalDate)
  TerminationDate?: Date// [28] 2878 (LocalDate)
  SettlDate2?: Date// [29] 193 (LocalDate)
  OrderQty2?: number// [30] 192 (Float)
  Currency?: string// [31] 15 (String)
  CurrencyCodeSource?: string// [32] 2897 (String)
  Stipulations?: IStipulations// [33] NoStipulations.232, StipulationType.233, StipulationValue.234
  Account?: string// [34] 1 (String)
  AcctIDSource?: number// [35] 660 (Int)
  AccountType?: number// [36] 581 (Int)
  LegQuotGrp?: ILegQuotGrp// [37] NoLegs.555, LegSymbol.600 .. LegOfferForwardPoints.1068
  BidPx?: number// [38] 132 (Float)
  OfferPx?: number// [39] 133 (Float)
  MktBidPx?: number// [40] 645 (Float)
  MktOfferPx?: number// [41] 646 (Float)
  MinBidSize?: number// [42] 647 (Float)
  BidSize?: number// [43] 134 (Float)
  MinOfferSize?: number// [44] 648 (Float)
  OfferSize?: number// [45] 135 (Float)
  ValidUntilTime?: Date// [46] 62 (UtcTimestamp)
  BidSpotRate?: number// [47] 188 (Float)
  OfferSpotRate?: number// [48] 190 (Float)
  BidForwardPoints?: number// [49] 189 (Float)
  OfferForwardPoints?: number// [50] 191 (Float)
  MidPx?: number// [51] 631 (Float)
  BidYield?: number// [52] 632 (Float)
  MidYield?: number// [53] 633 (Float)
  OfferYield?: number// [54] 634 (Float)
  TransactTime?: Date// [55] 60 (UtcTimestamp)
  OrdType?: string// [56] 40 (String)
  BidForwardPoints2?: number// [57] 642 (Float)
  OfferForwardPoints2?: number// [58] 643 (Float)
  SettlCurrBidFxRate?: number// [59] 656 (Float)
  SettlCurrOfferFxRate?: number// [60] 657 (Float)
  SettlCurrFxRateCalc?: string// [61] 156 (String)
  CommissionData?: ICommissionData// [62] Commission.12, CommType.13 .. FundRenewWaiv.497
  CustOrderCapacity?: number// [63] 582 (Int)
  ExDestination?: string// [64] 100 (String)
  ExDestinationIDSource?: string// [65] 1133 (String)
  Text?: string// [66] 58 (String)
  EncodedTextLen?: number// [67] 354 (Length)
  EncodedText?: Buffer// [68] 355 (RawData)
  Price?: number// [69] 44 (Float)
  PriceType?: number// [70] 423 (Int)
  PriceQualifierGrp?: IPriceQualifierGrp// [71] NoPriceQualifiers.2709, PriceQualifier.2710
  CoverPrice?: number// [72] 1917 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [73] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [74] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  TradeContinuation?: number// [75] 1937 (Int)
  TradeContinuationText?: string// [76] 2374 (String)
  EncodedTradeContinuationTextLen?: number// [77] 2372 (Length)
  EncodedTradeContinuationText?: Buffer// [78] 2371 (RawData)
  StrikeTime?: Date// [79] 443 (UtcTimestamp)
  StandardTrailer: IStandardTrailer// [80] SignatureLength.93, Signature.89, CheckSum.10
}
