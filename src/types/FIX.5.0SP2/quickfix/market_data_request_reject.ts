import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IMDRjctGrp } from './set/md_rjct_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataRequestReject {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MDReqID: string// [2] 262 (String)
  Parties?: IParties// [3] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  MDReqRejReason?: string// [4] 281 (String)
  MDRjctGrp?: IMDRjctGrp// [5] NoAltMDSource.816, AltMDSourceID.817
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Length)
  EncodedText?: Buffer// [8] 355 (RawData)
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
