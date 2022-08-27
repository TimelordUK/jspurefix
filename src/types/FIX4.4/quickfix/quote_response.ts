import { IStandardHeader } from './set/standard_header'
import { IQuotQualGrp } from './set/quot_qual_grp'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStipulations } from './set/stipulations'
import { ILegQuotGrp } from './set/leg_quot_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteResponse {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteRespID: string// [2] 693 (String)
  QuoteID?: string// [3] 117 (String)
  QuoteRespType: number// [4] 694 (Int)
  ClOrdID?: string// [5] 11 (String)
  OrderCapacity?: string// [6] 528 (String)
  IOIID?: string// [7] 23 (String)
  QuoteType?: number// [8] 537 (Int)
  QuotQualGrp?: IQuotQualGrp// [9] NoQuoteQualifiers.735, QuoteQualifier.695
  Parties?: IParties// [10] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradingSessionID?: string// [11] 336 (String)
  TradingSessionSubID?: string// [12] 625 (String)
  Instrument?: IInstrument// [13] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [14] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [15] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  Side?: string// [16] 54 (String)
  OrderQtyData?: IOrderQtyData// [17] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  SettlType?: string// [18] 63 (String)
  SettlDate?: Date// [19] 64 (LocalDate)
  SettlDate2?: Date// [20] 193 (LocalDate)
  OrderQty2?: number// [21] 192 (Float)
  Currency?: string// [22] 15 (String)
  Stipulations?: IStipulations// [23] NoStipulations.232, StipulationType.233, StipulationValue.234
  Account?: string// [24] 1 (String)
  AcctIDSource?: number// [25] 660 (Int)
  AccountType?: number// [26] 581 (Int)
  LegQuotGrp?: ILegQuotGrp// [27] NoLegs.555, LegSymbol.600 .. LegBenchmarkPriceType.680
  BidPx?: number// [28] 132 (Float)
  OfferPx?: number// [29] 133 (Float)
  MktBidPx?: number// [30] 645 (Float)
  MktOfferPx?: number// [31] 646 (Float)
  MinBidSize?: number// [32] 647 (Float)
  BidSize?: number// [33] 134 (Float)
  MinOfferSize?: number// [34] 648 (Float)
  OfferSize?: number// [35] 135 (Float)
  ValidUntilTime?: Date// [36] 62 (UtcTimestamp)
  BidSpotRate?: number// [37] 188 (Float)
  OfferSpotRate?: number// [38] 190 (Float)
  BidForwardPoints?: number// [39] 189 (Float)
  OfferForwardPoints?: number// [40] 191 (Float)
  MidPx?: number// [41] 631 (Float)
  BidYield?: number// [42] 632 (Float)
  MidYield?: number// [43] 633 (Float)
  OfferYield?: number// [44] 634 (Float)
  TransactTime?: Date// [45] 60 (UtcTimestamp)
  OrdType?: string// [46] 40 (String)
  BidForwardPoints2?: number// [47] 642 (Float)
  OfferForwardPoints2?: number// [48] 643 (Float)
  SettlCurrBidFxRate?: number// [49] 656 (Float)
  SettlCurrOfferFxRate?: number// [50] 657 (Float)
  SettlCurrFxRateCalc?: string// [51] 156 (String)
  Commission?: number// [52] 12 (Float)
  CommType?: string// [53] 13 (String)
  CustOrderCapacity?: number// [54] 582 (Int)
  ExDestination?: string// [55] 100 (String)
  Text?: string// [56] 58 (String)
  EncodedTextLen?: number// [57] 354 (Length)
  EncodedText?: Buffer// [58] 355 (RawData)
  Price?: number// [59] 44 (Float)
  PriceType?: number// [60] 423 (Int)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [61] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [62] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  StandardTrailer: IStandardTrailer// [63] SignatureLength.93, Signature.89, CheckSum.10
}
