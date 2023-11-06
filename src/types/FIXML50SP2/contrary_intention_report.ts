import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IExpirationQty } from './set/expiration_qty'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'

/*
***********************************************************
* ContraryIntentionReport can be found in Volume 5 of the *
*                                                         *
* specification                                           *
***********************************************************
*/
export interface IContraryIntentionReport {
  ContIntRptID: string// [2] 977 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  LateIndicator?: boolean// [2] 978 (Boolean)
  InputSource?: string// [2] 979 (String)
  ClearingBusinessDate: Date// [2] 715 (LocalDate)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  ExpirationQty?: IExpirationQty[]// [4] ExpTyp.982, ExpQty.983
  Instrument?: IInstrument// [5] Sym.55, Sfx.65 .. ExchLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] Sym.311, Sfx.312 .. XID.2631
}
