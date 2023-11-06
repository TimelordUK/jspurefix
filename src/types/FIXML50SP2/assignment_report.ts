import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'

/*
****************************************************
* AssignmentReport can be found in Volume 5 of the *
*                                                  *
* specification                                    *
****************************************************
*/
export interface IAssignmentReport {
  AsgnRptID: string// [2] 833 (String)
  PosReqID?: string// [2] 710 (String)
  TotNumAssignmentReports?: number// [2] 832 (Int)
  LastRptRequested?: boolean// [2] 912 (Boolean)
  Account?: string// [2] 1 (String)
  AccountType?: number// [2] 581 (Int)
  Currency?: string// [2] 15 (String)
  ThresholdAmount?: number// [2] 834 (Float)
  SettlPrice?: number// [2] 730 (Float)
  SettlPriceType?: number// [2] 731 (Int)
  UnderlyingSettlPrice?: number// [2] 732 (Float)
  PriorSettlPrice?: number// [2] 734 (Float)
  PositionContingentPrice?: number// [2] 1595 (Float)
  ExpireDate?: Date// [2] 432 (LocalDate)
  AssignmentMethod?: string// [2] 744 (String)
  AssignmentUnit?: number// [2] 745 (Float)
  OpenInterest?: number// [2] 746 (Float)
  ExerciseMethod?: string// [2] 747 (String)
  SettlSessID?: string// [2] 716 (String)
  SettlSessSubID?: string// [2] 717 (String)
  ClearingBusinessDate: Date// [2] 715 (LocalDate)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  Instrument?: IInstrument// [4] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrmtLegGrp?: IInstrmtLegGrp[]// [5] Sym.600, Sfx.601 .. ExchLookAlike.2607
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] Sym.311, Sfx.312 .. XID.2631
  PositionQty?: IPositionQty[]// [7] Typ.703, Long.704 .. UOMCcy.1835
  PositionAmountData?: IPositionAmountData[]// [8] Typ.707, Amt.708 .. MktID.2100
}
