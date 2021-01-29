import { INestedParties3 } from './nested_parties_3'

export interface IPreAllocMlegGrp {
  AllocAccount?: string// 79
  AllocAcctIDSource?: number// 661
  AllocSettlCurrency?: string// 736
  IndividualAllocID?: string// 467
  NestedParties3?: INestedParties3[]
  AllocQty?: number// 80
}
