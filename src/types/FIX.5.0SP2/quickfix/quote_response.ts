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
* The Quote Response message is used to respond to a IOI       *
* message or Quote message. It is also used to counter a Quote *
* or end a negotiation dialog.                                 *
****************************************************************
*/
export interface IQuoteResponse {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteRespID: string// [2] 693 (String)
  QuoteID?: string// [3] 117 (String)
  QuoteMsgID?: string// [4] 1166 (String)
  QuoteRespType: number// [5] 694 (Int)
  ClOrdID?: string// [6] 11 (String)
  OrderCapacity?: string// [7] 528 (String)
  OrderRestrictions?: string// [8] 529 (String)
  IOIID?: string// [9] 23 (String)
  QuoteType?: number// [10] 537 (Int)
  PreTradeAnonymity?: boolean// [11] 1091 (Boolean)
  QuotQualGrp?: IQuotQualGrp[]// [12] QuoteQualifier.695
  Parties?: IParties[]// [13] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradingSessionID?: string// [14] 336 (String)
  TradingSessionSubID?: string// [15] 625 (String)
  Instrument: IInstrument// [16] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  FinancingDetails?: IFinancingDetails// [17] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [18] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  Side?: string// [19] 54 (String)
  OrderQtyData?: IOrderQtyData// [20] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  MinQty?: number// [21] 110 (Float)
  SettlType?: string// [22] 63 (String)
  SettlDate?: Date// [23] 64 (LocalDate)
  SettlDate2?: Date// [24] 193 (LocalDate)
  OrderQty2?: number// [25] 192 (Float)
  Currency?: string// [26] 15 (String)
  Stipulations?: IStipulations[]// [27] StipulationType.233, StipulationValue.234
  Account?: string// [28] 1 (String)
  AcctIDSource?: number// [29] 660 (Int)
  AccountType?: number// [30] 581 (Int)
  LegQuotGrp?: ILegQuotGrp[]// [31] LegSymbol.600, LegSymbolSfx.601 .. LegOfferForwardPoints.1068
  BidPx?: number// [32] 132 (Float)
  OfferPx?: number// [33] 133 (Float)
  MktBidPx?: number// [34] 645 (Float)
  MktOfferPx?: number// [35] 646 (Float)
  MinBidSize?: number// [36] 647 (Float)
  BidSize?: number// [37] 134 (Float)
  MinOfferSize?: number// [38] 648 (Float)
  OfferSize?: number// [39] 135 (Float)
  ValidUntilTime?: Date// [40] 62 (UtcTimestamp)
  BidSpotRate?: number// [41] 188 (Float)
  OfferSpotRate?: number// [42] 190 (Float)
  BidForwardPoints?: number// [43] 189 (Float)
  OfferForwardPoints?: number// [44] 191 (Float)
  MidPx?: number// [45] 631 (Float)
  BidYield?: number// [46] 632 (Float)
  MidYield?: number// [47] 633 (Float)
  OfferYield?: number// [48] 634 (Float)
  TransactTime?: Date// [49] 60 (UtcTimestamp)
  OrdType?: string// [50] 40 (String)
  BidForwardPoints2?: number// [51] 642 (Float)
  OfferForwardPoints2?: number// [52] 643 (Float)
  SettlCurrBidFxRate?: number// [53] 656 (Float)
  SettlCurrOfferFxRate?: number// [54] 657 (Float)
  SettlCurrFxRateCalc?: string// [55] 156 (String)
  Commission?: number// [56] 12 (Float)
  CommType?: string// [57] 13 (String)
  CustOrderCapacity?: number// [58] 582 (Int)
  ExDestination?: string// [59] 100 (String)
  ExDestinationIDSource?: string// [60] 1133 (String)
  Text?: string// [61] 58 (String)
  EncodedTextLen?: number// [62] 354 (Int)
  EncodedText?: Buffer// [63] 355 (RawData)
  Price?: number// [64] 44 (Float)
  PriceType?: number// [65] 423 (Int)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [66] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [67] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  StandardTrailer: IStandardTrailer// [68] SignatureLength.93, Signature.89, CheckSum.10
}
