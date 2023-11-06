import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'

/*
**************************************************************
* PositionMaintenanceRequest can be found in Volume 5 of the *
*                                                            *
* specification                                              *
**************************************************************
*/
export interface IPositionMaintenanceRequest {
  PosReqID?: string// [2] 710 (String)
  PosTransType: number// [2] 709 (Int)
  PosMaintAction: number// [2] 712 (Int)
  OrigPosReqRefID?: string// [2] 713 (String)
  PosMaintRptRefID?: string// [2] 714 (String)
  ClearingBusinessDate: Date// [2] 715 (LocalDate)
  SettlDate?: Date// [2] 64 (LocalDate)
  SettlSessID?: string// [2] 716 (String)
  SettlSessSubID?: string// [2] 717 (String)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  Currency?: string// [2] 15 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  AdjustmentType?: number// [2] 718 (Int)
  ContraryInstructionIndicator?: boolean// [2] 719 (Boolean)
  PriorSpreadIndicator?: boolean// [2] 720 (Boolean)
  ThresholdAmount?: number// [2] 834 (Float)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  SettlCurrency?: string// [2] 120 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  Instrument?: IInstrument// [3] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrmtLegGrp?: IInstrmtLegGrp[]// [4] Sym.600, Sfx.601 .. ExchLookAlike.2607
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [5] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] Sym.311, Sfx.312 .. XID.2631
  TrdgSesGrp?: ITrdgSesGrp[]// [7] SesID.336, SesSub.625
  PositionQty?: IPositionQty[]// [8] Typ.703, Long.704 .. UOMCcy.1835
  PositionAmountData?: IPositionAmountData[]// [9] Typ.707, Amt.708 .. MktID.2100
}
