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
import { ITargetParties } from './set/target_parties'

/*
****************************************************************
* The quote status report message is used:                     *
* " as the response to a Quote Status Request message          *
* " as a response to a Quote Cancel message                    *
* " as a response to a Quote Response message in a negotiation *
* dialog (see Volume 7  PRODUCT: FIXED INCOME and USER GROUP: *
* EXCHANGES AND MARKETS)                                       *
****************************************************************
*/
export interface IQuoteStatusReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteStatusReqID?: string// [2] 649 (String)
  QuoteReqID?: string// [3] 131 (String)
  QuoteID?: string// [4] 117 (String)
  QuoteMsgID?: string// [5] 1166 (String)
  QuoteRespID?: string// [6] 693 (String)
  QuoteType?: number// [7] 537 (Int)
  QuoteCancelType?: number// [8] 298 (Int)
  Parties?: IParties[]// [9] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradingSessionID?: string// [10] 336 (String)
  TradingSessionSubID?: string// [11] 625 (String)
  Instrument?: IInstrument// [12] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  FinancingDetails?: IFinancingDetails// [13] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [14] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  Side?: string// [15] 54 (String)
  OrderQtyData?: IOrderQtyData// [16] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  SettlType?: string// [17] 63 (String)
  SettlDate?: Date// [18] 64 (LocalDate)
  SettlDate2?: Date// [19] 193 (LocalDate)
  OrderQty2?: number// [20] 192 (Float)
  Currency?: string// [21] 15 (String)
  Stipulations?: IStipulations[]// [22] StipulationType.233, StipulationValue.234
  Account?: string// [23] 1 (String)
  AcctIDSource?: number// [24] 660 (Int)
  AccountType?: number// [25] 581 (Int)
  LegQuotStatGrp?: ILegQuotStatGrp[]// [26] LegSymbol.600, LegSymbolSfx.601 .. NestedPartySubIDType.805
  QuotQualGrp?: IQuotQualGrp[]// [27] QuoteQualifier.695
  ExpireTime?: Date// [28] 126 (UtcTimestamp)
  Price?: number// [29] 44 (Float)
  PriceType?: number// [30] 423 (Int)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [31] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [32] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  BidPx?: number// [33] 132 (Float)
  OfferPx?: number// [34] 133 (Float)
  MktBidPx?: number// [35] 645 (Float)
  MktOfferPx?: number// [36] 646 (Float)
  MinBidSize?: number// [37] 647 (Float)
  BidSize?: number// [38] 134 (Float)
  MinOfferSize?: number// [39] 648 (Float)
  OfferSize?: number// [40] 135 (Float)
  MinQty?: number// [41] 110 (Float)
  ValidUntilTime?: Date// [42] 62 (UtcTimestamp)
  BidSpotRate?: number// [43] 188 (Float)
  OfferSpotRate?: number// [44] 190 (Float)
  BidForwardPoints?: number// [45] 189 (Float)
  OfferForwardPoints?: number// [46] 191 (Float)
  MidPx?: number// [47] 631 (Float)
  BidYield?: number// [48] 632 (Float)
  MidYield?: number// [49] 633 (Float)
  OfferYield?: number// [50] 634 (Float)
  TransactTime?: Date// [51] 60 (UtcTimestamp)
  OrdType?: string// [52] 40 (String)
  BidForwardPoints2?: number// [53] 642 (Float)
  OfferForwardPoints2?: number// [54] 643 (Float)
  SettlCurrBidFxRate?: number// [55] 656 (Float)
  SettlCurrOfferFxRate?: number// [56] 657 (Float)
  SettlCurrFxRateCalc?: string// [57] 156 (String)
  CommType?: string// [58] 13 (String)
  Commission?: number// [59] 12 (Float)
  CustOrderCapacity?: number// [60] 582 (Int)
  ExDestination?: string// [61] 100 (String)
  ExDestinationIDSource?: string// [62] 1133 (String)
  QuoteStatus?: number// [63] 297 (Int)
  QuoteRejectReason?: number// [64] 300 (Int)
  Text?: string// [65] 58 (String)
  EncodedTextLen?: number// [66] 354 (Int)
  EncodedText?: Buffer// [67] 355 (RawData)
  StandardTrailer: IStandardTrailer// [68] SignatureLength.93, Signature.89, CheckSum.10
  BookingType?: number// [69] 775 (Int)
  OrderCapacity?: string// [70] 528 (String)
  OrderRestrictions?: string// [71] 529 (String)
  TargetParties?: ITargetParties[]// [72] TargetPartyID.1462, TargetPartyIDSource.1463, TargetPartyRole.1464
}
