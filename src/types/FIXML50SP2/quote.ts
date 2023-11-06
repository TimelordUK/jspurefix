import { IStandardHeader } from './set/standard_header'
import { IQuotQualGrp } from './set/quot_qual_grp'
import { IValueChecksGrp } from './set/value_checks_grp'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IRateSource } from './set/rate_source'
import { IStipulations } from './set/stipulations'
import { ILegQuotGrp } from './set/leg_quot_grp'
import { ICommissionData } from './set/commission_data'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IRelativeValueGrp } from './set/relative_value_grp'
import { IYieldData } from './set/yield_data'
import { IRoutingGrp } from './set/routing_grp'

/*
*****************************************
* Quote can be found in Volume 3 of the *
*                                       *
* specification                         *
*****************************************
*/
export interface IQuote {
  QuoteReqID?: string// [2] 131 (String)
  QuoteID: string// [2] 117 (String)
  BidID?: string// [2] 390 (String)
  OfferID?: string// [2] 1867 (String)
  SecondaryQuoteID?: string// [2] 1751 (String)
  QuoteMsgID?: string// [2] 1166 (String)
  QuoteRespID?: string// [2] 693 (String)
  QuoteType?: number// [2] 537 (Int)
  QuoteModelType?: number// [2] 2403 (Int)
  PrivateQuote?: boolean// [2] 1171 (Boolean)
  NegotiationMethod?: number// [2] 2115 (Int)
  QuoteResponseLevel?: number// [2] 301 (Int)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  Side?: string// [2] 54 (String)
  SettlType?: string// [2] 63 (String)
  SettlDate?: Date// [2] 64 (LocalDate)
  SettlDate2?: Date// [2] 193 (LocalDate)
  OrderQty2?: number// [2] 192 (Float)
  Currency?: string// [2] 15 (String)
  SettlCurrency?: string// [2] 120 (String)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  BidPx?: number// [2] 132 (Float)
  OfferPx?: number// [2] 133 (Float)
  MktBidPx?: number// [2] 645 (Float)
  MktOfferPx?: number// [2] 646 (Float)
  MinBidSize?: number// [2] 647 (Float)
  BidSize?: number// [2] 134 (Float)
  TotalBidSize?: number// [2] 1749 (Float)
  MinOfferSize?: number// [2] 648 (Float)
  OfferSize?: number// [2] 135 (Float)
  TotalOfferSize?: number// [2] 1750 (Float)
  MinQty?: number// [2] 110 (Float)
  ExposureDuration?: number// [2] 1629 (Int)
  ExposureDurationUnit?: number// [2] 1916 (Int)
  ValidUntilTime?: Date// [2] 62 (UtcTimestamp)
  BidSpotRate?: number// [2] 188 (Float)
  OfferSpotRate?: number// [2] 190 (Float)
  BidForwardPoints?: number// [2] 189 (Float)
  OfferForwardPoints?: number// [2] 191 (Float)
  BidSwapPoints?: number// [2] 1065 (Float)
  OfferSwapPoints?: number// [2] 1066 (Float)
  MidPx?: number// [2] 631 (Float)
  BidYield?: number// [2] 632 (Float)
  MidYield?: number// [2] 633 (Float)
  OfferYield?: number// [2] 634 (Float)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  OrdType?: string// [2] 40 (String)
  BidForwardPoints2?: number// [2] 642 (Float)
  OfferForwardPoints2?: number// [2] 643 (Float)
  SettlCurrBidFxRate?: number// [2] 656 (Float)
  SettlCurrOfferFxRate?: number// [2] 657 (Float)
  SettlCurrFxRateCalc?: string// [2] 156 (String)
  CustOrderCapacity?: number// [2] 582 (Int)
  ExDestination?: string// [2] 100 (String)
  ExDestinationIDSource?: string// [2] 1133 (String)
  BookingType?: number// [2] 775 (Int)
  OrderCapacity?: string// [2] 528 (String)
  OrderRestrictions?: string// [2] 529 (String)
  PriceType?: number// [2] 423 (Int)
  BidSpread?: number// [2] 2533 (Float)
  OfferSpread?: number// [2] 2534 (Float)
  SelfMatchPreventionID?: string// [2] 2362 (String)
  ThrottleInst?: number// [2] 1685 (Int)
  ComplianceID?: string// [2] 376 (String)
  ComplianceText?: string// [2] 2404 (String)
  EncodedComplianceTextLen?: number// [2] 2351 (Length)
  EncodedComplianceText?: Buffer// [2] 2352 (RawData)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StrikeTime?: Date// [2] 443 (UtcTimestamp)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  QuotQualGrp?: IQuotQualGrp[]// [2] Qual.695
  ValueChecksGrp?: IValueChecksGrp[]// [3] Typ.1869, Actn.1870
  Parties?: IParties[]// [4] ID.448, Src.447 .. Qual.2376
  Instrument?: IInstrument// [5] Sym.55, Sfx.65 .. ExchLookAlike.2603
  FinancingDetails?: IFinancingDetails// [6] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [7] Sym.311, Sfx.312 .. XID.2631
  OrderQtyData?: IOrderQtyData// [8] Qty.38, Cash.152 .. RndMod.469
  RateSource?: IRateSource[]// [9] RtSrc.1446, RtSrcTyp.1447 .. RefHdng.2412
  Stipulations?: IStipulations[]// [10] Typ.233, Val.234
  LegQuotGrp?: ILegQuotGrp[]// [11] OrdQty.685, Qty.687 .. LegOfrFwdPnts.1068
  CommissionData?: ICommissionData// [12] Comm.12, CommTyp.13 .. FundRenewWaiv.497
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [13] Spread.218, Ccy.220 .. SecIDSrc.761
  RelativeValueGrp?: IRelativeValueGrp[]// [14] Typ.139, Val.2531, Side.2532
  YieldData?: IYieldData// [15] Typ.235, Yld.236 .. RedPxTyp.698
  RoutingGrp?: IRoutingGrp[]// [16] RtgTyp.216, RtgID.217
}
