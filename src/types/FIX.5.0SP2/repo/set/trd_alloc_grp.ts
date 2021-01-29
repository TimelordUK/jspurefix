import { INestedParties2 } from './nested_parties_2'

export interface ITrdAllocGrp {
  AllocAccount?: string// 79
  AllocAcctIDSource?: number// 661
  AllocSettlCurrency?: string// 736
  IndividualAllocID?: string// 467
  NestedParties2?: INestedParties2[]
  AllocQty?: number// 80
  AllocCustomerCapacity?: string// 993
  AllocMethod?: number// 1002
  SecondaryIndividualAllocID?: string// 989
  AllocClearingFeeIndicator?: string// 1136
}
