import { IStandardHeader } from './set/standard_header'
import { IMarginReqmtInqQualGrp } from './set/margin_reqmt_inq_qual_grp'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'

/*
************************************************************
* MarginRequirementInquiry can be found in Volume 5 of the *
*                                                          *
* specification                                            *
************************************************************
*/
export interface IMarginRequirementInquiry {
  MarginReqmtInqID: string// [2] 1635 (String)
  SubscriptionRequestType?: string// [2] 263 (String)
  ResponseTransportType?: number// [2] 725 (Int)
  ResponseDestination?: string// [2] 726 (String)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  SettlSessID?: string// [2] 716 (String)
  SettlSessSubID?: string// [2] 717 (String)
  MarginClass?: string// [2] 1639 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  MarginReqmtInqQualGrp?: IMarginReqmtInqQualGrp[]// [2] Qual.1637
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  Instrument?: IInstrument// [4] Sym.55, Sfx.65 .. ExchLookAlike.2603
}
