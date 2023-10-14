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
import { IRateSource } from './set/rate_source'

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
  QuoteMsgID?: string// [4] 1166 (String)
  QuoteRespID?: string// [5] 693 (String)
  QuoteType?: number// [6] 537 (Int)
  PrivateQuote?: boolean// [7] 1171 (Boolean)
  QuotQualGrp?: IQuotQualGrp[]// [8] QuoteQualifier.695
  QuoteResponseLevel?: number// [9] 301 (Int)
  Parties?: IParties[]// [10] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradingSessionID?: string// [11] 336 (String)
  TradingSessionSubID?: string// [12] 625 (String)
  Instrument: IInstrument// [13] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  FinancingDetails?: IFinancingDetails// [14] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [15] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  Side?: string// [16] 54 (String)
  OrderQtyData?: IOrderQtyData// [17] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  SettlType?: string// [18] 63 (String)
  SettlDate?: Date// [19] 64 (LocalDate)
  SettlDate2?: Date// [20] 193 (LocalDate)
  OrderQty2?: number// [21] 192 (Float)
  Currency?: string// [22] 15 (String)
  Stipulations?: IStipulations[]// [23] StipulationType.233, StipulationValue.234
  Account?: string// [24] 1 (String)
  AcctIDSource?: number// [25] 660 (Int)
  AccountType?: number// [26] 581 (Int)
  LegQuotGrp?: ILegQuotGrp[]// [27] LegSymbol.600, LegSymbolSfx.601 .. LegOfferForwardPoints.1068
  BidPx?: number// [28] 132 (Float)
  OfferPx?: number// [29] 133 (Float)
  MktBidPx?: number// [30] 645 (Float)
  MktOfferPx?: number// [31] 646 (Float)
  MinBidSize?: number// [32] 647 (Float)
  BidSize?: number// [33] 134 (Float)
  MinOfferSize?: number// [34] 648 (Float)
  OfferSize?: number// [35] 135 (Float)
  MinQty?: number// [36] 110 (Float)
  ValidUntilTime?: Date// [37] 62 (UtcTimestamp)
  BidSpotRate?: number// [38] 188 (Float)
  OfferSpotRate?: number// [39] 190 (Float)
  BidForwardPoints?: number// [40] 189 (Float)
  OfferForwardPoints?: number// [41] 191 (Float)
  BidSwapPoints?: number// [42] 1065 (Float)
  OfferSwapPoints?: number// [43] 1066 (Float)
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
  ExDestinationIDSource?: string// [59] 1133 (String)
  OrderCapacity?: string// [60] 528 (String)
  PriceType?: number// [61] 423 (Int)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [62] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [63] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  Text?: string// [64] 58 (String)
  EncodedTextLen?: number// [65] 354 (Int)
  EncodedText?: Buffer// [66] 355 (RawData)
  StandardTrailer: IStandardTrailer// [67] SignatureLength.93, Signature.89, CheckSum.10
  BookingType?: number// [68] 775 (Int)
  OrderRestrictions?: string// [69] 529 (String)
  SettlCurrency?: string// [70] 120 (String)
  RateSource?: IRateSource[]// [71] RateSource.1446, RateSourceType.1447, ReferencePage.1448
}
