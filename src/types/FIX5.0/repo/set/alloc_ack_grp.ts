import { INestedParties } from './nested_parties'

export interface IAllocAckGrp {
  AllocAccount?: string// 79
  AllocAcctIDSource?: number// 661
  AllocPrice?: number// 366
  AllocPositionEffect?: string// 1047
  IndividualAllocID?: string// 467
  IndividualAllocRejCode?: number// 776
  NestedParties?: INestedParties[]
  AllocText?: string// 161
  EncodedAllocTextLen?: number// 360
  EncodedAllocText?: Buffer// 361
  SecondaryIndividualAllocID?: string// 989
  AllocCustomerCapacity?: string// 993
  IndividualAllocType?: number// 992
  AllocQty?: number// 80
}
