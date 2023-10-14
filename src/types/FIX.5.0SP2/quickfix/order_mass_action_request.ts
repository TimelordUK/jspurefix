import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'
import { ITargetParties } from './set/target_parties'

/*
****************************************************************
* The Order Mass Action Request message can be used to request *
* the suspension or release of a group of orders that match    *
* the criteria specified within the request. This is           *
* equivalent to individual Order Cancel Replace Requests for   *
* each order with or without adding "S" to the ExecInst        *
* values. It can also be used for mass order cancellation.     *
****************************************************************
*/
export interface IOrderMassActionRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  MassActionType: number// [4] 1373 (Int)
  MassActionScope: number// [5] 1374 (Int)
  MarketID?: string// [6] 1301 (String)
  MarketSegmentID?: string// [7] 1300 (String)
  TradingSessionID?: string// [8] 336 (String)
  TradingSessionSubID?: string// [9] 625 (String)
  Parties?: IParties[]// [10] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Instrument?: IInstrument// [11] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UnderlyingInstrument?: IUnderlyingInstrument// [12] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingDetachmentPoint.1460
  Side?: string// [13] 54 (String)
  TransactTime: Date// [14] 60 (UtcTimestamp)
  Text?: string// [15] 58 (String)
  EncodedTextLen?: number// [16] 354 (Int)
  EncodedText?: Buffer// [17] 355 (RawData)
  StandardTrailer: IStandardTrailer// [18] SignatureLength.93, Signature.89, CheckSum.10
  TargetParties?: ITargetParties[]// [19] TargetPartyID.1462, TargetPartyIDSource.1463, TargetPartyRole.1464
}
