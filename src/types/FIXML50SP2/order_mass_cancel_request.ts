import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'

/*
**********************************************************
* OrderMassCancelRequest can be found in Volume 4 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IOrderMassCancelRequest {
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [2] 526 (String)
  MassCancelRequestType: string// [2] 530 (String)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  Side?: string// [2] 54 (String)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  TargetParties?: ITargetParties[]// [3] ID.1462, Src.1463 .. Qual.1818
  Instrument?: IInstrument// [4] Sym.55, Sfx.65 .. ExchLookAlike.2603
  UnderlyingInstrument?: IUnderlyingInstrument// [5] Sym.311, Sfx.312 .. XID.2631
}
