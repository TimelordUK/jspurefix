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
  StandardHeader: IStandardHeader
  QuoteStatusReqID?: string// 649
  QuoteReqID?: string// 131
  QuoteID?: string// 117
  QuoteMsgID?: string// 1166
  QuoteRespID?: string// 693
  QuoteType?: number// 537
  QuoteCancelType?: number// 298
  Parties?: IParties[]
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp
  Side?: string// 54
  OrderQtyData?: IOrderQtyData
  SettlType?: string// 63
  SettlDate?: Date// 64
  SettlDate2?: Date// 193
  OrderQty2?: number// 192
  Currency?: string// 15
  Stipulations?: IStipulations[]
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  LegQuotStatGrp?: ILegQuotStatGrp[]
  QuotQualGrp?: IQuotQualGrp[]
  ExpireTime?: Date// 126
  Price?: number// 44
  PriceType?: number// 423
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
  BidPx?: number// 132
  OfferPx?: number// 133
  MktBidPx?: number// 645
  MktOfferPx?: number// 646
  MinBidSize?: number// 647
  BidSize?: number// 134
  MinOfferSize?: number// 648
  OfferSize?: number// 135
  MinQty?: number// 110
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
  CommType?: string// 13
  Commission?: number// 12
  CustOrderCapacity?: number// 582
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  QuoteStatus?: number// 297
  QuoteRejectReason?: number// 300
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
  BookingType?: number// 775
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  TargetParties?: ITargetParties[]
}
