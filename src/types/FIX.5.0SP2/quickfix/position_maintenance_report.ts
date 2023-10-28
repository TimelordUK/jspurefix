import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IPaymentGrp } from './set/payment_grp'
import { IRelatedTradeGrp } from './set/related_trade_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPositionMaintenanceReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosMaintRptID: string// [2] 721 (String)
  PosTransType: number// [3] 709 (Int)
  PositionID?: string// [4] 2618 (String)
  PosReqID?: string// [5] 710 (String)
  PosMaintAction: number// [6] 712 (Int)
  OrigPosReqRefID?: string// [7] 713 (String)
  PosMaintStatus?: number// [8] 722 (Int)
  PosMaintResult?: number// [9] 723 (Int)
  ClearingBusinessDate: Date// [10] 715 (LocalDate)
  PreviousClearingBusinessDate?: Date// [11] 2084 (LocalDate)
  ValuationDate?: Date// [12] 2085 (LocalDate)
  ValuationTime?: string// [13] 2086 (String)
  ValuationBusinessCenter?: string// [14] 2087 (String)
  DiscountFactor?: number// [15] 1592 (Float)
  RejectText?: string// [16] 1328 (String)
  EncodedRejectTextLen?: number// [17] 1664 (Length)
  EncodedRejectText?: Buffer// [18] 1665 (RawData)
  SettlSessID?: string// [19] 716 (String)
  SettlSessSubID?: string// [20] 717 (String)
  ClearedIndicator?: number// [21] 1832 (Int)
  ContractRefPosType?: number// [22] 1833 (Int)
  PositionCapacity?: number// [23] 1834 (Int)
  TerminatedIndicator?: boolean// [24] 2101 (Boolean)
  InputSource?: string// [25] 979 (String)
  Parties?: IParties// [26] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Account?: string// [27] 1 (String)
  AcctIDSource?: number// [28] 660 (Int)
  AccountType?: number// [29] 581 (Int)
  PosMaintRptRefID?: string// [30] 714 (String)
  Instrument?: IInstrument// [31] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  Currency?: string// [32] 15 (String)
  CurrencyCodeSource?: string// [33] 2897 (String)
  SettlDate?: Date// [34] 64 (LocalDate)
  SettlCurrency?: string// [35] 120 (String)
  SettlCurrencyCodeSource?: string// [36] 2899 (String)
  ContraryInstructionIndicator?: boolean// [37] 719 (Boolean)
  PriorSpreadIndicator?: boolean// [38] 720 (Boolean)
  InstrmtLegGrp?: IInstrmtLegGrp// [39] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  RelatedInstrumentGrp?: IRelatedInstrumentGrp// [40] NoRelatedInstruments.1647, RelatedInstrumentType.1648 .. RelatedToDividendPeriodXIDRef.2417
  UndInstrmtGrp?: IUndInstrmtGrp// [41] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  TrdgSesGrp?: ITrdgSesGrp// [42] NoTradingSessions.386, TradingSessionID.336, TradingSessionSubID.625
  TransactTime?: Date// [43] 60 (UtcTimestamp)
  PositionQty?: IPositionQty// [44] NoPositions.702, PosType.703 .. NestedPartySubIDType.805
  PositionAmountData?: IPositionAmountData// [45] NoPosAmt.753, PosAmtType.707 .. PosAmtPriceType.2877
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp// [46] NoRegulatoryTradeIDs.1907, RegulatoryTradeID.1903 .. RegulatoryTradeIDScope.2397
  PaymentGrp?: IPaymentGrp// [47] NoPayments.40212, PaymentType.40213 .. EncodedPaymentText.40985
  AdjustmentType?: number// [48] 718 (Int)
  ThresholdAmount?: number// [49] 834 (Float)
  RelatedTradeGrp?: IRelatedTradeGrp// [50] NoRelatedTrades.1855, RelatedTradeID.1856 .. RelatedTradeQuantity.1860
  Text?: string// [51] 58 (String)
  EncodedTextLen?: number// [52] 354 (Length)
  EncodedText?: Buffer// [53] 355 (RawData)
  StandardTrailer: IStandardTrailer// [54] SignatureLength.93, Signature.89, CheckSum.10
}
