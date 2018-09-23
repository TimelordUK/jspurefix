import { INestedParties } from './nested_parties'

export interface IPreAllocGrpNoAllocs {
  AllocAccount?: string// 79
  AllocAcctIDSource?: number// 661
  AllocSettlCurrency?: number// 736
  IndividualAllocID?: string// 467
  NestedParties?: INestedParties
  AllocQty?: number// 80
}
