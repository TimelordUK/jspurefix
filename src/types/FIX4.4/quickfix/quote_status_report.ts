import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStipulations } from './set/stipulations'
import { ILegQuotStatGrp } from './set/leg_quot_stat_grp'
import { IQuotQualGrp } from './set/quot_qual_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteStatusReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteStatusReqID?: string// [2] 649 (String)
  QuoteReqID?: string// [3] 131 (String)
  QuoteID: string// [4] 117 (String)
  QuoteRespID?: string// [5] 693 (String)
  QuoteType?: number// [6] 537 (Int)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradingSessionID?: string// [8] 336 (String)
  TradingSessionSubID?: string// [9] 625 (String)
  Instrument?: IInstrument// [10] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [11] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [12] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  Side?: string// [13] 54 (String)
  OrderQtyData?: IOrderQtyData// [14] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  SettlType?: string// [15] 63 (String)
  SettlDate?: Date// [16] 64 (LocalDate)
  SettlDate2?: Date// [17] 193 (LocalDate)
  OrderQty2?: number// [18] 192 (Float)
  Currency?: string// [19] 15 (String)
  Stipulations?: IStipulations// [20] NoStipulations.232, StipulationType.233, StipulationValue.234
  Account?: string// [21] 1 (String)
  AcctIDSource?: number// [22] 660 (Int)
  AccountType?: number// [23] 581 (Int)
  LegQuotStatGrp?: ILegQuotStatGrp// [24] NoLegs.555, LegSymbol.600 .. NestedPartySubIDType.805
  QuotQualGrp?: IQuotQualGrp// [25] NoQuoteQualifiers.735, QuoteQualifier.695
  ExpireTime?: Date// [26] 126 (UtcTimestamp)
  Price?: number// [27] 44 (Float)
  PriceType?: number// [28] 423 (Int)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [29] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [30] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  BidPx?: number// [31] 132 (Float)
  OfferPx?: number// [32] 133 (Float)
  MktBidPx?: number// [33] 645 (Float)
  MktOfferPx?: number// [34] 646 (Float)
  MinBidSize?: number// [35] 647 (Float)
  BidSize?: number// [36] 134 (Float)
  MinOfferSize?: number// [37] 648 (Float)
  OfferSize?: number// [38] 135 (Float)
  ValidUntilTime?: Date// [39] 62 (UtcTimestamp)
  BidSpotRate?: number// [40] 188 (Float)
  OfferSpotRate?: number// [41] 190 (Float)
  BidForwardPoints?: number// [42] 189 (Float)
  OfferForwardPoints?: number// [43] 191 (Float)
  MidPx?: number// [44] 631 (Float)
  BidYield?: number// [45] 632 (Float)
  MidYield?: number// [46] 633 (Float)
  OfferYield?: number// [47] 634 (Float)
  TransactTime?: Date// [48] 60 (UtcTimestamp)
  OrdType?: string// [49] 40 (String)
  BidForwardPoints2?: number// [50] 642 (Float)
  OfferForwardPoints2?: number// [51] 643 (Float)
  SettlCurrBidFxRate?: number// [52] 656 (Float)
  SettlCurrOfferFxRate?: number// [53] 657 (Float)
  SettlCurrFxRateCalc?: string// [54] 156 (String)
  CommType?: string// [55] 13 (String)
  Commission?: number// [56] 12 (Float)
  CustOrderCapacity?: number// [57] 582 (Int)
  ExDestination?: string// [58] 100 (String)
  QuoteStatus?: number// [59] 297 (Int)
  Text?: string// [60] 58 (String)
  EncodedTextLen?: number// [61] 354 (Length)
  EncodedText?: Buffer// [62] 355 (RawData)
  StandardTrailer: IStandardTrailer// [63] SignatureLength.93, Signature.89, CheckSum.10
}
