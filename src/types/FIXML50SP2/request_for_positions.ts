import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'

/*
*******************************************************
* RequestForPositions can be found in Volume 5 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface IRequestForPositions {
  PosReqID: string// [2] 710 (String)
  PosReqType: number// [2] 724 (Int)
  MatchStatus?: string// [2] 573 (String)
  SubscriptionRequestType?: string// [2] 263 (String)
  SettlCurrency?: string// [2] 120 (String)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  Currency?: string// [2] 15 (String)
  ClearingBusinessDate: Date// [2] 715 (LocalDate)
  SettlDate?: Date// [2] 64 (LocalDate)
  SettlSessID?: string// [2] 716 (String)
  SettlSessSubID?: string// [2] 717 (String)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  ResponseTransportType?: number// [2] 725 (Int)
  ResponseDestination?: string// [2] 726 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  Instrument?: IInstrument// [3] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrmtLegGrp?: IInstrmtLegGrp[]// [4] Sym.600, Sfx.601 .. ExchLookAlike.2607
  UndInstrmtGrp?: IUndInstrmtGrp[]// [5] Sym.311, Sfx.312 .. XID.2631
  TrdgSesGrp?: ITrdgSesGrp[]// [6] SesID.336, SesSub.625
}
