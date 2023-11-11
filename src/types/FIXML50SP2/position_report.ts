import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { ICollateralAmountGrp } from './set/collateral_amount_grp'
import { IPosUndInstrmtGrp } from './set/pos_und_instrmt_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IPaymentGrp } from './set/payment_grp'
import { IRelatedTradeGrp } from './set/related_trade_grp'

/*
**************************************************
* PositionReport can be found in Volume 5 of the *
*                                                *
* specification                                  *
**************************************************
*/
export interface IPositionReport {
  PosMaintRptID: string// [2] 721 (String)
  PositionID?: string// [2] 2618 (String)
  PosReqID?: string// [2] 710 (String)
  PosReqType?: number// [2] 724 (Int)
  PosReportAction?: number// [2] 2364 (Int)
  MarginReqmtInqID?: string// [2] 1635 (String)
  SubscriptionRequestType?: string// [2] 263 (String)
  TotalNumPosReports?: number// [2] 727 (Int)
  TotNumReports?: number// [2] 911 (Int)
  LastRptRequested?: boolean// [2] 912 (Boolean)
  PosMaintResult?: number// [2] 723 (Int)
  UnsolicitedIndicator?: boolean// [2] 325 (Boolean)
  ClearingBusinessDate: Date// [2] 715 (LocalDate)
  PreviousClearingBusinessDate?: Date// [2] 2084 (LocalDate)
  SettlSessID?: string// [2] 716 (String)
  SettlSessSubID?: string// [2] 717 (String)
  PriceType?: number// [2] 423 (Int)
  SettlCurrency?: string// [2] 120 (String)
  MessageEventSource?: string// [2] 1011 (String)
  ClearedIndicator?: number// [2] 1832 (Int)
  ContractRefPosType?: number// [2] 1833 (Int)
  PositionCapacity?: number// [2] 1834 (Int)
  TerminatedIndicator?: boolean// [2] 2101 (Boolean)
  IntraFirmTradeIndicator?: boolean// [2] 2373 (Boolean)
  TradeContinuation?: number// [2] 1937 (Int)
  TradeContinuationText?: string// [2] 2374 (String)
  EncodedTradeContinuationTextLen?: number// [2] 2372 (Length)
  EncodedTradeContinuationText?: Buffer// [2] 2371 (RawData)
  TradeCollateralization?: number// [2] 1936 (Int)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  TaxonomyType?: string// [2] 2375 (String)
  Currency?: string// [2] 15 (String)
  SettlDate?: Date// [2] 64 (LocalDate)
  SettlPrice?: number// [2] 730 (Float)
  SettlPriceFxRateCalc?: string// [2] 2366 (String)
  SettlForwardPoints?: number// [2] 2365 (Float)
  SettlPriceUnitOfMeasure?: string// [2] 1886 (String)
  SettlPriceUnitOfMeasureCurrency?: string// [2] 1887 (String)
  SettlPriceType?: number// [2] 731 (Int)
  PriorSettlPrice?: number// [2] 734 (Float)
  PositionContingentPrice?: number// [2] 1595 (Float)
  DiscountFactor?: number// [2] 1592 (Float)
  ValuationDate?: Date// [2] 2085 (LocalDate)
  ValuationTime?: string// [2] 2086 (String)
  ValuationBusinessCenter?: string// [2] 2087 (String)
  MatchStatus?: string// [2] 573 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  RegistStatus?: string// [2] 506 (String)
  DeliveryDate?: Date// [2] 743 (LocalDate)
  ModelType?: number// [2] 1434 (Int)
  PriceDelta?: number// [2] 811 (Float)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  Instrument?: IInstrument// [4] Sym.55, Sfx.65 .. ExchLookAlike.2603
  FinancingDetails?: IFinancingDetails// [5] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  InstrmtLegGrp?: IInstrmtLegGrp[]// [6] Sym.600, Sfx.601 .. ExchLookAlike.2607
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [7] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
  CollateralAmountGrp?: ICollateralAmountGrp[]// [8] Amt.1704, Ccy.1705 .. MktPx.2689
  PosUndInstrmtGrp?: IPosUndInstrmtGrp[]// [9] UndSetPx.732, UndSetPxTyp.733, UndlyDlvAmt.1037
  PositionQty?: IPositionQty[]// [10] Typ.703, Long.704 .. UOMCcy.1835
  PositionAmountData?: IPositionAmountData[]// [11] Typ.707, Amt.708 .. MktID.2100
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]// [12] ID.1903, Src.1905 .. Scope.2397
  PaymentGrp?: IPaymentGrp[]// [13] Typ.139, SubTyp.40993 .. EncTxt.40985
  RelatedTradeGrp?: IRelatedTradeGrp[]// [14] ID.1856, Src.1857 .. Qty.1860
}
