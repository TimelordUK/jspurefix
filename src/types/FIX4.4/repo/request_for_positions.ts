import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************
* Request For Positions *
*************************
*/
export interface IRequestForPositions {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosReqID: string// [2] 710 (String)
  PosReqType: number// [3] 724 (Int)
  MatchStatus?: string// [4] 573 (String)
  SubscriptionRequestType?: string// [5] 263 (String)
  Parties: IParties[]// [6] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account: string// [7] 1 (String)
  AcctIDSource?: number// [8] 660 (Int)
  AccountType: number// [9] 581 (Int)
  Instrument?: IInstrument// [10] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  Currency?: string// [11] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp[]// [12] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  UndInstrmtGrp?: IUndInstrmtGrp[]// [13] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  ClearingBusinessDate: Date// [14] 715 (LocalDate)
  SettlSessID?: string// [15] 716 (String)
  SettlSessSubID?: string// [16] 717 (String)
  TrdgSesGrp?: ITrdgSesGrp[]// [17] TradingSessionID.336, TradingSessionSubID.625
  TransactTime: Date// [18] 60 (UtcTimestamp)
  ResponseTransportType?: number// [19] 725 (Int)
  ResponseDestination?: string// [20] 726 (String)
  Text?: string// [21] 58 (String)
  EncodedTextLen?: number// [22] 354 (Int)
  EncodedText?: Buffer// [23] 355 (RawData)
  StandardTrailer: IStandardTrailer// [24] SignatureLength.93, Signature.89, CheckSum.10
}
