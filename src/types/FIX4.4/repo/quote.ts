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

/*
****************************************************************
* The Quote message is used as the response to a Quote Request *
* or a Quote Response message in both indicative, tradeable,   *
* and restricted tradeable quoting markets.                    *
****************************************************************
*/
export interface IQuote {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [3] 117 (String)
  QuoteRespID?: string// [4] 693 (String)
  QuoteType?: number// [5] 537 (Int)
  QuotQualGrp?: IQuotQualGrp[]// [6] QuoteQualifier.695
  QuoteResponseLevel?: number// [7] 301 (Int)
  Parties?: IParties[]// [8] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradingSessionID?: string// [9] 336 (String)
  TradingSessionSubID?: string// [10] 625 (String)
  Instrument: IInstrument// [11] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [12] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [13] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  Side?: string// [14] 54 (String)
  OrderQtyData?: IOrderQtyData// [15] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  SettlType?: string// [16] 63 (String)
  SettlDate?: Date// [17] 64 (LocalDate)
  SettlDate2?: Date// [18] 193 (LocalDate)
  OrderQty2?: number// [19] 192 (Float)
  Currency?: string// [20] 15 (String)
  Stipulations?: IStipulations[]// [21] StipulationType.233, StipulationValue.234
  Account?: string// [22] 1 (String)
  AcctIDSource?: number// [23] 660 (Int)
  AccountType?: number// [24] 581 (Int)
  LegQuotGrp?: ILegQuotGrp[]// [25] LegSymbol.600, LegSymbolSfx.601 .. LegBenchmarkPriceType.680
  BidPx?: number// [26] 132 (Float)
  OfferPx?: number// [27] 133 (Float)
  MktBidPx?: number// [28] 645 (Float)
  MktOfferPx?: number// [29] 646 (Float)
  MinBidSize?: number// [30] 647 (Float)
  BidSize?: number// [31] 134 (Float)
  MinOfferSize?: number// [32] 648 (Float)
  OfferSize?: number// [33] 135 (Float)
  ValidUntilTime?: Date// [34] 62 (UtcTimestamp)
  BidSpotRate?: number// [35] 188 (Float)
  OfferSpotRate?: number// [36] 190 (Float)
  BidForwardPoints?: number// [37] 189 (Float)
  OfferForwardPoints?: number// [38] 191 (Float)
  MidPx?: number// [39] 631 (Float)
  BidYield?: number// [40] 632 (Float)
  MidYield?: number// [41] 633 (Float)
  OfferYield?: number// [42] 634 (Float)
  TransactTime?: Date// [43] 60 (UtcTimestamp)
  OrdType?: string// [44] 40 (String)
  BidForwardPoints2?: number// [45] 642 (Float)
  OfferForwardPoints2?: number// [46] 643 (Float)
  SettlCurrBidFxRate?: number// [47] 656 (Float)
  SettlCurrOfferFxRate?: number// [48] 657 (Float)
  SettlCurrFxRateCalc?: string// [49] 156 (String)
  CommType?: string// [50] 13 (String)
  Commission?: number// [51] 12 (Float)
  CustOrderCapacity?: number// [52] 582 (Int)
  ExDestination?: string// [53] 100 (String)
  OrderCapacity?: string// [54] 528 (String)
  PriceType?: number// [55] 423 (Int)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [56] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [57] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Text?: string// [58] 58 (String)
  EncodedTextLen?: number// [59] 354 (Int)
  EncodedText?: Buffer// [60] 355 (RawData)
  StandardTrailer: IStandardTrailer// [61] SignatureLength.93, Signature.89, CheckSum.10
}
