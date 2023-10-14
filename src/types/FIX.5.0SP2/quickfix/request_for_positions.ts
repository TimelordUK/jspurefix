import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Request For Positions message is used by the owner of a  *
* position to request a Position Report from the holder of the *
* position, usually the central counter party or clearing      *
* organization. The request can be made at several levels of   *
* granularity.                                                 *
****************************************************************
*/
export interface IRequestForPositions {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosReqID: string// [2] 710 (String)
  PosReqType: number// [3] 724 (Int)
  MatchStatus?: string// [4] 573 (String)
  SubscriptionRequestType?: string// [5] 263 (String)
  SettlCurrency?: string// [6] 120 (String)
  Parties: IParties[]// [7] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [8] 1 (String)
  AcctIDSource?: number// [9] 660 (Int)
  AccountType?: number// [10] 581 (Int)
  Instrument?: IInstrument// [11] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  Currency?: string// [12] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [13] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  UndInstrmtGrp?: IUndInstrmtGrp// [14] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  ClearingBusinessDate: Date// [15] 715 (LocalDate)
  SettlSessID?: string// [16] 716 (String)
  SettlSessSubID?: string// [17] 717 (String)
  TrdgSesGrp?: ITrdgSesGrp[]// [18] TradingSessionID.336, TradingSessionSubID.625
  TransactTime: Date// [19] 60 (UtcTimestamp)
  ResponseTransportType?: number// [20] 725 (Int)
  ResponseDestination?: string// [21] 726 (String)
  Text?: string// [22] 58 (String)
  EncodedTextLen?: number// [23] 354 (Int)
  EncodedText?: Buffer// [24] 355 (RawData)
  StandardTrailer: IStandardTrailer// [25] SignatureLength.93, Signature.89, CheckSum.10
}
