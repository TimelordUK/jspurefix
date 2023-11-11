import { INestedParties } from './nested_parties'

export interface IApplIDRequestGrp {
  RefApplID?: string// [1] 1355 (String)
  RefApplReqID?: string// [1] 1433 (String)
  ApplBegSeqNum?: number// [1] 1182 (Int)
  ApplEndSeqNum?: number// [1] 1183 (Int)
  NestedParties?: INestedParties[]// [1] ID.524, Src.525 .. Qual.2384
}
