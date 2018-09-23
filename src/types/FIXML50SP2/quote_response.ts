import { IStandardHeader } from './set/standard_header'
import { IQuotQualGrp } from './set/quot_qual_grp'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStipulations } from './set/stipulations'
import { ILegQuotGrp } from './set/leg_quot_grp'
import { ICommissionData } from './set/commission_data'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'

/*
*************************************************
* QuoteResponse can be found in Volume 3 of the *
*                                               *
* specification                                 *
*************************************************
*/
export interface IQuoteResponse {
  QuoteRespID: string// 693
  QuoteID?: string// 117
  QuoteMsgID?: string// 1166
  MDStatisticReqID?: string// 2452
  QuoteRespType: number// 694
  ClOrdID?: string// 11
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  IOIID?: string// 23
  UnderlyingReturnRateValuationDateType?: number// 43073
  PreTradeAnonymity?: string// 1091
  TrdType?: number// 828
  RegulatoryTransactionType?: number// 2347
  NegotiationMethod?: number// 2115
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  RelativeValueSide?: number// 2532
  MinQty?: number// 110
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  UnderlyingReturnRatePriceCurrency?: string// 43067
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  LegBidPx?: number// 681
  LegOfferPx?: number// 684
  MktBidPx?: number// 645
  MktOfferPx?: number// 646
  MinBidSize?: number// 647
  BidSize?: number// 134
  MinOfferSize?: number// 648
  OfferSize?: number// 135
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
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  UnderlyingReturnRatePrice?: number// 43066
  UnderlyingReturnRatePriceType?: number// 43068
  CoverPrice?: number// 1917
  StrikeTime?: Date// 443
  StandardHeader?: IStandardHeader
  QuotQualGrp?: IQuotQualGrp[]
  Parties?: IParties[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  OrderQtyData?: IOrderQtyData
  Stipulations?: IStipulations[]
  LegQuotGrp?: ILegQuotGrp[]
  CommissionData?: ICommissionData
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
}
