import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

export interface ICollateralReportAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  CollRptID: string// [2] 908 (String)
  TransactTime?: Date// [3] 60 (UtcTimestamp)
  CollRptStatus: number// [4] 2488 (Int)
  CollRptRejectReason?: number// [5] 2487 (Int)
  RejectText?: string// [6] 1328 (String)
  EncodedRejectTextLen?: number// [7] 1664 (Length)
  EncodedRejectText?: Buffer// [8] 1665 (RawData)
  Parties?: IParties// [9] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Length)
  EncodedText?: Buffer// [12] 355 (RawData)
  StandardTrailer: IStandardTrailer// [13] SignatureLength.93, Signature.89, CheckSum.10
}
