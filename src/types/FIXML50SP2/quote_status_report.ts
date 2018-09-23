import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStipulations } from './set/stipulations'
import { ILegQuotStatGrp } from './set/leg_quot_stat_grp'
import { IQuotQualGrp } from './set/quot_qual_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { ICommissionData } from './set/commission_data'
import { IThrottleResponse } from './set/throttle_response'

/*
*****************************************************
* QuoteStatusReport can be found in Volume 3 of the *
*                                                   *
* specification                                     *
*****************************************************
*/
export interface IQuoteStatusReport {
  OrdStatusReqID?: string// 790
  MDStatisticReqID?: string// 2452
  QuoteID?: string// 117
  BidID?: string// 390
  OfferID?: string// 1867
  SecondaryQuoteID?: string// 1751
  QuoteMsgID?: string// 1166
  QuoteRespID?: string// 693
  UnderlyingReturnRateValuationDateType?: number// 43073
  QuoteCancelType?: number// 298
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  RelativeValueSide?: number// 2532
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  UnderlyingReturnRatePriceCurrency?: string// 43067
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  NegotiationMethod?: number// 2115
  ExpireTime?: Date// 126
  UnderlyingReturnRatePrice?: number// 43066
  UnderlyingReturnRatePriceType?: number// 43068
  BidQuoteID?: string// 1747
  OfferQuoteID?: string// 1748
  BidMDEntryID?: string// 1745
  OfferMDEntryID?: string// 1746
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
  ValidUntilTime?: Date// 62
  BidSpotRate?: number// 188
  OfferSpotRate?: number// 190
  BidForwardPoints?: string// 189
  OfferForwardPoints?: string// 191
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
  MDStatisticStatus?: number// 2477
  CollRptRejectReason?: number// 2487
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StrikeTime?: Date// 443
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  OrderQtyData?: IOrderQtyData
  Stipulations?: IStipulations[]
  LegQuotStatGrp?: ILegQuotStatGrp[]
  QuotQualGrp?: IQuotQualGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  CommissionData?: ICommissionData
  ThrottleResponse?: IThrottleResponse
}
