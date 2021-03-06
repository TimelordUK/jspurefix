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
  QuoteReqID?: string// 131
  QuoteRespType: number// 694
  ClOrdID?: string// 11
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  IOIID?: string// 23
  QuoteType?: number// 537
  PreTradeAnonymity?: boolean// 1091
  TrdType?: number// 828
  RegulatoryTransactionType?: number// 2347
  NegotiationMethod?: number// 2115
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Side?: string// 54
  MinQty?: number// 110
  SettlType?: string// 63
  SettlDate?: Date// 64
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  Currency?: string// 15
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  BidPx?: number// 132
  OfferPx?: number// 133
  MktBidPx?: number// 645
  MktOfferPx?: number// 646
  MinBidSize?: number// 647
  BidSize?: number// 134
  MinOfferSize?: number// 648
  OfferSize?: number// 135
  ValidUntilTime?: Date// 62
  BidSpotRate?: number// 188
  OfferSpotRate?: number// 190
  BidForwardPoints?: number// 189
  OfferForwardPoints?: number// 191
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
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  Price?: number// 44
  PriceType?: number// 423
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
