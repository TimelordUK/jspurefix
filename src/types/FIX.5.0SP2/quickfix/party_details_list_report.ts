import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IPartyDetailGrp } from './set/party_detail_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPartyDetailsListReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  PartyDetailsListReportID: string// [3] 1510 (String)
  PartyDetailsListRequestID?: string// [4] 1505 (String)
  RequestResult?: number// [5] 1511 (Int)
  TotNoParties?: number// [6] 1512 (Int)
  LastFragment?: boolean// [7] 893 (Boolean)
  PartyDetailGrp?: IPartyDetailGrp// [8] NoPartyDetails.1671, PartyDetailID.1691 .. PartyDetailStatus.1672
  TransactTime?: Date// [9] 60 (UtcTimestamp)
  Text?: string// [10] 58 (String)
  EncodedTextLen?: number// [11] 354 (Length)
  EncodedText?: Buffer// [12] 355 (RawData)
  RejectText?: string// [13] 1328 (String)
  EncodedRejectTextLen?: number// [14] 1664 (Length)
  EncodedRejectText?: Buffer// [15] 1665 (RawData)
  StandardTrailer: IStandardTrailer// [16] SignatureLength.93, Signature.89, CheckSum.10
}
