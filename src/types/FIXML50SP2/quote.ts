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
  MDStatisticReqID?: string// 2452
  QuoteID: string// 117
  BidID?: string// 390
  OfferID?: string// 1867
  SecondaryQuoteID?: string// 1751
  QuoteMsgID?: string// 1166
  QuoteRespID?: string// 693
  UnderlyingReturnRateValuationDateType?: number// 43073
  QuoteModelType?: number// 2403
  PrivateQuote?: string// 1171
  NegotiationMethod?: number// 2115
  QuoteResponseLevel?: number// 301
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  RelativeValueSide?: number// 2532
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  LegBidPx?: number// 681
  LegOfferPx?: number// 684
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
  BidForwardPoints?: string// 189
  OfferForwardPoints?: string// 191
  BidSwapPoints?: string// 1065
  OfferSwapPoints?: string// 1066
  LegMidPx?: number// 2346
  BidYield?: number// 632
  MidYield?: number// 633
  OfferYield?: number// 634
  RelSymTransactTime?: Date// 1504
  OrdType?: string// 40
  BidForwardPoints2?: string// 642
  OfferForwardPoints2?: string// 643
  SettlCurrBidFxRate?: string// 656
  SettlCurrOfferFxRate?: string// 657
  SettlCurrFxRateCalc?: string// 156
  AllocCustomerCapacity?: string// 993
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  BookingType?: number// 775
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  UnderlyingReturnRatePriceType?: number// 43068
  BidSpread?: string// 2533
  OfferSpread?: string// 2534
  SelfMatchPreventionID?: string// 2362
  ThrottleInst?: number// 1685
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: string// 2351
  EncodedComplianceText?: Buffer// 2352
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
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
