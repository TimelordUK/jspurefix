import { INestedParties2 } from './nested_parties_2'

export interface IOrdAllocGrpNoOrders {
  ClOrdID?: string// [1] 11 (String)
  OrderID?: string// [2] 37 (String)
  SecondaryOrderID?: string// [3] 198 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  ListID?: string// [5] 66 (String)
  NestedParties2?: INestedParties2// [6] NoNested2PartyIDs.756, Nested2PartyID.757 .. Nested2PartySubIDType.807
  OrderQty?: number// [7] 38 (Float)
  OrderAvgPx?: number// [8] 799 (Float)
  OrderBookingQty?: number// [9] 800 (Float)
}
