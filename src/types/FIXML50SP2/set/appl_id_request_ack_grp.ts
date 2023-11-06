import { INestedParties } from './nested_parties'

export interface IApplIDRequestAckGrp {
  RefApplID?: string// [1] 1355 (String)
  RefApplReqID?: string// [1] 1433 (String)
  ApplBegSeqNum?: number// [1] 1182 (Int)
  ApplEndSeqNum?: number// [1] 1183 (Int)
  RefApplLastSeqNum?: number// [1] 1357 (Int)
  ApplResponseError?: number// [1] 1354 (Int)
  NestedParties?: INestedParties[]// [1] ID.524, Src.525 .. Qual.2384
}
