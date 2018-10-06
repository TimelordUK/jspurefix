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
  QuoteReqID?: string// 131
  QuoteID: string// 117
  BidID?: string// 390
  OfferID?: string// 1867
  SecondaryQuoteID?: string// 1751
  QuoteMsgID?: string// 1166
  QuoteRespID?: string// 693
  QuoteType?: number// 537
  QuoteModelType?: number// 2403
  PrivateQuote?: boolean// 1171
  NegotiationMethod?: number// 2115
  QuoteResponseLevel?: number// 301
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Side?: string// 54
  SettlType?: string// 63
  SettlDate?: Date// 64
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  Currency?: string// 15
  SettlCurrency?: string// 120
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  BidPx?: number// 132
  OfferPx?: number// 133
  MktBidPx?: number// 645
  MktOfferPx?: number// 646
  MinBidSize?: number// 647
  BidSize?: number// 134
  TotalBidSize?: number// 1749
  MinOfferSize?: number// 648
  OfferSize?: number// 135
  TotalOfferSize?: number// 1750
  MinQty?: number// 110
  ExposureDuration?: number// 1629
  ExposureDurationUnit?: number// 1916
  ValidUntilTime?: Date// 62
  BidSpotRate?: number// 188
  OfferSpotRate?: number// 190
  BidForwardPoints?: number// 189
  OfferForwardPoints?: number// 191
  BidSwapPoints?: number// 1065
  OfferSwapPoints?: number// 1066
  MidPx?: number// 631
  BidYield?: number// 632
  MidYield?: number// 633
  OfferYield?: number// 634
  TransactTime?: Date// 60
  OrdType?: string// 40
  BidForwardPoints2?: number// 642
  OfferForwardPoints2?: number// 643
  SettlCurrBidFxRate?: number// 656
  SettlCurrOfferFxRate?: number// 657
  SettlCurrFxRateCalc?: string// 156
  CustOrderCapacity?: number// 582
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  BookingType?: number// 775
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  PriceType?: number// 423
  BidSpread?: number// 2533
  OfferSpread?: number// 2534
  SelfMatchPreventionID?: string// 2362
  ThrottleInst?: number// 1685
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: number// 2351
  EncodedComplianceText?: Buffer// 2352
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StrikeTime?: Date// 443
  StandardHeader?: IStandardHeader
  QuotQualGrp?: IQuotQualGrp[]
  ValueChecksGrp?: IValueChecksGrp[]
  Parties?: IParties[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  OrderQtyData?: IOrderQtyData
  RateSource?: IRateSource[]
  Stipulations?: IStipulations[]
  LegQuotGrp?: ILegQuotGrp[]
  CommissionData?: ICommissionData
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  RelativeValueGrp?: IRelativeValueGrp[]
  YieldData?: IYieldData
  RoutingGrp?: IRoutingGrp[]
}
