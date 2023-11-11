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

/*
*************************************************************
* PositionMaintenanceReport can be found in Volume 5 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IPositionMaintenanceReport {
  PosMaintRptID: string// [2] 721 (String)
  PosTransType: number// [2] 709 (Int)
  PositionID?: string// [2] 2618 (String)
  PosReqID?: string// [2] 710 (String)
  PosMaintAction: number// [2] 712 (Int)
  OrigPosReqRefID?: string// [2] 713 (String)
  PosMaintStatus?: number// [2] 722 (Int)
  PosMaintResult?: number// [2] 723 (Int)
  ClearingBusinessDate: Date// [2] 715 (LocalDate)
  PreviousClearingBusinessDate?: Date// [2] 2084 (LocalDate)
  ValuationDate?: Date// [2] 2085 (LocalDate)
  ValuationTime?: string// [2] 2086 (String)
  ValuationBusinessCenter?: string// [2] 2087 (String)
  DiscountFactor?: number// [2] 1592 (Float)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  SettlSessID?: string// [2] 716 (String)
  SettlSessSubID?: string// [2] 717 (String)
  ClearedIndicator?: number// [2] 1832 (Int)
  ContractRefPosType?: number// [2] 1833 (Int)
  PositionCapacity?: number// [2] 1834 (Int)
  TerminatedIndicator?: boolean// [2] 2101 (Boolean)
  InputSource?: string// [2] 979 (String)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  PosMaintRptRefID?: string// [2] 714 (String)
  Currency?: string// [2] 15 (String)
  SettlDate?: Date// [2] 64 (LocalDate)
  SettlCurrency?: string// [2] 120 (String)
  ContraryInstructionIndicator?: boolean// [2] 719 (Boolean)
  PriorSpreadIndicator?: boolean// [2] 720 (Boolean)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  AdjustmentType?: number// [2] 718 (Int)
  ThresholdAmount?: number// [2] 834 (Float)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  Instrument?: IInstrument// [3] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrmtLegGrp?: IInstrmtLegGrp[]// [4] Sym.600, Sfx.601 .. ExchLookAlike.2607
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [5] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] Sym.311, Sfx.312 .. XID.2631
  TrdgSesGrp?: ITrdgSesGrp[]// [7] SesID.336, SesSub.625
  PositionQty?: IPositionQty[]// [8] Typ.703, Long.704 .. UOMCcy.1835
  PositionAmountData?: IPositionAmountData[]// [9] Typ.707, Amt.708 .. MktID.2100
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]// [10] ID.1903, Src.1905 .. Scope.2397
  PaymentGrp?: IPaymentGrp[]// [11] Typ.139, SubTyp.40993 .. EncTxt.40985
  RelatedTradeGrp?: IRelatedTradeGrp[]// [12] ID.1856, Src.1857 .. Qty.1860
}
