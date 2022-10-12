import { INestedParties } from './nested_parties'

export interface INewOrderSingleNoAllocs {
  AllocAccount?: string// [1] 79 (String)
  IndividualAllocID?: string// [2] 467 (String)
  NestedParties?: INestedParties// [3] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubID.545
  AllocQty?: number// [4] 80 (Float)
}
