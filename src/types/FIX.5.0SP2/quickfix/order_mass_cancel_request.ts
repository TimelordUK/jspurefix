import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'
import { ITargetParties } from './set/target_parties'

/*
****************************************************************
* The order mass cancel request message requests the           *
* cancellation of all of the remaining quantity of a group of  *
* orders matching criteria specified within the request. NOTE: *
* This message can only be used to cancel order messages       *
* (reduce the full quantity).                                  *
****************************************************************
*/
export interface IOrderMassCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  MassCancelRequestType: string// [4] 530 (String)
  TradingSessionID?: string// [5] 336 (String)
  TradingSessionSubID?: string// [6] 625 (String)
  Parties?: IParties[]// [7] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Instrument?: IInstrument// [8] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UnderlyingInstrument?: IUnderlyingInstrument// [9] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingDetachmentPoint.1460
  MarketID?: string// [10] 1301 (String)
  MarketSegmentID?: string// [11] 1300 (String)
  Side?: string// [12] 54 (String)
  TransactTime: Date// [13] 60 (UtcTimestamp)
  Text?: string// [14] 58 (String)
  EncodedTextLen?: number// [15] 354 (Int)
  EncodedText?: Buffer// [16] 355 (RawData)
  StandardTrailer: IStandardTrailer// [17] SignatureLength.93, Signature.89, CheckSum.10
  TargetParties?: ITargetParties[]// [18] TargetPartyID.1462, TargetPartyIDSource.1463, TargetPartyRole.1464
}
