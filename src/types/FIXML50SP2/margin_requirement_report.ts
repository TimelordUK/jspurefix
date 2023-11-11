import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IMarginAmount } from './set/margin_amount'

/*
***********************************************************
* MarginRequirementReport can be found in Volume 5 of the *
*                                                         *
* specification                                           *
***********************************************************
*/
export interface IMarginRequirementReport {
  MarginReqmtRptID: string// [2] 1642 (String)
  MarginReqmtInqID?: string// [2] 1635 (String)
  MarginReqmtRptType: number// [2] 1638 (Int)
  TotNumReports?: number// [2] 911 (Int)
  LastRptRequested?: boolean// [2] 912 (Boolean)
  UnsolicitedIndicator?: boolean// [2] 325 (Boolean)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  SettlSessID?: string// [2] 716 (String)
  SettlSessSubID?: string// [2] 717 (String)
  MarginClass?: string// [2] 1639 (String)
  Currency?: string// [2] 15 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  Instrument?: IInstrument// [4] Sym.55, Sfx.65 .. ExchLookAlike.2603
  MarginAmount?: IMarginAmount[]// [5] Amt.1645, Typ.139 .. MktID.1715
}
