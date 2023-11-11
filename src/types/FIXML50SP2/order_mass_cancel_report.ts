import { IStandardHeader } from './set/standard_header'
import { IAffectedOrdGrp } from './set/affected_ord_grp'
import { INotAffectedOrdGrp } from './set/not_affected_ord_grp'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'

/*
*********************************************************
* OrderMassCancelReport can be found in Volume 4 of the *
*                                                       *
* specification                                         *
*********************************************************
*/
export interface IOrderMassCancelReport {
  ClOrdID?: string// [2] 11 (String)
  SecondaryClOrdID?: string// [2] 526 (String)
  OrderID: string// [2] 37 (String)
  MassActionReportID: string// [2] 1369 (String)
  SecondaryOrderID?: string// [2] 198 (String)
  MassCancelRequestType: string// [2] 530 (String)
  MassCancelResponse: string// [2] 531 (String)
  MassCancelRejectReason?: number// [2] 532 (Int)
  TotalAffectedOrders?: number// [2] 533 (Int)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  Side?: string// [2] 54 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  AffectedOrdGrp?: IAffectedOrdGrp[]// [2] OrigClOrdID.1824, OrdID.535, OrdID2.536
  NotAffectedOrdGrp?: INotAffectedOrdGrp[]// [3] OrigClOrdID.1372, OrdID.1371 .. Rsn.1583
  Parties?: IParties[]// [4] ID.448, Src.447 .. Qual.2376
  TargetParties?: ITargetParties[]// [5] ID.1462, Src.1463 .. Qual.1818
  Instrument?: IInstrument// [6] Sym.55, Sfx.65 .. ExchLookAlike.2603
  UnderlyingInstrument?: IUnderlyingInstrument// [7] Sym.311, Sfx.312 .. XID.2631
}
