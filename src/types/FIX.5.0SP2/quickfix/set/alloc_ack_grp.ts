import { INestedParties } from './nested_parties'

export interface IAllocAckGrp {
  AllocAccount?: string// [1] 79 (String)
  AllocAcctIDSource?: number// [2] 661 (Int)
  AllocPrice?: number// [3] 366 (Float)
  AllocPositionEffect?: string// [4] 1047 (String)
  IndividualAllocID?: string// [5] 467 (String)
  IndividualAllocRejCode?: number// [6] 776 (Int)
  NestedParties?: INestedParties[]// [7] NestedPartyID.524, NestedPartyIDSource.525 .. NestedPartySubIDType.805
  AllocText?: string// [8] 161 (String)
  EncodedAllocTextLen?: number// [9] 360 (Int)
  EncodedAllocText?: Buffer// [10] 361 (RawData)
  SecondaryIndividualAllocID?: string// [11] 989 (String)
  AllocCustomerCapacity?: string// [12] 993 (String)
  IndividualAllocType?: number// [13] 992 (Int)
  AllocQty?: number// [14] 80 (Float)
}
