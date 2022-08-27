import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
*****************************
* Request for Positions Ack *
*****************************
*/
export interface IRequestForPositionsAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  PosMaintRptID: string// [2] 721 (String)
  PosReqID?: string// [3] 710 (String)
  TotalNumPosReports?: number// [4] 727 (Int)
  UnsolicitedIndicator?: boolean// [5] 325 (Boolean)
  PosReqResult: number// [6] 728 (Int)
  PosReqStatus: number// [7] 729 (Int)
  Parties: IParties[]// [8] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account: string// [9] 1 (String)
  AcctIDSource?: number// [10] 660 (Int)
  AccountType: number// [11] 581 (Int)
  Instrument?: IInstrument// [12] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  Currency?: string// [13] 15 (String)
  InstrmtLegGrp?: IInstrmtLegGrp[]// [14] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  UndInstrmtGrp?: IUndInstrmtGrp[]// [15] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  ResponseTransportType?: number// [16] 725 (Int)
  ResponseDestination?: string// [17] 726 (String)
  Text?: string// [18] 58 (String)
  EncodedTextLen?: number// [19] 354 (Int)
  EncodedText?: Buffer// [20] 355 (RawData)
  StandardTrailer: IStandardTrailer// [21] SignatureLength.93, Signature.89, CheckSum.10
}
