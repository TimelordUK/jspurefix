import { IStandardHeader } from './set/standard_header'
import { ITargetMarketSegmentGrp } from './set/target_market_segment_grp'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'

/*
**********************************************************
* OrderMassActionRequest can be found in Volume 4 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IOrderMassActionRequest {
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [2] 526 (String)
  MassActionType: number// [2] 1373 (Int)
  MassActionScope: number// [2] 1374 (Int)
  MassActionReason?: number// [2] 2675 (Int)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  Side?: string// [2] 54 (String)
  Price?: number// [2] 44 (Float)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  ComplianceID?: string// [2] 376 (String)
  ComplianceText?: string// [2] 2404 (String)
  EncodedComplianceTextLen?: number// [2] 2351 (Length)
  EncodedComplianceText?: Buffer// [2] 2352 (RawData)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  TargetMarketSegmentGrp?: ITargetMarketSegmentGrp[]// [2] MktSegID.1790
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  TargetParties?: ITargetParties[]// [4] ID.1462, Src.1463 .. Qual.1818
  Instrument?: IInstrument// [5] Sym.55, Sfx.65 .. ExchLookAlike.2603
  UnderlyingInstrument?: IUnderlyingInstrument// [6] Sym.311, Sfx.312 .. XID.2631
}
