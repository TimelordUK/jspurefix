import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The Request for Positions Ack message is returned by the  *
* holder of the position in response to a Request for       *
* Positions message. The purpose of the message is to       *
* acknowledge that a request has been received and is being *
* processed.                                                *
*************************************************************
*/
export interface IRequestForPositionsAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosMaintRptID: string// [2] 721 (String)
  PosReqID?: string// [3] 710 (String)
  TotalNumPosReports?: number// [4] 727 (Int)
  UnsolicitedIndicator?: boolean// [5] 325 (Boolean)
  PosReqResult: number// [6] 728 (Int)
  PosReqStatus: number// [7] 729 (Int)
  PosReqType?: number// [8] 724 (Int)
  MatchStatus?: string// [9] 573 (String)
  ClearingBusinessDate?: Date// [10] 715 (LocalDate)
  SubscriptionRequestType?: string// [11] 263 (String)
  SettlSessID?: string// [12] 716 (String)
  SettlSessSubID?: string// [13] 717 (String)
  SettlCurrency?: string// [14] 120 (String)
  Parties: IParties[]// [15] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [16] 1 (String)
  AcctIDSource?: number// [17] 660 (Int)
  AccountType?: number// [18] 581 (Int)
  Instrument?: IInstrument// [19] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  Currency?: string// [20] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp// [21] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  UndInstrmtGrp?: IUndInstrmtGrp// [22] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  ResponseTransportType?: number// [23] 725 (Int)
  ResponseDestination?: string// [24] 726 (String)
  Text?: string// [25] 58 (String)
  EncodedTextLen?: number// [26] 354 (Int)
  EncodedText?: Buffer// [27] 355 (RawData)
  StandardTrailer: IStandardTrailer// [28] SignatureLength.93, Signature.89, CheckSum.10
}
