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
  QuoteRespID: string// [2] 693 (String)
  QuoteID?: string// [2] 117 (String)
  QuoteMsgID?: string// [2] 1166 (String)
  QuoteReqID?: string// [2] 131 (String)
  QuoteRespType: number// [2] 694 (Int)
  ClOrdID?: string// [2] 11 (String)
  OrderCapacity?: string// [2] 528 (String)
  OrderRestrictions?: string// [2] 529 (String)
  IOIID?: string// [2] 23 (String)
  QuoteType?: number// [2] 537 (Int)
  PreTradeAnonymity?: boolean// [2] 1091 (Boolean)
  TrdType?: number// [2] 828 (Int)
  RegulatoryTransactionType?: number// [2] 2347 (Int)
  NegotiationMethod?: number// [2] 2115 (Int)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  Side?: string// [2] 54 (String)
  MinQty?: number// [2] 110 (Float)
  SettlType?: string// [2] 63 (String)
  SettlDate?: Date// [2] 64 (LocalDate)
  SettlDate2?: Date// [2] 193 (LocalDate)
  OrderQty2?: number// [2] 192 (Float)
  Currency?: string// [2] 15 (String)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  BidPx?: number// [2] 132 (Float)
  OfferPx?: number// [2] 133 (Float)
  MktBidPx?: number// [2] 645 (Float)
  MktOfferPx?: number// [2] 646 (Float)
  MinBidSize?: number// [2] 647 (Float)
  BidSize?: number// [2] 134 (Float)
  MinOfferSize?: number// [2] 648 (Float)
  OfferSize?: number// [2] 135 (Float)
  ValidUntilTime?: Date// [2] 62 (UtcTimestamp)
  BidSpotRate?: number// [2] 188 (Float)
  OfferSpotRate?: number// [2] 190 (Float)
  BidForwardPoints?: number// [2] 189 (Float)
  OfferForwardPoints?: number// [2] 191 (Float)
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
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  Price?: number// [2] 44 (Float)
  PriceType?: number// [2] 423 (Int)
  CoverPrice?: number// [2] 1917 (Float)
  StrikeTime?: Date// [2] 443 (UtcTimestamp)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  QuotQualGrp?: IQuotQualGrp[]// [2] Qual.695
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  Instrument?: IInstrument// [4] Sym.55, Sfx.65 .. ExchLookAlike.2603
  FinancingDetails?: IFinancingDetails// [5] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] Sym.311, Sfx.312 .. XID.2631
  OrderQtyData?: IOrderQtyData// [7] Qty.38, Cash.152 .. RndMod.469
  Stipulations?: IStipulations[]// [8] Typ.233, Val.234
  LegQuotGrp?: ILegQuotGrp[]// [9] OrdQty.685, Qty.687 .. LegOfrFwdPnts.1068
  CommissionData?: ICommissionData// [10] Comm.12, CommTyp.13 .. FundRenewWaiv.497
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [11] Spread.218, Ccy.220 .. SecIDSrc.761
  YieldData?: IYieldData// [12] Typ.235, Yld.236 .. RedPxTyp.698
}
